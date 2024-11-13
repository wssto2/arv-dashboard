<script setup lang="ts">
import { ref, onMounted, computed } from 'vue';
import { joinPath } from '../helpers';
import Loader from '../components/Loader.vue';
import { useI18n } from 'vue-i18n';
import type { MessageSchema } from '../locales/schema';
const { t } = useI18n<{ message: MessageSchema }>();

const LIMIT_LOW = 60;
const LIMIT_HIGHT = 80;

type VegaActiveStatusByBrandRow = {
	dealer_name: string;
	renault_active: number;
	renault_percentage: number;
	renault_total: number;
	dacia_active: number;
	dacia_percentage: number;
	dacia_total: number;
	nissan_active: number;
	nissan_percentage: number;
	nissan_total: number;
}

const isFetching = ref(false);
const data = ref<VegaActiveStatusByBrandRow[]>([]);

const fetch = async () => {

	// Prevent multiple requests
	if (isFetching.value) {
		return;
	}

	isFetching.value = true;

	try {

		const endpoint = joinPath(window?.DASHBOARD_STATE?.api_base_url || '', '/widgets/vega_active_status_by_brand');
		const token = window?.DASHBOARD_STATE?.api_token;

		if (!token) {
			throw new Error('API token is missing');
		}

		const response = await window.fetch(endpoint, {
			headers: {
				'Authorization': `Bearer ${token}`
			}
		});

		if (!response.ok) {
			throw new Error('Failed to fetch data');
		}

		data.value = await response.json();

	} catch (error) {
		console.error(error);
	} finally {
		isFetching.value = false;
	}
}

const isExpanded = ref(false);

const toggle = () => {
	isExpanded.value = !isExpanded.value;
}

const table = ref<HTMLTableElement | null>(null);

// Button is visible only if table height is greater than 300px
const isExpandButtonVisible = computed(() => {
	return (table.value?.offsetHeight || 0) > 300;
});

// Returns formatted percentage without decimal places
const round = (value: number) => {
	return Math.round(value);
}

const cellStyle = (value: number) => {
	if (value < LIMIT_LOW) {
		return 'text-danger-800';
	} else if (value > LIMIT_HIGHT) {
		return 'text-success-800';
	} else {
		return 'text-orange-800';
	}
}

onMounted(() => {
	fetch();
});
</script>

<template>
	<div class="panel panel-white no-margin">
		<div class="panel-heading">
			<div style="display: flex; align-items: center;">
				<h6 class="panel-title" style="flex: 1;">
					<span class="text-default">{{ t('vega_active_status_by_brand.title') }}</span>
				</h6>
				<a v-show="isExpandButtonVisible" href="#" @click.prevent="toggle" class="mr-20">
					<svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="feather feather-maximize-2"><polyline points="15 3 21 3 21 9"/><polyline points="9 21 3 21 3 15"/><line x1="21" y1="3" x2="14" y2="10"/><line x1="3" y1="21" x2="10" y2="14"/></svg>
				</a>
				<a href="#" @click.prevent="fetch">
					<svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="feather feather-refresh-ccw"><polyline points="1 4 1 10 7 10"/><polyline points="23 20 23 14 17 14"/><path d="M20.49 9A9 9 0 0 0 5.64 5.64L1 10m22 4l-4.64 4.36A9 9 0 0 1 3.51 15"/></svg>
				</a>
			</div>
		</div>
		<div v-if="isFetching" class="panel-body text-center">
			<div style="display: flex; justify-content: center; align-items: center; min-height: 260px;">
				<loader :width="30" />
			</div>
		</div>
		<div v-else class="panel-body no-padding" :style="`max-height: ${isExpanded ? 'auto' : '300px'}; overflow-y: auto;`">
			<table ref="table" class="table text-nowrap table-fixed-header">
				<thead style="position: sticky; top: 0; z-index: 1; background-color: #fff; box-shadow: 0 -4px 8px 0px #000;">
					<tr>
						<th></th>
						<th colspan="3" class="text-center bg-orange-700">{{ t('vega_active_status_by_brand.renault') }}</th>
						<th colspan="3" class="text-center bg-green-700">{{ t('vega_active_status_by_brand.dacia') }}</th>
						<th colspan="3" class="text-center bg-danger-700">{{ t('vega_active_status_by_brand.nissan') }}</th>
					</tr>
					<tr>
						<th>{{ t('sale_summary_by_dealer.dealer') }}<div class="fht-cell" style="width: 199px;"></div></th>
						<th width="150" class="text-center bg-orange">{{ t('vega_active_status_by_brand.total') }}<div class="fht-cell" style="width: 100px;"></div></th>
						<th width="150" class="text-center bg-orange">{{ t('vega_active_status_by_brand.active') }}<div class="fht-cell" style="width: 100px;"></div></th>
						<th width="150" class="text-center bg-orange">%<div class="fht-cell" style="width: 100px;"></div></th>
						<th width="150" class="text-center bg-green">{{ t('vega_active_status_by_brand.total') }}<div class="fht-cell" style="width: 100px;"></div></th>
						<th width="150" class="text-center bg-green">{{ t('vega_active_status_by_brand.active') }}<div class="fht-cell" style="width: 100px;"></div></th>
						<th width="150" class="text-center bg-green">%<div class="fht-cell" style="width: 100px;"></div></th>
						<th width="150" class="text-center bg-danger">{{ t('vega_active_status_by_brand.total') }}<div class="fht-cell" style="width: 100px;"></div></th>
						<th width="150" class="text-center bg-danger">{{ t('vega_active_status_by_brand.active') }}<div class="fht-cell" style="width: 100px;"></div></th>
						<th width="150" class="text-center bg-danger">%<div class="fht-cell" style="width: 100px;"></div></th>
					</tr>
				</thead>
				<tbody>
					<tr v-for="row in data" :key="row.dealer_name">
						<td>{{ row.dealer_name }}</td>
						<td class="text-semibold text-center alpha-orange">{{ row.renault_total }}</td>
						<td class="text-semibold text-center alpha-orange">{{ row.renault_active }}</td>
						<td :class="['text-semibold text-center alpha-orange', cellStyle(row.renault_percentage)]">{{ round(row.renault_percentage) }}%</td>
						<td class="text-semibold text-center alpha-green">{{ row.dacia_total }}</td>
						<td class="text-semibold text-center alpha-green">{{ row.dacia_active }}</td>
						<td :class="['text-semibold text-center alpha-green', cellStyle(row.dacia_percentage)]">{{ round(row.dacia_percentage) }}%</td>
						<td class="text-semibold text-center alpha-danger">{{ row.nissan_total }}</td>
						<td class="text-semibold text-center alpha-danger">{{ row.nissan_active }}</td>
						<td :class="['text-semibold text-center alpha-danger', cellStyle(row.nissan_percentage)]">{{ round(row.nissan_percentage) }}%</td>
					</tr>
				</tbody>
			</table>
		</div>
	</div>
</template>