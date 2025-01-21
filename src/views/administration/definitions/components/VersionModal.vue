<script setup lang="ts">
import { onMounted, ref, watch } from 'vue';
import type { Version } from '../../../../types/entry';
import Modal from '../../../../components/modal/Modal.vue';
import { useResource, ResourceForm } from '../../../../components/resource';
import TextField from '../../../../components/form/TextField.vue';
import SelectField from '../../../../components/form/SelectField.vue';
import CheckboxField from '../../../../components/form/CheckboxField.vue';
import { formatDateTime, joinPath } from '../../../../helpers';
import useFetch from '../../../../composables/useFetch';

const props = defineProps<{
	categoryId: number;
	brandId: number;
	modelId: number;
}>();

const emit = defineEmits(['save']);

const modal = ref<InstanceType<typeof Modal>>();

const version = useResource<Version>({
	category_id: props.categoryId,
	brand_id: props.brandId,
	model_id: props.modelId,
});

const engineTypeOptions = ref([]);
const fuelTypeOptions = ref([]);
const engineClassOptions = ref([]);
const gearboxTypeOptions = ref([]);
const gearboxGearsOptions = ref([]);
const bodyTypeOptions = ref([]);
const driveTypeOptions = ref([]);

async function fetchOptions() {
	const endpoint = `/definitions/brands/${props.brandId}/models/${props.modelId}/versions/view-options`;
	const url = joinPath(window?.DASHBOARD_STATE?.api_base_url || '', endpoint);

	const { error, data } = await useFetch(url).json();

	if (! error.value) {
		engineTypeOptions.value = data.value.engine_type || [];
		fuelTypeOptions.value = data.value.fuel_type || [];
		engineClassOptions.value = data.value.engine_class || [];
		gearboxTypeOptions.value = data.value.gearbox_type || [];
		gearboxGearsOptions.value = data.value.gearbox_gears || [];
		bodyTypeOptions.value = data.value.body_type || [];
		driveTypeOptions.value = data.value.drive_type || [];
	}
}

watch(() => props.categoryId, () => {
	version.originalData.value.category_id = props.categoryId;
	version.data.value.category_id = props.categoryId;
});

watch(() => props.brandId, () => {
	version.originalData.value.brand_id = props.brandId;
	version.data.value.brand_id = props.brandId;
});

watch(() => props.modelId, () => {
	version.originalData.value.model_id = props.modelId;
	version.data.value.model_id = props.modelId;
});

const firstFormField = ref<InstanceType<typeof TextField>>();

function showModal(versionId?: number) {
	version.reset();
	modal.value?.showModal();
	firstFormField.value?.focus();

	if (versionId && versionId > 0) {
		version.fetch(`/definitions/brands/${props.brandId}/models/${props.modelId}/versions/${versionId}`);
	}
}

defineExpose({
	showModal: showModal,
	hideModal: () => modal.value?.hideModal(),
});

async function submit() {
	let endpoint = `/definitions/brands/${props.brandId}/models/${props.modelId}/versions`;
	if (version.exists()) {
		endpoint += `/${version.getKey()}`;
	}

	await version.submit({ 
		endpoint: endpoint, 
		method: version.exists() ? 'put' : 'post' 
	});

	emit('save');
}

onMounted(() => {
	fetchOptions();
});
</script>

