<script setup lang="ts">
import { ref, onMounted, computed } from 'vue';
import { joinPath } from '../helpers';
import Loader from '../components/Loader.vue';
import { useI18n } from 'vue-i18n';
import type { MessageSchema } from '../locales/schema';
const { t } = useI18n<{ message: MessageSchema }>();

type SummaryData = {
	total: number;
	average: number;
}

type SummaryByPhase = {
	confirmed_evaluations: SummaryData;
	evaluations: SummaryData;
	vehicles_for_delivery: SummaryData;
	vehicles_in_preparation: SummaryData;
	vehicles_in_sale: SummaryData;
}

const isFetching = ref(false);
const data = ref<SummaryByPhase>({
	confirmed_evaluations: {
		total: 0,
		average: 0,
	},
	evaluations: {
		total: 0,
		average: 0,
	},
	vehicles_for_delivery: {
		total: 0,
		average: 0,
	},
	vehicles_in_preparation: {
		total: 0,
		average: 0,
	},
	vehicles_in_sale: {
		total: 0,
		average: 0,
	},
});

const fetch = async () => {

	// Prevent multiple requests
	if (isFetching.value) {
		return;
	}

	isFetching.value = true;

	try {

		const endpoint = joinPath(window?.DASHBOARD_STATE?.api_base_url || '', '/widgets/summary_by_phase');
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

const totalVehicles = computed(() => {
	return Object.values(data.value).reduce((acc, phase) => acc + phase.total, 0);
});

onMounted(() => {
	fetch();
});
</script>

<template>
	<div class="panel panel-white no-margin">
		<div class="panel-heading">
			<div style="display: flex; align-items: center;">
				<h6 class="panel-title" style="flex: 1;">
					<span class="text-default">{{ t('summary_by_phase.title') }}</span>
				</h6>

				<div class="panel-heading-meta">
					<span>{{ t('summary_by_phase.heading_total') }}: <strong>{{ totalVehicles }}</strong></span>
				</div>

				<a href="#" @click.prevent="fetch">
					<svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="feather feather-refresh-ccw"><polyline points="1 4 1 10 7 10"/><polyline points="23 20 23 14 17 14"/><path d="M20.49 9A9 9 0 0 0 5.64 5.64L1 10m22 4l-4.64 4.36A9 9 0 0 1 3.51 15"/></svg>
				</a>
			</div>
		</div>
		<div v-if="isFetching" class="panel-body text-center">
			<div style="display: flex; justify-content: center; align-items: center; min-height: 229px;">
				<loader :width="30" />
			</div>
		</div>
		<div v-else class="panel-body no-padding">
			<table class="table">
				<thead>
					<tr>
						<th>{{ t('summary_by_phase.phase') }}</th>
						<th width="180" class="text-center">{{ t('summary_by_phase.total') }}</th>
						<th width="180" class="text-center">{{ t('summary_by_phase.average') }}</th>
					</tr>
				</thead>
				<tbody>
					<tr>
						<td>{{ t('summary_by_phase.evaluations') }}</td>
						<td class="text-center">{{ data.evaluations.total }}</td>
						<td class="text-center">{{ data.evaluations.average }}</td>
					</tr>
					<tr>
						<td>{{ t('summary_by_phase.confirmed_evaluations') }}</td>
						<td class="text-center">{{ data.confirmed_evaluations.total }}</td>
						<td class="text-center">{{ data.confirmed_evaluations.average }}</td>
					</tr>
					<tr>
						<td>{{ t('summary_by_phase.vehicles_in_preparation') }}</td>
						<td class="text-center">{{ data.vehicles_in_preparation.total }}</td>
						<td class="text-center">{{ data.vehicles_in_preparation.average }}</td>
					</tr>
					<tr>
						<td>{{ t('summary_by_phase.vehicles_in_sales') }}</td>
						<td class="text-center">{{ data.vehicles_in_sale.total }}</td>
						<td class="text-center">{{ data.vehicles_in_sale.average }}</td>
					</tr>
					<tr>
						<td>{{ t('summary_by_phase.vehicles_for_delivery') }}</td>
						<td class="text-center">{{ data.vehicles_for_delivery.total }}</td>
						<td class="text-center">{{ data.vehicles_for_delivery.average }}</td>
					</tr>
				</tbody>
			</table>
		</div>
	</div>
</template>