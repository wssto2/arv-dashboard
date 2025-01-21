import { defineStore } from "pinia";
import { ref, shallowRef } from "vue";
import { Brand, Model } from "../types/entry";
import {
  EurotaxBrand,
  EurotaxModel,
  EurotaxVersion,
  EurotaxEquipment,
} from "../types/eurotax";
import { useConfigStore } from "./useConfigStore";
import { joinPath } from "../helpers";
import useFetch from "../composables/useFetch";
import { Option } from "../components/form/SelectField.vue";

const configStore = useConfigStore();

export const useEntryStore = defineStore("entry", () => {
  const entryTypes = shallowRef<Option[]>([
    { value: 1, label: "Eurotax baza" },
    { value: 2, label: "Broj šasije" },
    { value: 3, label: "E-kod" },
    { value: 4, label: "Ručni unos" },
  ]);

  const firstRegistrationMonths = shallowRef<Option[]>([]);
  for (let i = 1; i <= 12; i++) {
    firstRegistrationMonths.value.push({ value: i, label: i });
  }

  const firstRegistrationYears = shallowRef<Option[]>([]);
  for (let i = new Date().getFullYear(); i >= 1900; i--) {
    firstRegistrationYears.value.push({ value: i, label: i });
  }

  const eurotaxCategories = shallowRef<Option[]>([
    { value: 10, label: "Osobni automobili" },
    { value: 30, label: "Teretna vozila do 3.5t" },
  ]);

  const arvBrands = shallowRef<Brand[]>([]);
  const arvModels = shallowRef<Model[]>([]);

  const eurotaxBrands = shallowRef<EurotaxBrand[]>([]);
  const eurotaxModels = shallowRef<EurotaxModel[]>([]);
  const eurotaxVersions = shallowRef<EurotaxVersion[]>([]);
  const eurotaxVersion = shallowRef<EurotaxVersion | null>(null);
  const eurotaxEquipment = shallowRef<EurotaxEquipment[]>([]);

  // Fetching flags
  const isFetchingArvBrands = ref<boolean>(false);
  const isFetchingArvModels = ref<boolean>(false);
  const isFetchingEurotaxBrands = ref<boolean>(false);
  const isFetchingEurotaxModels = ref<boolean>(false);
  const isFetchingEurotaxVersions = ref<boolean>(false);
  const isFetchingEurotaxVersion = ref<boolean>(false);
  const isFetchingEurotaxEquipment = ref<boolean>(false);

  /**
   * Dohvacanje Eurotax marki vozila
   *
   * @param etxCategoryId {number} - Eurotax kategorija vozila
   */
  const fetchEurotaxBrands = async (etxCategoryId: number) => {
    isFetchingEurotaxBrands.value = true;

    const url = joinPath(configStore.apiBaseUrl, "eurotax/brands");

    const { data, error } = await useFetch<EurotaxBrand[]>(url)
      .post({
        category_id: etxCategoryId,
      })
      .json();

    if (error.value) {
      console.error(error.value);
      isFetchingEurotaxBrands.value = false;

      return;
    }

    eurotaxBrands.value = data.value || [];
    isFetchingEurotaxBrands.value = false;
  };

  /**
   * Dohvacanje Eurotax modela vozila
   *
   * @param etxCategoryId {number} - Eurotax kategorija vozila
   * @param firstRegistrationMonth {number} - Mjesec prve registracije vozila
   * @param firstRegistrationYear {number} - Godina prve registracije vozila
   * @param etxBrandId {number} - Eurotax marka vozila
   */
  const fetchEurotaxModels = async (
    etxCategoryId: number,
    firstRegistrationMonth: number,
    firstRegistrationYear: number,
    etxBrandId: number
  ) => {
    isFetchingEurotaxModels.value = true;

    const url = joinPath(configStore.apiBaseUrl, "eurotax/models");

    const { data, error } = await useFetch<EurotaxModel[]>(url)
      .post({
        category_id: etxCategoryId,
        first_registration_month: firstRegistrationMonth,
        first_registration_year: firstRegistrationYear,
        brand_id: etxBrandId,
      })
      .json();

    if (error.value) {
      console.error(error.value);
      isFetchingEurotaxModels.value = false;

      return;
    }

    eurotaxModels.value = data.value || [];
    isFetchingEurotaxModels.value = false;
  };

  /**
   * Dohvacanje Eurotax verzija vozila
   *
   * @param etxCategoryId {number} - Eurotax kategorija vozila
   * @param firstRegistrationMonth {number} - Mjesec prve registracije vozila
   * @param firstRegistrationYear {number} - Godina prve registracije vozila
   * @param etxBrandId {number} - Eurotax marka vozila
   * @param etxModelId {number} - Eurotax model vozila
   */
  const fetchEurotaxVersions = async (
    etxCategoryId: number,
    firstRegistrationMonth: number,
    firstRegistrationYear: number,
    etxBrandId: number,
    etxModelId: number
  ) => {
    isFetchingEurotaxVersions.value = true;

    const url = joinPath(configStore.apiBaseUrl, "eurotax/versions");

    const { data, error } = await useFetch<EurotaxVersion[]>(url)
      .post({
        category_id: etxCategoryId,
        first_registration_month: firstRegistrationMonth,
        first_registration_year: firstRegistrationYear,
        brand_id: etxBrandId,
        model_id: etxModelId,
      })
      .json();

    if (error.value) {
      console.error(error.value);
      isFetchingEurotaxVersions.value = false;

      return;
    }

    eurotaxVersions.value = data.value || [];
    isFetchingEurotaxVersions.value = false;
  };

  const fetchEurotaxVersion = async (versionId: number) => {
    isFetchingEurotaxVersion.value = true;

    const url = joinPath(
      configStore.apiBaseUrl,
      "eurotax/versions",
      versionId.toString()
    );

    const { data, error } = await useFetch<EurotaxVersion>(url).get().json();

    if (error.value) {
      console.error(error.value);
      isFetchingEurotaxVersion.value = false;

      return;
    }

    eurotaxVersion.value = data.value || [];
    isFetchingEurotaxVersion.value = false;
  };

  const fetchEurotaxEquipment = async (versionId: number) => {
    isFetchingEurotaxEquipment.value = true;

    const url = joinPath(
      configStore.apiBaseUrl,
      "eurotax/versions",
      versionId.toString(),
      "equipment"
    );

    const { data, error } = await useFetch<EurotaxEquipment[]>(url)
      .get()
      .json();

    if (error.value) {
      console.error(error.value);
      isFetchingEurotaxEquipment.value = false;

      return;
    }

    eurotaxEquipment.value = data.value || [];
    isFetchingEurotaxEquipment.value = false;
  };

  return {
    entryTypes,
    firstRegistrationMonths,
    firstRegistrationYears,
    arvBrands,
    arvModels,
    eurotaxCategories,
    eurotaxBrands,
    eurotaxModels,
    eurotaxVersions,
    eurotaxVersion,
    eurotaxEquipment,
    isFetchingArvBrands,
    isFetchingArvModels,
    isFetchingEurotaxBrands,
    isFetchingEurotaxModels,
    isFetchingEurotaxVersions,
    isFetchingEurotaxVersion,
    isFetchingEurotaxEquipment,
    fetchEurotaxBrands,
    fetchEurotaxModels,
    fetchEurotaxVersions,
    fetchEurotaxVersion,
    fetchEurotaxEquipment,
  };
});
