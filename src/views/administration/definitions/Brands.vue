<script setup lang="ts">
import { onMounted, ref } from 'vue';
import { useCollection, CollectionTable, Column, CollectionFilter, CollectionView, RowTarget } from '../../../components/collection';
import type { Brand } from '../../../types/entry';
import Breadcrumbs from '../../../components/Breadcrumbs.vue';
import BrandModal from './components/BrandModal.vue';
import StatusLabel from '../../../components/StatusLabel.vue';

const accent = 'indigo';

const columns: Record<string, Column> = {
	id: { label: 'ID', width: 50, orderable: true, align: 'right', hideOnMobile: true },
	name: { label: 'Name', orderable: true, orderBy: 'naziv' },
	active: { label: 'Status', width: 150, align: 'center' },
	created_at: { label: 'Created At', width: 250, hideOnMobile: true },
	updated_at: { label: 'Updated At', width: 250, hideOnMobile: true },
};

const views: CollectionView[] = [
	{ key: 'personal', label: 'Osobna vozila' },
	{ key: 'commercial', label: 'Gospodarska vozila' }
];

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
	},
	{
		key: 'updated_at',
		icon: 'calendarEventFill',
		label: 'Nedavno uređeno',
		type: 'select',
		options: [
			{ label: 'Aktivno', value: 1 },
			{ label: 'Neaktivno', value: 2 },
		],
	}
];

const brands = useCollection<Brand>()
	.withURL('definitions/brands')
	.withColumns(columns)
	.withViews(views)
	.withFilters(filters)
	.orderBy('name', 'asc');

const breadcrumbItems = [
	{ name: 'Administracija' },
	{ name: 'Unos vozila' },
	{ name: 'Marke', route: { name: 'administration.definitions.brands' }},
];

const brandModal = ref<InstanceType<typeof BrandModal>>();

function editBrand(brandId: number) {
	brandModal.value?.showModal(brandId);
}

onMounted(() => {
	brands.fetch();
});
</script>

<template>
	<div class="content">
		<breadcrumbs :items="breadcrumbItems" class="mb-20" :with-home="true" />

		<view-header 
			title="Brands"
			description="Here you can manage brands of vehicles that are used when creating new vehicles."
			icon="carWashing" 
			:accent="accent">

			<template #actions>
				<create-button @click="brandModal?.showModal" :keyboard-shortcut="{ key: 'N', ctrlKey: true }">Dodaj marku</create-button>
			</template>
		</view-header>
		<collection-table :collection="brands" :with-actions="true" :row-height="53">
			<tbody>
				<tr v-for="brand in brands.items()" :key="brand.id">
					<td class="text-right hidden-xs">{{ brand.id }}</td>
					<td><row-target :route="{ name: 'administration.definitions.models', params: { categoryId: brand.category_id, brandId: brand.id }}" :title="brand.name" :with-decoration="true" :accent="accent" /></td>
					<td class="text-center"><status-label v-model="brand.active" /></td>
					<td class="hidden-xs"><timestamp :date="brand.created_at" /></td>
					<td class="hidden-xs"><timestamp :date="brand.updated_at" /></td>
					<td class="text-nowrap">
						<a href="#" class="mr-20" @click.prevent="editBrand(brand.id as number)">
							<icon icon="edit" />
						</a>

						<a href="#" class="text-danger">
							<icon icon="delete" />
						</a>
					</td>
				</tr>
			</tbody>
		</collection-table>

		<brand-modal 
			ref="brandModal" 
			:category-id="brands.activeView.value === 'commercial' ? 2 : 1" 
			@save="brands.fetch()" />
	</div>
</template>