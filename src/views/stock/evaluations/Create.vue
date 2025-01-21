<script setup lang="ts">
import { AccentKey } from '../../../accents';
import { IconKey } from '../../../icons';
import { useI18n } from 'vue-i18n';
import type { MessageSchema } from '../../../locales/schema';
const { t } = useI18n<{ message: MessageSchema }>();
import { useResource, ResourceForm } from '../../../components/resource';
import type { Evaluation } from '../../../types/evaluation';
import Panel from '../../../components/Panel.vue';
import EntryPanel from '../../../components/EntryPanel.vue';
import { useEntryStore } from '../../../stores/useEntryStore';
import { useCharacteristicsStore } from '../../../stores/useCharacteristicsStore';
import { onMounted, computed, ref } from 'vue';
import TextField from '../../../components/form/TextField.vue';
import SelectField from '../../../components/form/SelectField.vue';
import { EurotaxVersion } from '../../../types/eurotax';
import CheckboxField from '../../../components/form/CheckboxField.vue';

// Module accent and icon
const moduleAccent: AccentKey = 'blue';
const moduleIcon: IconKey = 'moneyEuroCircleFill';

const breadcrumbItems = [
	{ name: 'Rabljena vozila' },
	{ name: 'Procjena vozila', route: { name: 'stock.evaluations.index' }},
	{ name: 'Nova procjena' },
];

const entryStore = useEntryStore();
const characteristicsStore = useCharacteristicsStore();

const evaluation = useResource<Evaluation>({
	entry_type_id: 1,
	etx_category_id: 10,
	first_registration_month: 0,
	first_registration_year: 0,
	etx_brand_id: 0,
	etx_model_id: 0,
});

const equipmentPanel = ref<InstanceType<typeof Panel> | null>(null);

const eurotaxVersion = computed(() => {
	return entryStore.eurotaxVersion || {} as EurotaxVersion;
});

const equipment = computed(() => {
	return (entryStore.eurotaxEquipment || []).filter((item) => item.bundle === false);
});

const bundles = computed(() => {
	return (entryStore.eurotaxEquipment || []).filter((item) => item.bundle === true);
});

const onEurotaxVersionChange = () => {
	// Expand the equipment panel
	equipmentPanel.value?.expand();
};

function onFormSubmit() {
	console.log('Form submitted');
}

onMounted(() => {
	characteristicsStore.fetchCharacteristics();
});
</script>

<template>
	<div class="content">
		<breadcrumbs :items="breadcrumbItems" class="mb-20" :with-home="true" />

		<view-header 
			:title="t('stock.evaluations.title')"
			description="Here you can manage brands of vehicles that are used when creating new vehicles."
			:icon="moduleIcon" 
			:accent="moduleAccent" />

		<resource-form :processing="evaluation.processing.value" :error="evaluation.processingError.value" @submit="onFormSubmit">
			
			<entry-panel 
				ref="entryPanel" 
				:subject="evaluation" 
				@eurotax-version-changed="onEurotaxVersionChange"
			/>

			<panel title="Karakteristike vozila" :collapsable="true" :collapsed="true">
				<div class="row">
					<div class="col-md-4">
						<select-field
							label="Gorivo"
							v-model="eurotaxVersion.ch_fuel_type_id"
							:options="characteristicsStore.fuelTypeOptions"
							options-value="id"
							options-label="name"
							:editable="false"
						/>

						<select-field
							label="Vrsta motora"
							v-model="eurotaxVersion.ch_engine_type_id"
							:options="characteristicsStore.engineTypeOptions"
							options-value="id"
							options-label="name"
							:editable="false"
						/>

						<select-field
							label="Klasa motora"
							v-model="eurotaxVersion.ch_engine_class_id"
							:options="characteristicsStore.engineClassOptions"
							options-value="id"
							options-label="name"
							:editable="false"
						/>

						<text-field
							label="Zapremina motora"
							v-model="eurotaxVersion.engine_volume"
							:editable="false"
							addon-right="ccm"
						/>
					</div>
					<div class="col-md-4">
						<text-field
							label="Najveća snaga motora"
							v-model="eurotaxVersion.engine_power"
							:editable="false"
							addon-right="kW"
						/>

						<text-field
							label="Najveća snaga motora"
							v-model="eurotaxVersion.engine_power_hp"
							:editable="false"
							addon-right="KS"
						/>

						<select-field
							label="Mjenjač"
							v-model="eurotaxVersion.ch_gearbox_type_id"
							:options="characteristicsStore.gearboxTypeOptions"
							options-value="id"
							options-label="name"
							:editable="false"
						/>

						<select-field
							label="Stupnjevi prijenosa"
							v-model="eurotaxVersion.ch_gearbox_gears_id"
							:options="characteristicsStore.gearboxGearsOptions"
							options-value="id"
							options-label="name"
							:editable="false"
						/>
					</div>
					<div class="col-md-4">
						<select-field
							label="Pogon"
							v-model="eurotaxVersion.ch_drive_type_id"
							:options="characteristicsStore.driveTypeOptions"
							options-value="id"
							options-label="name"
							:editable="false"
						/>

						<text-field
							label="Broj vrata"
							v-model="eurotaxVersion.doors_number"
							:editable="false"
						/>

						<text-field
							label="Broj sjedala"
							v-model="eurotaxVersion.seats_number"
							:editable="false"
						/>

						<select-field
							label="Karoserija"
							v-model="eurotaxVersion.ch_body_type_id"
							:options="characteristicsStore.bodyTypeOptions"
							options-value="id"
							options-label="name"
							:editable="false"
						/>
					</div>
				</div>
			</panel>

			<panel ref="equipmentPanel" title="Oprema vozila" :collapsable="true" :collapsed="true">
				<p class="text-semibold mb-20"><span style="color: red;">Crvenom bojom</span> je označena oprema koja nije korištena na vozilu u cijelom razdoblju dok je odabrana verzija bila na tržištu. Molimo Vas da provjerite dali Vaše vozilo ima navedenu opremu.</p>

				<div class="row">
					<div class="col-md-6">
						<legend class="text-semibold">Opcije uključene u cijenu</legend>

						<checkbox-field
							v-for="equipmentItem in equipment"
							:key="equipmentItem.id"
							:label="equipmentItem.title"
							:class="{'text-danger': !equipmentItem.not_sold_whole_period}" 
						/>

					</div>
					<div class="col-md-6">
						<legend class="text-semibold">Paketi opreme</legend>

						<checkbox-field
							v-for="equipmentItem in bundles"
							:key="equipmentItem.id"
							:label="equipmentItem.title"
							:description="equipmentItem.items?.map(item => item.title_short).join(', ')"
							:class="{'text-danger': equipmentItem.not_sold_whole_period}"
						/>

					</div>
				</div>
			</panel>

			<panel title="Vlasnik vozila" :collapsable="true" :collapsed="true">
				<!-- TODO -->
			</panel>

			<div class="row mt-20">
				<div class="col-md-12 text-right">
					<custom-button appearance="primary" :submit="true">Spremi procjenu</custom-button>
				</div>
			</div>
		</resource-form>
	</div>
</template>