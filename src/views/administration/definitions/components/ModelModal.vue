<script setup lang="ts">
import { ref, watch } from 'vue';
import type { Model } from '../../../../types/entry';
import Modal from '../../../../components/modal/Modal.vue';
import { useResource, ResourceForm } from '../../../../components/resource';
import TextField from '../../../../components/form/TextField.vue';
import CheckboxField from '../../../../components/form/CheckboxField.vue';
import { formatDateTime } from '../../../../helpers';

const props = defineProps<{
	categoryId: number;
	brandId: number;
}>();

const emit = defineEmits(['save']);

const modal = ref<InstanceType<typeof Modal>>();

const model = useResource<Model>({
	category_id: props.categoryId,
	brand_id: props.brandId,
});

watch(() => props.categoryId, () => {
	model.originalData.value.category_id = props.categoryId;
	model.data.value.category_id = props.categoryId;
});

watch(() => props.brandId, () => {
	model.originalData.value.brand_id = props.brandId;
	model.data.value.brand_id = props.brandId;
});

const firstFormField = ref<InstanceType<typeof TextField>>();

function showModal(modelId?: number) {
	model.reset();
	modal.value?.showModal();
	firstFormField.value?.focus();

	if (modelId && modelId > 0) {
		model.fetch(`/definitions/brands/${props.brandId}/models/${modelId}`);
	}
}

defineExpose({
	showModal: showModal,
	hideModal: () => modal.value?.hideModal(),
});

async function submit() {
	let endpoint = `/definitions/brands/${props.brandId}/models`;
	if (model.exists()) {
		endpoint += `/${model.getKey()}`;
	}

	await model.submit({ 
		endpoint: endpoint, 
		method: model.exists() ? 'put' : 'post' 
	});

	emit('save');
}
</script>

<template>
	<modal ref="modal" :width="800" :dark-body="true" :processing="model.processing.value">
		<template #header>
			<h4 class="text-bold no-margin">Unos / uređivanje modela</h4>
		</template>

		<resource-form :processing="model.processing.value" :horizontal="true" :error="model.processingError.value" @submit="submit">

			<h6 class="text-bold mt-20">Osnovne informacije</h6>
			<ul class="field-list-group">
				<li class="field-list-group-item">
					<text-field 
						ref="firstFormField"
						label="Naziv" 
						:required="true" 
						v-model="model.data.value.name"
						:error="model.errors.first('name')"
					/>
				</li>
				<li class="field-list-group-item">
					<checkbox-field
						label="Aktivno"
						v-model="model.data.value.active"
					/>
				</li>
			</ul>

			<h6 class="text-bold mt-20">Dodatne informacije</h6>
			<ul class="field-list-group">
				<li class="field-list-group-item">
					<text-field 
						label="Vendor Code" 
						numeric
						description="Kod modela proizvođača"
						v-model.number="model.data.value.model_code" 
						:error="model.errors.first('model_code')"
					/>
				</li>
				<li class="field-list-group-item">
					<text-field 
						label="Shared ID" 
						numeric
						description="Oznaka marke u Hrvatskoj bazi"
						:required="true" 
						v-model.number="model.data.value.shared_id" 
						:error="model.errors.first('shared_id')"
					/>
				</li>
				<li class="field-list-group-item">
					<text-field 
						label="Eurotax ID" 
						numeric
						description="Oznaka marke u Eurotax bazi"
						v-model.number="model.data.value.eurotax_id"
						:error="model.errors.first('eurotax_id')"
					/>
				</li>
			</ul>

			<h6 class="text-bold mt-20">Posebne ponude</h6>
			<ul class="field-list-group">
				<li class="field-list-group-item">
					<text-field 
						label="Rabljena vozila" 
						numeric
						v-model.number="model.data.value.eurotax_id"
						:error="model.errors.first('eurotax_id')"
					/>
				</li>
				<li class="field-list-group-item">
					<text-field 
						label="Nova vozila" 
						numeric
						v-model.number="model.data.value.eurotax_id"
						:error="model.errors.first('eurotax_id')"
					/>
				</li>
			</ul>

		</resource-form>

		<template #footer>
			<div class="flex flex-1 items-center justify-end">

				<div class="flex-1" v-if="model.exists()">
					<small class="text-grey-500">Zadnja izmjena: <span class="text-grey-800">{{ formatDateTime(model.data.value?.updated_at) }}</span></small>
				</div>

				<custom-button 
					@click="modal?.hideModal" 
					class="mr-10">Odustani</custom-button>

				<custom-button 
					:disabled="model.processing.value"
					appearance="primary" 
					icon-before="save" 
					@click="submit" 
					:keyboard-shortcut="{ key: 'S', ctrlKey: true }">Spremi</custom-button>
			</div>
		</template>
	</modal>
</template>