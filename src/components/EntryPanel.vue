<script setup lang="ts" generic="T">
import { computed } from 'vue';
import Panel from './Panel.vue';
import { Resource } from './resource';
import TextField from './form/TextField.vue';
import SelectField from './form/SelectField.vue';
import type { RecordWithDefinition } from '../types/common';
import type { EurotaxVersion } from '../types/eurotax';
import { useEntryStore } from '../stores/useEntryStore';

const props = defineProps<{
	subject: Resource<T & RecordWithDefinition>;
}>();

const emits = defineEmits<{
	eurotaxVersionChanged: [version: EurotaxVersion]
}>();

const entryStore = useEntryStore();

// Omogucen odabir Eurotax marke ukoliko su popunjena sljedeca polja:
// - Kategorija vozila
// - Mjesec prve registracije
// - Godina prve registracije
const isEurotaxBrandSelectEnabled = computed(() => {
	return props.subject.data.value.etx_category_id > 0 
		&& props.subject.data.value.first_registration_month > 0 
		&& props.subject.data.value.first_registration_year > 0;
});

// Omogucen odabir Eurotax modela ukoliko su popunjena sljedeca polja:
// - Kategorija vozila
// - Marka vozila
// - Mjesec prve registracije
// - Godina prve registracije
const isEurotaxModelSelectEnabled = computed(() => {
	return props.subject.data.value.etx_category_id > 0 
		&& props.subject.data.value.etx_brand_id > 0
		&& props.subject.data.value.first_registration_month > 0 
		&& props.subject.data.value.first_registration_year > 0;
});

// Nakon promjene kategorije vozila resetiramo odabranu marku, model i verziju
// Ukoliko su popunjena sva obavezna polja, dohvacamo marke vozila
function onEurotaxCategoryChange() {
	props.subject.data.value.etx_brand_id = 0;
	props.subject.data.value.etx_model_id = 0;
	props.subject.data.value.etx_version_id = 0;

	entryStore.eurotaxBrands = [];
	entryStore.eurotaxModels = [];
	entryStore.eurotaxVersions = [];

	const { entry_type_id, etx_category_id, first_registration_month, first_registration_year } = props.subject.data.value;

	if (entry_type_id === 1 && etx_category_id > 0 && first_registration_month > 0 && first_registration_year > 0) {
		entryStore.fetchEurotaxBrands(etx_category_id);
	}
}

// Nakon promjene mjeseca prve registracije resetiramo odabranu marku, model i verziju
// Ukoliko su popunjena sva obavezna polja, dohvacamo marke vozila
function onFirstRegistrationMonthChange() {
	props.subject.data.value.etx_brand_id = 0;
	props.subject.data.value.etx_model_id = 0;
	props.subject.data.value.etx_version_id = 0;

	entryStore.eurotaxBrands = [];
	entryStore.eurotaxModels = [];
	entryStore.eurotaxVersions = [];

	const { entry_type_id, etx_category_id, first_registration_month, first_registration_year } = props.subject.data.value;

	if (entry_type_id === 1 && etx_category_id > 0 && first_registration_month > 0 && first_registration_year > 0) {
		entryStore.fetchEurotaxBrands(etx_category_id);
	}
}

// Nakon promjene godine prve registracije resetiramo odabranu marku, model i verziju
// Ukoliko su popunjena sva obavezna polja, dohvacamo marke vozila
function onFirstRegistrationYearChange() {
	props.subject.data.value.etx_brand_id = 0;
	props.subject.data.value.etx_model_id = 0;
	props.subject.data.value.etx_version_id = 0;

	entryStore.eurotaxBrands = [];
	entryStore.eurotaxModels = [];
	entryStore.eurotaxVersions = [];

	const { entry_type_id, etx_category_id, first_registration_month, first_registration_year } = props.subject.data.value;

	if (entry_type_id === 1 && etx_category_id > 0 && first_registration_month > 0 && first_registration_year > 0) {
		entryStore.fetchEurotaxBrands(etx_category_id);
	}
}

// Nakon promjene marke vozila resetiramo odabranu marku i verziju
// Ukoliko su popunjena sva obavezna polja, dohvacamo modele vozila
function onEurotaxBrandChange() {
	props.subject.data.value.etx_model_id = 0;
	props.subject.data.value.etx_version_id = 0;

	entryStore.eurotaxModels = [];
	entryStore.eurotaxVersions = [];

	const { entry_type_id, etx_category_id, etx_brand_id, first_registration_month, first_registration_year } = props.subject.data.value;

	if (entry_type_id === 1 && etx_category_id > 0 && etx_brand_id > 0 && first_registration_month > 0 && first_registration_year > 0) {
		entryStore.fetchEurotaxModels(etx_category_id, first_registration_month, first_registration_year, etx_brand_id);
	}
}

// Nakon promjene modela vozila resetiramo odabranu verziju
// Ukoliko su popunjena sva obavezna polja, dohvacamo verzije vozila
function onEurotaxModelChange() {
	props.subject.data.value.etx_version_id = 0;

	entryStore.eurotaxVersions = [];

	const { entry_type_id, etx_category_id, etx_brand_id, etx_model_id, first_registration_month, first_registration_year } = props.subject.data.value;

	if (entry_type_id === 1 && etx_category_id > 0 && etx_brand_id > 0 && etx_model_id > 0 && first_registration_month > 0 && first_registration_year > 0) {
		entryStore.fetchEurotaxVersions(etx_category_id, first_registration_month, first_registration_year, etx_brand_id, etx_model_id);
	}
}

