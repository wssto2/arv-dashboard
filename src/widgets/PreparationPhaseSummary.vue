<script setup lang="ts">
import { ref, onMounted } from 'vue';
import { joinPath } from '../helpers';
import Loader from '../components/Loader.vue';
import { useI18n } from 'vue-i18n';
import type { MessageSchema } from '../locales/schema';
const { t } = useI18n<{ message: MessageSchema }>();

type Vehicle = {
	id: number;
	title: string;
	days: number;
}

type PreparationPhaseSummary = {
	vehicles: Vehicle[];
	total: number;
}

const isFetching = ref(false);
const data = ref<PreparationPhaseSummary>({
	vehicles: [],
	total: 0
});

const fetch = async () => {

	// Prevent multiple requests
	if (isFetching.value) {
		return;
	}

	isFetching.value = true;

	try {

		const endpoint = joinPath(window?.DASHBOARD_STATE?.api_base_url || '', '/widgets/preparation_phase_summary');
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

const vehicleStatusClassList = (vehicle: Vehicle) => {
	if (vehicle.days <= 60) {
		return 'text-success';
	} else if (vehicle.days <= 90) {
		return 'text-warning';
	} else {
		return 'text-danger';
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
					<span class="text-default">{{ t('preparation_phase_summary.title') }}</span>
				</h6>

				<div class="panel-heading-meta">
					<span>{{ t('preparation_phase_summary.heading_total') }}: <strong>{{ data.total }}</strong></span>
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
						<th>{{ t('preparation_phase_summary.vehicle') }}</th>
						<th width="180" class="text-right">{{ t('preparation_phase_summary.days') }}</th>
					</tr>
				</thead>
				<tbody>
					<tr v-for="vehicle in data.vehicles" :key="`preparation_summary_vehicle_${vehicle.id}`">
						<td>
							<a :href="`/sto2.php?w=priprema_vozila&d=edit&ID=${vehicle.id}`">{{ vehicle.title }}</a>
						</td>
						<td :class="['text-right', vehicleStatusClassList(vehicle)]">{{ vehicle.days }}</td>
					</tr>
				</tbody>
			</table>
		</div>
	</div>
</template>