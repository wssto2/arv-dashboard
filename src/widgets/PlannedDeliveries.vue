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
	planned_delivery: string;
	created_by: string;
	sold_by: string;
}

type PlannedDeliveries = {
	vehicles: Vehicle[];
	total: number;
	soon_total: number;
}

const isFetching = ref(false);
const data = ref<PlannedDeliveries>({
	vehicles: [],
	total: 0,
	soon_total: 0
});

const fetch = async () => {

	// Prevent multiple requests
	if (isFetching.value) {
		return;
	}

	isFetching.value = true;

	try {

		const endpoint = joinPath(window?.DASHBOARD_STATE?.api_base_url || '', '/widgets/planned_deliveries');
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

// Returns formatted date and time in format "dd.mm.yyyy. hh:mm"
const formatDateTime = (date: string) => {
	const d = new Date(date);
	const day = d.getDate().toString().padStart(2, '0');
	const month = (d.getMonth() + 1).toString().padStart(2, '0');
	const year = d.getFullYear();
	const hours = d.getHours().toString().padStart(2, '0');
	const minutes = d.getMinutes().toString().padStart(2, '0');
	return `${day}.${month}.${year}. ${hours}:${minutes}`;
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
					<span class="text-default">{{ t('planned_deliveries.title') }}</span>
				</h6>

				<div class="panel-heading-meta">
					<span>{{ t('planned_deliveries.heading_soon_total') }}: <strong>{{ data.soon_total }}</strong> / {{ t('planned_deliveries.heading_total') }}: <strong>{{ data.total }}</strong></span>
				</div>

				<a href="#" @click.prevent="fetch">
					<svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="feather feather-refresh-ccw"><polyline points="1 4 1 10 7 10"/><polyline points="23 20 23 14 17 14"/><path d="M20.49 9A9 9 0 0 0 5.64 5.64L1 10m22 4l-4.64 4.36A9 9 0 0 1 3.51 15"/></svg>
				</a>
			</div>
		</div>
		<div v-if="isFetching" class="panel-body text-center">
			<div style="display: flex; justify-content: center; align-items: center; min-height: 234px;">
				<loader :width="30" />
			</div>
		</div>
		<div v-else class="panel-body no-padding">
			<table class="table">
				<tbody>
					<tr v-for="vehicle in data.vehicles" :key="`planned_delivery_vehicle_${vehicle.id}`">
						<td>
							<a :href="`/sto2.php?w=predaja_vozila&d=isporuka_vozila&ID=${vehicle.id}`" class="display-block mb-5">{{ vehicle.title }}</a>
							<p class="text-size-small no-margin">{{ vehicle.sold_by ? vehicle.sold_by : vehicle.created_by }}</p>
						</td>
						<td class="text-right">{{ formatDateTime(vehicle.planned_delivery) }}</td>
					</tr>
				</tbody>
			</table>
		</div>
	</div>
</template>