<script setup lang="ts">
import { computed, onMounted, onBeforeUnmount } from 'vue';
import { Collection, Column } from '.';
import Panel from '../Panel.vue';
import CollectionFilter from './CollectionFilter.vue';
import { debounce } from '../../helpers';

const props = withDefaults(defineProps<{
	collection: Collection<any>;
	withActions?: boolean;
	rowHeight?: number;
}>(), {
	withActions: false,
	rowHeight: 40,
});

const columns = props.collection.columns;
const isFetching = props.collection.isFetching;
const perPage = props.collection.perPage;
const views = props.collection.views;
const activeView = props.collection.activeView;
const orderColumn = props.collection.orderColumnKey;
const orderDirection = props.collection.orderDirection;

const minTableHeight = computed(() => {
	const header = 45;
	const borders = perPage.value - 1;
	const rowHeight = props.rowHeight || 40;

	return (perPage.value * rowHeight) + header + borders + 'px';
});

function getColumnClassList(key: string, column: Column) {
	let out = [];

	if (column.hideOnMobile) {
		out.push('hidden-xs');
	}

	if (! column.orderable) {
		return out;
	}

	if (orderColumn.value !== key) {
		out.push('sorting');

		return out;
	}

	if (orderDirection.value === 'asc') {
		out.push('sorting_asc');
	} else {
		out.push('sorting_desc');
	}

	return out;
}

function getColumnStyle(column: Column) {
	const style: Record<string, string> = {};

	if (column.width) {
		style.width = `${column.width}px`;
	}

	if (column.align) {
		style.textAlign = column.align;
	}

	return style;
}

function onViewButtonClick(view: string) {
	props.collection.setView(view)
		.fromPage(1)
		.fetch();
}

function onChangeOrderClick(column: string) {
	if (! columns.value[column].orderable) {
		return;
	}

	// If the column is already ordered by the same column, reverse the order direction
	if (orderColumn.value === column) {
		props.collection.orderBy(column, orderDirection.value === 'asc' ? 'desc' : 'asc')
			.fetch();

		return;
	}

	props.collection.orderBy(column, 'asc')
		.fetch();
}

function onFiltersUpdate(key: string, value: any) {
	props.collection.setFilter(key, value)
		.fromPage(1)
		.fetch();
}

const onSearchInput = debounce((event: InputEvent) => {
	const target = event.target as HTMLInputElement;

	props.collection.searchBy(target.value)
		.fromPage(1)
		.fetch();
}, 300) as (payload: Event) => void;

// Add event listener for CTRL + F AND COMMAND + F to focus the search input
function onKeydown(event: KeyboardEvent) {
	if (event.key === 'f' && (event.ctrlKey || event.metaKey)) {
		event.preventDefault();

		const searchInput = document.querySelector('.collection-search input') as HTMLInputElement;

		if (searchInput) {
			searchInput.focus();
		}
	}
}

function onSearchInputKeyDown(event: KeyboardEvent) {
	// If the user presses the tab key, focus the link in the first row
	if (event.key === 'Tab') {
		event.preventDefault();

		const firstRow = document.querySelector('.collection table tbody tr:first-child a') as HTMLAnchorElement;

		if (firstRow) {
			firstRow.focus();
		}
	}
}

onMounted(() => {
	document.addEventListener('keydown', onKeydown);
});

onBeforeUnmount(() => {
	document.removeEventListener('keydown', onKeydown);
});
</script>

<template>
	<div class="collection" :style="`--row-height: ${props.rowHeight || 40}px`">
		<div class="collection-toolbar mb-10" style="user-select: none;">
			<div class="btn-tab-group collection-views mb-20">
				<button 
					v-for="view in views" 
					:key="view.key" 
					:class="['btn-tab', {active: view.key === activeView}]"
					@click.prevent="onViewButtonClick(view.key)"
				>{{ view.label }} <span class="badge">{{ view.count }}</span></button>
			</div>

			<div class="collection-filter-toolbar">
				<div class="collection-search mr-10">
					<icon icon="search" width="16" />
					<input type="text" class="form-control" placeholder="Upišite za pretragu..." @input="onSearchInput" @keydown="onSearchInputKeyDown" />
					<span class="keyboard-shortcut">
						<i>CTRL</i>
						<i>F</i>
					</span>
				</div>

				<div class="collection-filters">
					<collection-filter 
						v-for="filter in props.collection.filters.value" 
						:filter="filter"
						:selected-filters="props.collection.selectedFilters.value"
						class="mr-10"
						@updateFilter="onFiltersUpdate" />
				</div>
			</div>
		</div>
		<panel :without-padding="true" class="mb-10">
			<div class="table-responsive" :style="{minHeight: minTableHeight}">
				<table class="table table-hover dataTable">
					<thead style="user-select: none;">
						<tr>
							<th 
								v-for="(column, columnKey) in columns" 
								:key="columnKey" 
								:class="getColumnClassList(columnKey, column)"
								:style="getColumnStyle(column)"
								@click="onChangeOrderClick(columnKey)"
							>{{ column.label }}</th>
							<th v-if="props.withActions" style="width: 100px;"></th>
						</tr>
					</thead>

					<template v-if="isFetching">
						<tbody>
							<tr v-for="row in perPage" :key="`skeleton-${row}`">
								<td v-for="column in columns" :key="column.label">
									<div class="skeleton"></div>
								</td>
								<td v-if="props.withActions">
									<div class="skeleton"></div>
								</td>
							</tr>
						</tbody>
					</template>

					<slot v-if="! isFetching && props.collection.total.value > 0"></slot>

					<template v-if="! isFetching && props.collection.total.value === 0">
						<tbody>
							<tr>
								<td :colspan="Object.entries(columns).length + (props.withActions ? 1 : 0)" class="text-center">
									<div class="py-8">
										<i class="icon-strategy display-block icon-2x mb-20 text-grey"></i>
										<h6 class="text-bold display-block mb-10">Nema podataka</h6>
										<span class="text-semibold display-block">Prema traženom upitu nisu pronađeni podaci.</span>
									</div>
								</td>
							</tr>
						</tbody>
					</template>
				</table>
			</div>
		</panel>

		<div class="collection-footer" style="user-select: none;">
			<div class="collection-meta">
				<span>Showing {{ props.collection.from }} to {{ props.collection.to }} of {{ props.collection.total }} entries</span>
				<span class="vertical-divider"></span>
				<span class="mr-10">Rows per page</span>
				<select v-model="props.collection.perPage.value" @change="props.collection.fetch()">
					<option v-for="perPage in [10, 25, 50, 100]" :key="perPage" :value="perPage">{{ perPage }}</option>
				</select>
			</div>
			<div class="collection-pagination">
				<p>
					<button class="btn btn-default mr-5" :disabled="props.collection.currentPage.value === 1" @click.prevent="props.collection.prevPage().fetch()"><icon icon="chevronLeft" /></button>
					<button class="btn btn-default" :disabled="props.collection.currentPage.value >= props.collection.lastPage.value" @click.prevent="props.collection.nextPage().fetch()"><icon icon="chevronRight" /></button>
				</p>
			</div>
		</div>
	</div>
</template>

<style scoped>

</style>