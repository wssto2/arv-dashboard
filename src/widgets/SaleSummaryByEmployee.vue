<script setup lang="ts">
import { ref, onMounted } from 'vue';
import { joinPath } from '../helpers';
import Loader from '../components/Loader.vue';
import { useI18n } from 'vue-i18n';
import type { MessageSchema } from '../locales/schema';
const { t } = useI18n<{ message: MessageSchema }>();

type SaleSummaryByEmployeeRow = {
	employee: string;
	delivered_current_month_total: number;
	delivered_current_year_total: number;
	evaluations_confirmed_current_month_total: number;
	evaluations_confirmed_current_year_total: number;
	evaluations_current_month_total: number;
	evaluations_current_year_total: number;
	sold_current_month_total: number;
	sold_current_year_total: number;
}

const isFetching = ref(false);
const data = ref<SaleSummaryByEmployeeRow[]>([]);

const fetch = async () => {

	// Prevent multiple requests
	if (isFetching.value) {
		return;
	}

	isFetching.value = true;

	try {

		const endpoint = joinPath(window?.DASHBOARD_STATE?.api_base_url || '', '/widgets/sale_summary_by_employee');
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

onMounted(() => {
	fetch();
});
</script>

<template>
	<div class="panel panel-white no-margin">
		<div class="panel-heading">
			<div style="display: flex; align-items: center;">
				<h6 class="panel-title" style="flex: 1;">
					<span class="text-default">{{ t('sale_summary_by_employee.title') }}</span>
				</h6>
				<a href="#" @click.prevent="toggle" class="mr-20">
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
		<div v-else class="panel-body no-padding" :style="`height: ${isExpanded ? 'auto' : '300px'}; overflow-y: auto;`">
			<table class="table text-nowrap table-fixed-header">
				<thead style="position: sticky; top: 0; z-index: 1; background-color: #fff; box-shadow: 0 -4px 8px 0px #000;">
					<tr>
						<th></th>
						<th colspan="4" class="bg-slate-700">{{ t('sale_summary_by_employee.current_month') }}</th>
						<th colspan="4" class="bg-info-700">{{ t('sale_summary_by_employee.current_year') }}</th>
					</tr>
					<tr>
						<th>{{ t('sale_summary_by_employee.employee') }}<div class="fht-cell" style="width: 199px;"></div></th>
						<th width="150" class="text-center bg-slate">{{ t('sale_summary_by_employee.evaluations') }}<div class="fht-cell" style="width: 110px;"></div></th>
						<th width="150" class="text-center bg-slate">{{ t('sale_summary_by_employee.confirmed_evaluations') }}<div class="fht-cell" style="width: 114px;"></div></th>
						<th width="150" class="text-center bg-slate">{{ t('sale_summary_by_employee.sold') }}<div class="fht-cell" style="width: 110px;"></div></th>
						<th width="150" class="text-center bg-slate">{{ t('sale_summary_by_employee.delivered') }}<div class="fht-cell" style="width: 110px;"></div></th>
						<th width="150" class="text-center bg-info">{{ t('sale_summary_by_employee.evaluations') }}<div class="fht-cell" style="width: 110px;"></div></th>
						<th width="150" class="text-center bg-info">{{ t('sale_summary_by_employee.confirmed_evaluations') }}<div class="fht-cell" style="width: 114px;"></div></th>
						<th width="150" class="text-center bg-info">{{ t('sale_summary_by_employee.sold') }}<div class="fht-cell" style="width: 110px;"></div></th>
						<th width="150" class="text-center bg-info">{{ t('sale_summary_by_employee.delivered') }}<div class="fht-cell" style="width: 110px;"></div></th>
					</tr>
				</thead>
				<tbody>
					<tr v-for="row in data" :key="row.employee">
						<td>{{ row.employee }}</td>
						<td class="text-semibold text-center bg-slate-300">{{ row.evaluations_current_month_total }}</td>
						<td class="text-semibold text-center bg-slate-300">{{ row.evaluations_confirmed_current_month_total }}</td>
						<td class="text-semibold text-center bg-slate-300">{{ row.sold_current_month_total }}</td>
						<td class="text-semibold text-center bg-slate-300">{{ row.delivered_current_month_total }}</td>
						<td class="text-semibold text-center bg-info-300">{{ row.evaluations_current_year_total }}</td>
						<td class="text-semibold text-center bg-info-300">{{ row.evaluations_confirmed_current_year_total }}</td>
						<td class="text-semibold text-center bg-info-300">{{ row.sold_current_year_total }}</td>
						<td class="text-semibold text-center bg-info-300">{{ row.delivered_current_year_total }}</td>
					</tr>
				</tbody>
			</table>
		</div>
	</div>
</template>