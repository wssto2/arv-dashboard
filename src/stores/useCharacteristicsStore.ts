import { defineStore } from "pinia";
import { Characteristic } from "../types/common";
import { ref, shallowRef } from "vue";
import { joinPath } from "../helpers";
import { useConfigStore } from "./useConfigStore";
import useFetch from "../composables/useFetch";

const configStore = useConfigStore();

export const useCharacteristicsStore = defineStore("characteristics", () => {
  const isFetchingCharacteristics = ref(false);

  // Characteristics
  const ageOptions = shallowRef<Characteristic[]>([]);
  const airbagOptions = shallowRef<Characteristic[]>([]);
  const autoRadioOptions = shallowRef<Characteristic[]>([]);
  const bodyTypeOptions = shallowRef<Characteristic[]>([]);
  const buyerTypeOptions = shallowRef<Characteristic[]>([]);
  const climateControlOptions = shallowRef<Characteristic[]>([]);
  const colorOptions = shallowRef<Characteristic[]>([]);
  const conditionOptions = shallowRef<Characteristic[]>([]);
  const driveTypeOptions = shallowRef<Characteristic[]>([]);
  const engineClassOptions = shallowRef<Characteristic[]>([]);
  const engineTypeOptions = shallowRef<Characteristic[]>([]);
  const fuelTypeOptions = shallowRef<Characteristic[]>([]);
  const gearboxGearsOptions = shallowRef<Characteristic[]>([]);
  const gearboxTypeOptions = shallowRef<Characteristic[]>([]);
  const ownerOptions = shallowRef<Characteristic[]>([]);
  const purchaseTypeOptions = shallowRef<Characteristic[]>([]);
  const suspensionOptions = shallowRef<Characteristic[]>([]);
  const tiresDiameterOptions = shallowRef<Characteristic[]>([]);
  const tiresHeightOptions = shallowRef<Characteristic[]>([]);
  const tiresWidthOptions = shallowRef<Characteristic[]>([]);
  const warrantyOptions = shallowRef<Characteristic[]>([]);
  const warrantyNewVehicleOptions = shallowRef<Characteristic[]>([]);

  const fetchCharacteristics = async () => {
    isFetchingCharacteristics.value = true;

    const url = joinPath(
      configStore.apiBaseUrl,
      "v2/evaluations/frontend-options"
    );

    const { data, error } = await useFetch<{ data: any }>(url).get().json();

    if (error.value) {
      console.error(error.value);
      isFetchingCharacteristics.value = false;
      return;
    }

    ageOptions.value = data.value.age || [];
    airbagOptions.value = data.value.airbags || [];
    autoRadioOptions.value = data.value.auto_radio || [];
    bodyTypeOptions.value = data.value.body_type || [];
    buyerTypeOptions.value = data.value.buyer_type || [];
    climateControlOptions.value = data.value.climate_control || [];
    colorOptions.value = data.value.color || [];
    conditionOptions.value = data.value.condition || [];
    driveTypeOptions.value = data.value.drive_type || [];
    engineClassOptions.value = data.value.engine_class || [];
    engineTypeOptions.value = data.value.engine_type || [];
    fuelTypeOptions.value = data.value.fuel_type || [];
    gearboxGearsOptions.value = data.value.gearbox_gears || [];
    gearboxTypeOptions.value = data.value.gearbox_type || [];
    ownerOptions.value = data.value.owner || [];
    purchaseTypeOptions.value = data.value.purchase_type || [];
    suspensionOptions.value = data.value.suspension || [];
    tiresDiameterOptions.value = data.value.tires_diameter || [];
    tiresHeightOptions.value = data.value.tires_height || [];
    tiresWidthOptions.value = data.value.tires_width || [];
    warrantyOptions.value = data.value.warranty || [];
    warrantyNewVehicleOptions.value = data.value.warranty_nv || [];

    isFetchingCharacteristics.value = false;
  };

  return {
    isFetchingCharacteristics,
    ageOptions,
    airbagOptions,
    autoRadioOptions,
    bodyTypeOptions,
    buyerTypeOptions,
    climateControlOptions,
    colorOptions,
    conditionOptions,
    driveTypeOptions,
    engineClassOptions,
    engineTypeOptions,
    fuelTypeOptions,
    gearboxGearsOptions,
    gearboxTypeOptions,
    ownerOptions,
    purchaseTypeOptions,
    suspensionOptions,
    tiresDiameterOptions,
    tiresHeightOptions,
    tiresWidthOptions,
    warrantyOptions,
    warrantyNewVehicleOptions,
    fetchCharacteristics,
  };
});
