<script setup lang="ts">
import { ref, onMounted } from 'vue';
import { joinPath } from '../helpers';
import Loader from '../components/Loader.vue';
import { useI18n } from 'vue-i18n';
import type { MessageSchema } from '../locales/schema';
const { t } = useI18n<{ message: MessageSchema }>();
import EmptyDataMessage from '../components/EmptyDataMessage.vue';

type PendingEvaluations = {
	id: number;
	title: string;
	created_at: string;
	last_comment: string | null;
	last_comment_author: string | null;
	last_comment_date: string | null;
}

const isFetching = ref(false);
const data = ref<PendingEvaluations[]>([]);

const fetch = async () => {

	// Prevent multiple requests
	if (isFetching.value) {
		return;
	}

	isFetching.value = true;

	try {

		const endpoint = joinPath(window?.DASHBOARD_STATE?.api_base_url || '', '/widgets/pending_evaluations');
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
					<span class="text-default">{{ t('pending_evaluations.title') }}</span>
				</h6>

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
			<empty-data-message v-if="!data.length" />
			<table v-else class="table">
				<thead>
					<tr>
						<th>{{ t('pending_evaluations.vehicle') }}</th>
						<th width="400">{{ t('pending_evaluations.last_comment') }}</th>
						<th width="180" class="text-right">{{ t('pending_evaluations.created_at') }}</th>
					</tr>
				</thead>
				<tbody>
					<tr v-for="evaluation in data" :key="`planned_delivery_vehicle_${evaluation.id}`">
						<td>
							<a :href="`/sto2.php?w=procjena_vozila&d=status_ponude&ID=${evaluation.id}`" class="display-block mb-5">{{ evaluation.title }}</a>
						</td>
						<td>
							<div v-if="evaluation.last_comment">
								<p class="mb-5">{{ evaluation.last_comment }}</p>
								<p class="text-muted text-size-small no-margin">
									{{ evaluation.last_comment_author }} - {{ formatDateTime(evaluation.last_comment_date || '') }}
								</p>
							</div>
							<span v-else class="text-muted">{{ t('pending_evaluations.no_comments') }}</span>
						</td>
						<td class="text-right">{{ formatDateTime(evaluation.created_at) }}</td>
					</tr>
				</tbody>
			</table>
		</div>
	</div>
</template>