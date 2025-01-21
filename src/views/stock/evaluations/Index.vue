<script setup lang="ts">
import { onMounted } from 'vue';
import { useCollection, CollectionTable, Column, CollectionFilter, RowTarget } from '../../../components/collection';
import type { Evaluation } from '../../../types/evaluation';
import Breadcrumbs from '../../../components/Breadcrumbs.vue';
import StatusLabel, { State } from '../../../components/StatusLabel.vue';
import { AccentKey } from '../../../accents';
import type { IconKey } from '../../../icons';
import { useI18n } from 'vue-i18n';
import type { MessageSchema } from '../../../locales/schema';
const { t } = useI18n<{ message: MessageSchema }>();
import { formatNumber } from '../../../helpers';
import { useRouter } from 'vue-router';
const router = useRouter();

// Module accent and icon
const moduleAccent: AccentKey = 'blue';
const moduleIcon: IconKey = 'moneyEuroCircleFill';

const columns: Record<string, Column> = {
	name: { label: 'Vozilo', orderBy: 'naziv' },
	source: { label: 'Vrsta ulaza', orderable: true, orderBy: 'vrsta_unos', width: 150, align: 'center' },
	status: { label: 'Status', orderable: true, orderBy: 'arhiva', width: 150, align: 'center' },
	created_at: { label: 'Uneseno', orderable: true, orderBy: 'datum_unos', width: 250, hideOnMobile: true },
	updated_at: { label: 'Uređeno', orderable: true, orderBy: 'datum_edit', width: 250, hideOnMobile: true },
};
const filters: CollectionFilter[] = [
	{
		key: 'created_at',
		icon: 'calendarEventFill',
		label: 'Datum unosa',
		type: 'select',
		options: [
			{ label: 'Danas', value: 'today' },
			{ label: 'Jučer', value: 'yesterday' },
			{ label: 'Ovaj tjedan', value: 'this_week' },
			{ label: 'Ovaj mjesec', value: 'this_month' },
		],
	},
	{
		key: 'source',
		icon: 'upload',
		label: 'Vrsta ulaza',
		type: 'select',
		options: [
			{ label: 'ARV', value: 'arv' },
			{ label: 'TradeIN', value: 'tradein' },
		],
	},
	{
		key: 'status',
		icon: 'shieldStarFill',
		label: 'Status',
		type: 'select',
		defaultOptionTitle: 'Aktualna vozila',
		options: [
			{ label: 'Otkupljena vozila', value: 'bought' },
			{ label: 'Arhivirana vozila', value: 'archived' },
		],
	},
];

const evaluations = useCollection<Evaluation>()
	.withURL('v2/evaluations')
	.withColumns(columns)
	.withFilters(filters)
	.orderBy('created_at', 'desc');

const breadcrumbItems = [
	{ name: 'Rabljena vozila' },
	{ name: 'Procjena vozila', route: { name: 'stock.evaluations.index' }},
];

const statusLabelStates: State[] = [
	{ value: '0', label: 'U tijeku', accent: 'default' },
	{ value: '1', label: 'Arhivirano', accent: 'orange' },
	{ value: '2', label: 'Otkupljeno', accent: 'success' },
];

const sourceLabelStates: State[] = [
	{ value: 0, label: 'ARV', accent: 'default' },
	{ value: 1, label: 'TradeIN', accent: 'primary' },
	{ value: 2, label: 'ARV V2', accent: 'info' },
];

function onCreateEvaluationButtonClick() {
	router.push({ name: 'stock.evaluations.create' });
}

onMounted(() => {
	evaluations.fetch();
});
</script>

<template>
	<div class="content">
		<breadcrumbs :items="breadcrumbItems" class="mb-20" :with-home="true" />

		<view-header 
			:title="t('stock.evaluations.title')"
			description="Here you can manage brands of vehicles that are used when creating new vehicles."
			:icon="moduleIcon" 
			:accent="moduleAccent">

			<template #actions>
				<create-button @click="onCreateEvaluationButtonClick" :keyboard-shortcut="{ key: 'N', ctrlKey: true }">Dodaj procjenu</create-button>
			</template>
		</view-header>
		<collection-table :collection="evaluations" :with-actions="true" :row-height="69">
			<tbody>
				<tr v-for="evaluation in evaluations.items()" :key="evaluation.id">
					<td>
						<row-target 
							:route="{ name: 'stock.evaluations.details', params: { evaluationId: evaluation.id }}" 
							:title="evaluation.title_generic" 
							:with-decoration="true" 
							decoration-size="sm"
							:accent="moduleAccent" 
							:icon="moduleIcon"
						>
							<ul class="list-inline list-inline-separate no-margin-bottom mt-5">
								<li class="text-slate-800">ID: {{  evaluation.id }}</li>
								<li v-if="evaluation.vin" class="text-slate-800">{{ evaluation.vin }}</li>
								<li class="text-slate-800"><i class="icon-meter2 position-left text-info"></i>{{ formatNumber(evaluation.mileage) }} km</li>
								<li class="text-slate-800"><i class="icon-power2 position-left text-orange"></i>{{ evaluation.engine_power }} kW ({{ evaluation.engine_power_hp }} KS)</li>
							</ul>
						</row-target>
					</td>
					<td class="text-center"><status-label v-model="evaluation.source" :states="sourceLabelStates" /></td>
					<td class="text-center"><status-label v-model="evaluation.archive" :states="statusLabelStates" /></td>
					<td class="hidden-xs"><timestamp :date="evaluation.created_at" /></td>
					<td class="hidden-xs"><timestamp :date="evaluation.updated_at" /></td>
					<td class="text-nowrap">
						<a href="#" class="mr-20">
							<icon icon="edit" />
						</a>

						<a href="#" class="text-danger">
							<icon icon="delete" />
						</a>
					</td>
				</tr>
			</tbody>
		</collection-table>
	</div>
</template>