<template>
	<modal ref="modal" :width="800" :dark-body="true" :processing="version.processing.value">
		<template #header>
			<h4 class="text-bold no-margin">Unos / uređivanje verzije</h4>
		</template>

		<resource-form :processing="version.processing.value" :horizontal="true" :error="version.processingError.value" @submit="submit">

			<h6 class="text-bold mt-20">Osnovne informacije</h6>
			<ul class="field-list-group">
				<li class="field-list-group-item">
					<text-field 
						ref="firstFormField"
						label="Naziv" 
						:required="true" 
						v-model="version.data.value.name"
						:error="version.errors.first('name')"
					/>
				</li>
				<li class="field-list-group-item">
					<text-field 
						label="Kod verzije" 
						:required="true" 
						v-model="version.data.value.renault_version_code"
						:error="version.errors.first('renault_version_code')"
					/>
				</li>
				<li class="field-list-group-item">
					<checkbox-field
						label="Naziv verzije razlikuje se u drugim jezicima"
						v-model="version.data.value.has_translations"
					/>
				</li>
				<li class="field-list-group-item">
					<checkbox-field
						label="Aktivno"
						v-model="version.data.value.active"
					/>
				</li>
			</ul>

			<h6 class="text-bold mt-20">Specifikacije motora</h6>
			<ul class="field-list-group">
				<li class="field-list-group-item">
					<select-field 
						label="Vrsta motora" 
						:options="engineTypeOptions"
						:required="true" 
						options-value="id"
						options-label="name"
						v-model="version.data.value.engine_type_id"
						:error="version.errors.first('engine_type_id')"
					/>
				</li>
				<li class="field-list-group-item">
					<select-field 
						label="Vrsta goriva" 
						:options="fuelTypeOptions"
						:required="true" 
						options-value="id"
						options-label="name"
						v-model="version.data.value.fuel_type_id"
						:error="version.errors.first('fuel_type_id')"
					/>
				</li>
				<li class="field-list-group-item">
					<text-field 
						label="Snaga motora" 
						addon-right="kW"
						:required="true" 
						:numeric="true"
						v-model="version.data.value.engine_power"
						:error="version.errors.first('engine_power')"
					/>
				</li>
				<li class="field-list-group-item">
					<text-field 
						label="Snaga motora" 
						addon-right="KS"
						:required="true" 
						:numeric="true"
						v-model="version.data.value.engine_power_hp"
						:error="version.errors.first('engine_power_hp')"
					/>
				</li>
				<li class="field-list-group-item">
					<text-field 
						label="Zapremina motora" 
						addon-right="ccm"
						:required="true" 
						:numeric="true"
						v-model="version.data.value.engine_volume"
						:error="version.errors.first('engine_volume')"
					/>
				</li>
				<li class="field-list-group-item">
					<select-field 
						label="Klasa motora" 
						v-model="version.data.value.engine_class_id"
						:options="engineClassOptions"
						options-value="id"
						options-label="name"
						:error="version.errors.first('engine_class_id')"
					/>
				</li>
				<li class="field-list-group-item">
					<checkbox-field
						label="Plin"
						v-model="version.data.value.lpg"
						:error="version.errors.first('lpg')"
					/>
				</li>
			</ul>

			<h6 class="text-bold mt-20">Mjenjač</h6>
			<ul class="field-list-group">
				<li class="field-list-group-item">
					<select-field 
						label="Vrsta mjenjača" 
						:required="true" 
						v-model="version.data.value.gearbox_type_id"
						:options="gearboxTypeOptions"
						options-value="id"
						options-label="name"
						:error="version.errors.first('gearbox_type_id')"
					/>
				</li>
				<li class="field-list-group-item">
					<select-field 
						label="Stupnjevi prijenosa" 
						:required="true" 
						v-model="version.data.value.gearbox_gears_id"
						:options="gearboxGearsOptions"
						options-value="id"
						options-label="name"
						:error="version.errors.first('gearbox_gears_id')"
					/>
				</li>
			</ul>

			<h6 class="text-bold mt-20">Karoserija</h6>
			<ul class="field-list-group">
				<li class="field-list-group-item">
					<select-field 
						label="Karoserija" 
						:required="true" 
						v-model="version.data.value.body_type_id"
						:options="bodyTypeOptions"
						options-value="id"
						options-label="name"
						:error="version.errors.first('body_type_id')"
					/>
				</li>
				<li class="field-list-group-item">
					<select-field 
						label="Pogon" 
						:required="true" 
						v-model="version.data.value.drive_type_id"
						:options="driveTypeOptions"
						options-value="id"
						options-label="name"
						:error="version.errors.first('drive_type_id')"
					/>
				</li>
			</ul>
		</resource-form>

		<template #footer>
			<div class="flex flex-1 items-center justify-end">

				<div class="flex-1" v-if="version.exists()">
					<small class="text-grey-500">Zadnja izmjena: <span class="text-grey-800">{{ formatDateTime(version.data.value?.updated_at) }}</span></small>
				</div>

				<custom-button 
					@click="modal?.hideModal" 
					class="mr-10">Odustani</custom-button>

				<custom-button 
					:disabled="version.processing.value"
					appearance="primary" 
					icon-before="save" 
					@click="submit" 
					:keyboard-shortcut="{ key: 'S', ctrlKey: true }">Spremi</custom-button>
			</div>
		</template>
	</modal>
</template>