function onEurotaxVersionChange(version: EurotaxVersion) {
	props.subject.data.value.etx_version_id = version.id;

	entryStore.fetchEurotaxVersion(version.id);
	entryStore.fetchEurotaxEquipment(version.id);

	emits('eurotaxVersionChanged', version);
}

defineExpose({
	eurotaxVersion: computed(() => entryStore.eurotaxVersion),
})
</script>

<template>
	<panel title="Unos vozila">
		<div class="bg-info-100 text-info-900 px-5 py-3 rounded-lg mb-6">
			<p class="text-bold">Eurotax kriteriji za procjenu vozila:</p>
			<ul>
				<li>datum prve registracije može biti +/- 6 mjeseci od perioda kad se verzija tog vozila prodavala u RH</li>
				<li>datum prve registracije mora biti unutar tekuće godine otkad se verzija počela / završila prodavati u RH</li>
				<li>minimalni broj prijeđenih kilometra za procjenu vozila je 5.000 km</li>
				<li>vozilo za koje želite napraviti procjenu nesmije biti starije od 24 godine</li>
			</ul>
		</div>
		<div class="row">
			<div class="col-md-4">

				<select-field
					label="Unos vozila prema"
					v-model="props.subject.data.value.entry_type_id"
					:error="props.subject.errors.first('entry_type_id')"
					:options="entryStore.entryTypes"
					required 
					:without-default-option="true"
				/>

				<select-field
					label="Kategorija vozila"
					v-model="props.subject.data.value.etx_category_id"
					:error="props.subject.errors.first('etx_category_id')"
					:options="entryStore.eurotaxCategories"
					:without-default-option="true"
					required 
					@update:model-value="onEurotaxCategoryChange"
				/>
			</div>
			<div class="col-md-4">

				<text-field
					label="Broj šasije"
					v-model="props.subject.data.value.vin"
					:error="props.subject.errors.first('entry_vin')"
					placeholder="VF15RBF0A58387756"
					required 
				/>

				<div class="row">
					<div class="col-md-6">
						<select-field
							label="Mjesec prve registracije"
							v-model="props.subject.data.value.first_registration_month"
							:error="props.subject.errors.first('first_registration_month')"
							:options="entryStore.firstRegistrationMonths"
							required 
							@update:model-value="onFirstRegistrationMonthChange"
						/>
					</div>
					<div class="col-md-6">
						<select-field
							label="Godina prve registracije"
							v-model="props.subject.data.value.first_registration_year"
							:error="props.subject.errors.first('first_registration_year')"
							:options="entryStore.firstRegistrationYears"
							required 
							@update:model-value="onFirstRegistrationYearChange"
						/>
					</div>
				</div>

				<text-field
					label="Prijeđeni kilometri"
					v-model="props.subject.data.value.mileage"
					:error="props.subject.errors.first('mileage')"
					required 
					:numeric="true"
					addon-right="km"
					placeholder="1.000"
				/>
			</div>
			<div class="col-md-4">
				<!-- Eurotax baza -->
				<div v-show="props.subject.data.value.entry_type_id === 1">
					<select-field
						label="Marka"
						v-model="props.subject.data.value.etx_brand_id"
						:error="props.subject.errors.first('etx_brand_id')"
						:options="entryStore.eurotaxBrands"
						options-label="name"
						options-value="id"
						required
						:disabled="!isEurotaxBrandSelectEnabled"
						:processing="entryStore.isFetchingEurotaxBrands"
						@update:model-value="onEurotaxBrandChange"
					/>

					<select-field
						label="Model"
						v-model="props.subject.data.value.etx_model_id"
						:error="props.subject.errors.first('etx_model_id')"
						:options="entryStore.eurotaxModels"
						options-label="name"
						options-value="id"
						required
						:disabled="!isEurotaxModelSelectEnabled"
						:processing="entryStore.isFetchingEurotaxModels"
						@update:model-value="onEurotaxModelChange"
					/>
				</div>
				<!-- /Eurotax baza-->
			</div>
		</div>
		
		<div class="table-responsive" :style="{ marginLeft: '-20px', marginRight: '-20px', marginBottom: '-20px' }">
			<table class="table table-condensed table-striped table-hover">
				<thead>
					<tr>
						<th>Verzija / Broj vrata</th>
						<th>Prodaja od - do</th>
						<th>ccm<br>kW (KS)</th>
						<th>Mjenjač<br>Gorivo</th>
						<th>Oprema<br>E-kod</th>
					</tr>
				</thead>
				<tbody>
					<tr v-for="version in entryStore.eurotaxVersions" :key="version.id">
						<td>
							<input type="radio" name="version" :id="`version_${version.id}`" class="cursor-pointer" @click="onEurotaxVersionChange(version)">
							<label :for="`version_${version.id}`" class="text-bold position-right valign-middle cursor-pointer">{{ version.name }}</label>
						</td>
						<th>(09/2023 - )</th>
						<td>999<br>48 (65)</td>
						<td>
							Mehanički mjenjač / 5
							<br>
							Benzin - bezolovni
						</td>
						<td>
							oo K-ABS KF
							<br>
							386369
						</td>
					</tr>
				</tbody>
			</table>
		</div>
	</panel>
</template>