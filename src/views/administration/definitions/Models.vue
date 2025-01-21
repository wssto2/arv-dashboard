<script setup lang="ts">
import { computed, onMounted, ref } from 'vue';
import { useCollection, CollectionTable, Column, CollectionFilter, RowTarget } from '../../../components/collection';
import type { Model } from '../../../types/entry';
import Breadcrumbs from '../../../components/Breadcrumbs.vue';
import ModelModal from './components/ModelModal.vue';
import { useRoute } from 'vue-router';
import StatusLabel from '../../../components/StatusLabel.vue';

const route = useRoute();
const categoryId = computed(() => Number(route.params.categoryId));
const brandId = computed(() => Number(route.params.brandId));

const accent = 'violet';

const columns: Record<string, Column> = {
	id: { label: 'ID', width: 50, orderable: true, align: 'right', hideOnMobile: true },
	name: { label: 'Name', orderable: true, orderBy: 'naziv' },
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

const models = useCollection<Model>()
	.withURL(`definitions/brands/${brandId.value}/models`)
	.withColumns(columns)
	.withFilters(filters)
	.orderBy('name', 'asc');

const breadcrumbItems = ref([
	{ name: 'Administracija' },
	{ name: 'Unos vozila' },
	{ name: 'Marke', route: { name: 'administration.definitions.brands' }},
]);

const modelModal = ref<InstanceType<typeof ModelModal>>();

function editBrand(brandId: number) {
	modelModal.value?.showModal(brandId);
}

onMounted(async () => {
	await models.fetch();

	breadcrumbItems.value.push({ 
		name: models.meta.value?.brand?.name || 'Models', 
		route: { 
			name: 'administration.definitions.models', 
			params: { brandId }
		}
	} as any);
});
</script>

<template>
	<div class="content">
		<breadcrumbs :items="breadcrumbItems" class="mb-20" :with-home="true" />

		<view-header 
			:title="models.meta.value?.brand?.name || 'Models'"
			description="Here you can manage brands of vehicles that are used when creating new vehicles."
			icon="carWashing" 
			:accent="accent">

			<template #actions>
				<create-button @click="modelModal?.showModal" :keyboard-shortcut="{ key: 'N', ctrlKey: true }">Dodaj model</create-button>
			</template>
		</view-header>
		<collection-table :collection="models" :with-actions="true" :row-height="53">
			<tbody>
				<tr v-for="model in models.items()" :key="model.id">
					<td class="text-right hidden-xs">{{ model.id }}</td>
					<td><row-target :route="{ name: 'administration.definitions.versions', params: { categoryId: model.category_id, brandId: model.brand_id, modelId: model.id }}" :title="model.name" :with-decoration="true" :accent="accent" /></td>
					<td class="text-center"><status-label :model="model.active" /></td>
					<td class="hidden-xs"><timestamp :date="model.created_at" /></td>
					<td class="hidden-xs"><timestamp :date="model.updated_at" /></td>
					<td class="text-nowrap">
						<a href="#" class="mr-20" @click.prevent="editBrand(model.id as number)">
							<icon icon="edit" />
						</a>

						<a href="#" class="text-danger">
							<icon icon="delete" />
						</a>
					</td>
				</tr>
			</tbody>
		</collection-table>

		<model-modal 
			ref="modelModal" 
			:category-id="categoryId" 
			:brand-id="brandId" 
			@save="models.fetch()" />
	</div>
</template>