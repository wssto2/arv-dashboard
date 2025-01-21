<script setup lang="ts">
import { computed, onMounted, ref } from 'vue';
import { useCollection, CollectionTable, Column, CollectionFilter, RowTarget } from '../../../components/collection';
import type { Version } from '../../../types/entry';
import Breadcrumbs from '../../../components/Breadcrumbs.vue';
import VersionModal from './components/VersionModal.vue';
import { useRoute } from 'vue-router';
import StatusLabel from '../../../components/StatusLabel.vue';

const route = useRoute();
const categoryId = computed(() => Number(route.params.categoryId));
const brandId = computed(() => Number(route.params.brandId));
const modelId = computed(() => Number(route.params.modelId));

const accent = 'blue';

const columns: Record<string, Column> = {
	id: { label: 'ID', width: 50, orderable: true, align: 'right', hideOnMobile: true },
	name: { label: 'Name', orderable: true },
	active: { label: 'Status', width: 150, align: 'center' },
	created_at: { label: 'Created At', width: 250, hideOnMobile: true },
	updated_at: { label: 'Updated At', width: 250, hideOnMobile: true },
};

const filters: CollectionFilter[] = [
	{
		key: 'status',
		icon: 'shieldStarFill',
		label: 'Status',
		type: 'select',
		options: [
			{ label: 'Aktivno', value: 1 },
			{ label: 'Neaktivno', value: 2 },
		],
	}
];

const versions = useCollection<Version>()
	.withURL(`definitions/brands/${brandId.value}/models/${modelId.value}/versions`)
	.withColumns(columns)
	.withFilters(filters)
	.orderBy('name', 'asc');

const breadcrumbItems = ref([
	{ name: 'Administracija' },
	{ name: 'Unos vozila' },
	{ name: 'Marke', route: { name: 'administration.definitions.brands' }},
]);

const versionModal = ref<InstanceType<typeof VersionModal>>();

function editVersion(versionId: number) {
	versionModal.value?.showModal(versionId);
}

onMounted(async () => {
	await versions.fetch();

	breadcrumbItems.value.push({ 
		name: versions.meta.value?.brand?.name || 'Models', 
		route: { 
			name: 'administration.definitions.models', 
			params: { brandId }
		}
	} as any);

	breadcrumbItems.value.push({ 
		name: versions.meta.value?.model?.name || 'Versions', 
		route: { 
			name: 'administration.definitions.versions', 
			params: { brandId, modelId }
		}
	} as any);
});
</script>

<template>
	<div class="content">
		<breadcrumbs :items="breadcrumbItems" class="mb-20" :with-home="true" />

		<view-header 
			:title="versions.meta.value?.model?.name || 'Versions'"
			:description="versions.meta.value?.brand?.name || 'Here you can manage versions of vehicles that are used when creating new vehicles.'"
			icon="carWashing" 
			:accent="accent">

			<template #actions>
				<create-button @click="versionModal?.showModal" :keyboard-shortcut="{ key: 'N', ctrlKey: true }">Dodaj verziju</create-button>
			</template>
		</view-header>
		<collection-table :collection="versions" :with-actions="true" :row-height="64">
			<tbody>
				<tr v-for="version in versions.items()" :key="version.id">
					<td class="text-right hidden-xs">{{ version.id }}</td>
					<td>
						<row-target 
							@click="editVersion(version.id as number)"
							:title="version.name" 
							:description="version.renault_version_code"
							:with-decoration="true" 
							:accent="accent" />
					</td>
					<td class="text-center"><status-label :model="version.active" /></td>
					<td class="hidden-xs"><timestamp :date="version.created_at" /></td>
					<td class="hidden-xs"><timestamp :date="version.updated_at" /></td>
					<td class="text-nowrap">
						<a href="#" class="mr-20" @click.prevent="editVersion(version.id as number)">
							<icon icon="edit" />
						</a>

						<a href="#" class="text-danger">
							<icon icon="delete" />
						</a>
					</td>
				</tr>
			</tbody>
		</collection-table>

		<version-modal 
			ref="versionModal" 
			:category-id="categoryId"
			:brand-id="brandId"
			:model-id="modelId"
			@save="versions.fetch()" />
	</div>
</template>