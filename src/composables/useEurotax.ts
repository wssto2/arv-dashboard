import { ref, shallowRef } from "vue";
import useFetch from "./useFetch";
import type {
  EurotaxBrand,
  EurotaxModel,
  EurotaxVersion,
} from "../types/eurotax";

export function useEurotax() {
  const eurotaxBrands = shallowRef<EurotaxBrand[]>([]);
  const eurotaxModels = shallowRef<EurotaxModel[]>([]);
  const eurotaxVersions = shallowRef<EurotaxVersion[]>([]);
  const eurotaxVersion = shallowRef<EurotaxVersion | null>(null);
  const isFetchingBrands = ref(false);
  const isFetchingModels = ref(false);
  const isFetchingVersions = ref(false);
  const isFetchingVersion = ref(false);

  const baseURL = window.DASHBOARD_STATE?.api_base_url || "";

  const fetchEurotaxBrands = async (categoryId: number) => {
    const payload = {
      category_id: categoryId,
    };

    isFetchingBrands.value = true;

    let endpoint = new URL("eurotax/brands", baseURL);

    try {
      const { data, error } = await useFetch(endpoint.toString())
        .post(payload)
        .json();

      if (error.value) {
        throw new Error(error.value);
      }

      eurotaxBrands.value = data.value;
    } catch (error) {
      console.error(error);
    } finally {
      isFetchingBrands.value = false;
    }
  };

  const fetchEurotaxModels = async (
    categoryId: number,
    brandId: number,
    firstRegistrationYear: number,
    firstRegistrationMonth: number
  ) => {
    const payload = {
      category_id: categoryId,
      brand_id: brandId,
      first_registration_year: firstRegistrationYear,
      first_registration_month: firstRegistrationMonth,
    };

    isFetchingModels.value = true;

    let endpoint = new URL("eurotax/models", baseURL);

    try {
      const { data, error } = await useFetch(endpoint.toString())
        .post(payload)
        .json();

      if (error.value) {
        throw new Error(error.value);
      }

      eurotaxModels.value = data.value;
    } catch (error) {
      console.error(error);
    } finally {
      isFetchingModels.value = false;
    }
  };

  const fetchEurotaxVersions = async (
    categoryId: number,
    brandId: number,
    modelId: number,
    firstRegistrationYear: number,
    firstRegistrationMonth: number
  ) => {
    const payload = {
      category_id: categoryId,
      brand_id: brandId,
      model_id: modelId,
      first_registration_year: firstRegistrationYear,
      first_registration_month: firstRegistrationMonth,
    };

    isFetchingVersions.value = true;

    let endpoint = new URL("eurotax/versions", baseURL);

    try {
      const { data, error } = await useFetch(endpoint.toString())
        .post(payload)
        .json();

      if (error.value) {
        throw new Error(error.value);
      }

      eurotaxVersions.value = data.value;
    } catch (error) {
      console.error(error);
    } finally {
      isFetchingVersions.value = false;
    }
  };

  const fetchEurotaxVersion = async (id: number) => {
    const endpoint = new URL(`eurotax/versions/${id}`, baseURL);

    isFetchingVersion.value = true;

    try {
      const { data, error } = await useFetch(endpoint.toString()).json();

      if (error.value) {
        throw new Error(error.value);
      }

      eurotaxVersion.value = data.value;
    } catch (error) {
      console.error(error);
    } finally {
      isFetchingVersion.value = false;
    }
  };

  return {
    eurotaxBrands,
    eurotaxModels,
    eurotaxVersions,
    eurotaxVersion,
    isFetchingBrands,
    isFetchingModels,
    isFetchingVersions,
    isFetchingVersion,
    fetchEurotaxBrands,
    fetchEurotaxModels,
    fetchEurotaxVersions,
    fetchEurotaxVersion,
  };
}
