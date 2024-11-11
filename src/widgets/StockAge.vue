<script setup lang="ts">
import { ref, computed, onMounted } from 'vue';
import { joinPath } from '../helpers';
import Loader from '../components/Loader.vue';
import { Chart as ChartJS, ArcElement, Tooltip, Legend, ChartOptions } from 'chart.js'
import { Doughnut } from 'vue-chartjs'
import { useI18n } from 'vue-i18n';
import type { MessageSchema } from '../locales/schema';
const { t } = useI18n<{ message: MessageSchema }>();

ChartJS.register(ArcElement, Tooltip, Legend)

type StockAge = {
	less_than_60: number;
	less_than_90: number;
	more_than_90: number;
}

const isFetching = ref(false);
const data = ref<StockAge>({
	less_than_60: 0,
	less_than_90: 0,
	more_than_90: 0,
});

const fetch = async () => {

	// Prevent multiple requests
	if (isFetching.value) {
		return;
	}

	isFetching.value = true;

	try {

		const endpoint = joinPath(window?.DASHBOARD_STATE?.api_base_url || '', '/widgets/stock_age');
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

onMounted(() => {
	fetch();
});

// Labels below the chart

const formattedData = computed(() => {
	return {
		labels: ['0 - 60', '61 - 90', '> 90'],
		datasets: [
			{
				data: [
					data.value.less_than_60 || 0,
					data.value.less_than_90 || 0,
					data.value.more_than_90 || 0,
				],
				backgroundColor: ['#91cf50', '#ffbf00', '#f90000'],
			}
		]
	}
});

const options: ChartOptions<"doughnut"> = {
	responsive: true,
  maintainAspectRatio: false,
	plugins: {
		legend: {
			display: true,
			position: 'bottom',
		},
	},
}
</script>

<template>
	<div class="panel panel-white no-margin">
		<div class="panel-heading">
			<div style="display: flex; align-items: center;">
				<h6 class="panel-title" style="flex: 1;">
					<span class="text-default">{{ t('stock_age.title') }}</span>
				</h6>
				<a href="#" @click.prevent="fetch">
					<svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="feather feather-refresh-ccw"><polyline points="1 4 1 10 7 10"/><polyline points="23 20 23 14 17 14"/><path d="M20.49 9A9 9 0 0 0 5.64 5.64L1 10m22 4l-4.64 4.36A9 9 0 0 1 3.51 15"/></svg>
				</a>
			</div>
		</div>
		<div v-if="isFetching" class="panel-body text-center">
			<div style="display: flex; justify-content: center; align-items: center; min-height: 300px;">
				<loader :width="30" />
			</div>
		</div>
		<div v-else class="panel-body">
			<Doughnut :data="formattedData" :options="options" />
		</div>
	</div>
</template>