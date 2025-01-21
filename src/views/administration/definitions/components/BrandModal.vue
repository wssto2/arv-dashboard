<script setup lang="ts">
import { ref, watch } from 'vue';
import type { Brand } from '../../../../types/entry';
import Modal from '../../../../components/modal/Modal.vue';
import { useResource, ResourceForm } from '../../../../components/resource';
import TextField from '../../../../components/form/TextField.vue';
import CheckboxField from '../../../../components/form/CheckboxField.vue';
import { formatDateTime } from '../../../../helpers';

const props = defineProps<{
	categoryId: number;
}>();

const emit = defineEmits(['save']);

const modal = ref<InstanceType<typeof Modal>>();

const brand = useResource<Brand>({
	category_id: props.categoryId,
});

console.log(brand);

watch(() => props.categoryId, () => {
	brand.originalData.value.category_id = props.categoryId;
	brand.data.value.category_id = props.categoryId;
});

const firstFormField = ref<InstanceType<typeof TextField>>();

function showModal(brandId?: number) {
	brand.reset();
	modal.value?.showModal();
	firstFormField.value?.focus();

	if (brandId && brandId > 0) {
		brand.fetch(`/definitions/brands/${brandId}`);
	}
}

defineExpose({
	showModal: showModal,
	hideModal: () => modal.value?.hideModal(),
});

async function submit() {
	let endpoint = `/definitions/brands`;
	if (brand.exists()) {
		endpoint += `/${brand.getKey()}`;
	}

	await brand.submit({ 
		endpoint: endpoint, 
		method: brand.exists() ? 'put' : 'post' 
	});

	emit('save');
}
</script>

<template>
	<modal ref="modal" :width="800" :dark-body="true" :processing="brand.processing.value">
		<template #header>
			<h4 class="text-bold no-margin">Unos / uređivanje marke</h4>
		</template>

		<resource-form :processing="brand.processing.value" :horizontal="true" :error="brand.processingError.value" @submit="submit">

			<h6 class="text-bold mt-20">Osnovne informacije</h6>
			<ul class="field-list-group">
				<li class="field-list-group-item">
					<text-field 
						ref="firstFormField"
						label="Naziv" 
						:required="true" 
						v-model="brand.data.value.name"
						:error="brand.errors.first('name')"
					/>
				</li>
				<li class="field-list-group-item">
					<checkbox-field
						label="Aktivno"
						v-model="brand.data.value.active"
					/>
				</li>
			</ul>

			<h6 class="text-bold mt-20">Dodatne informacije</h6>
			<ul class="field-list-group">
				<li class="field-list-group-item">
					<text-field 
						label="Shared ID" 
						numeric
						description="Oznaka marke u Hrvatskoj bazi"
						:required="true" 
						v-model.number="brand.data.value.shared_id" 
						:error="brand.errors.first('shared_id')"
					/>
				</li>
				<li class="field-list-group-item">
					<text-field 
						label="Eurotax ID" 
						numeric
						description="Oznaka marke u Eurotax bazi"
						v-model.number="brand.data.value.eurotax_id"
						:error="brand.errors.first('eurotax_id')"
					/>
				</li>
			</ul>

		</resource-form>

		<template #footer>
			<div class="flex flex-1 items-center justify-end">

				<div class="flex-1" v-if="brand.exists()">
					<small class="text-grey-500">Zadnja izmjena: <span class="text-grey-800">{{ formatDateTime(brand.data.value?.updated_at) }}</span></small>
				</div>

				<custom-button 
					@click="modal?.hideModal" 
					class="mr-10">Odustani</custom-button>

				<custom-button 
					:disabled="brand.processing.value"
					appearance="primary" 
					icon-before="save" 
					@click="submit" 
					:keyboard-shortcut="{ key: 'S', ctrlKey: true }">Spremi</custom-button>
			</div>
		</template>
	</modal>
</template>