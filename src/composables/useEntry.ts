import { ref, shallowRef } from "vue";
import type { Category, Brand, Model } from "../types/entry";
import useFetch from "./useFetch";

export function useEntry() {
  const arvCategories = shallowRef<Category[]>([]);
  const arvBrands = shallowRef<Brand[]>([]);
  const arvModels = shallowRef<Model[]>([]);
  const isFetchingCategories = ref(false);
  const isFetchingBrands = ref(false);
  const isFetchingModels = ref(false);

  const baseURL = window.DASHBOARD_STATE?.api_base_url || "";

  const fetchArvCategories = async () => {
    isFetchingCategories.value = true;

    let endpoint = new URL("entry/categories", baseURL);

    try {
      const { data, error } = await useFetch<Category[]>(endpoint.toString())
        .get()
        .json();

      if (error.value) {
        throw new Error(error.value);
      }

      arvCategories.value = data.value;
    } catch (error) {
      console.error(error);
    } finally {
      isFetchingCategories.value = false;
    }
  };

  const fetchArvBrands = async (categoryId: number) => {
    if (categoryId === 10) categoryId = 1;
    if (categoryId === 30) categoryId = 2;

    const endpoint = new URL(`entry/categories/${categoryId}/brands`, baseURL);

    isFetchingBrands.value = true;

    try {
      const { data, error } = await useFetch<Brand[]>(endpoint.toString())
        .get()
        .json();

      if (error.value) {
        throw new Error(error.value);
      }

      arvBrands.value = data.value;
    } catch (error) {
      console.error(error);
    } finally {
      isFetchingBrands.value = false;
    }
  };

  const fetchArvModels = async (categoryId: number, brandId: number) => {
    if (categoryId === 10) categoryId = 1;
    if (categoryId === 30) categoryId = 2;

    const endpoint = new URL(
      `entry/categories/${categoryId}/brands/${brandId}/models`,
      baseURL
    );

    isFetchingModels.value = true;

    try {
      const { data, error } = await useFetch<Model[]>(endpoint.toString())
        .get()
        .json();

      if (error.value) {
        throw new Error(error.value);
      }

      arvModels.value = data.value;
    } catch (error) {
      console.error(error);
    } finally {
      isFetchingModels.value = false;
    }
  };

  return {
    arvCategories,
    arvBrands,
    arvModels,
    isFetchingCategories,
    isFetchingBrands,
    isFetchingModels,
    fetchArvCategories,
    fetchArvBrands,
    fetchArvModels,
  };
}
