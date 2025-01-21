import { ref } from "vue";
import ResourceForm from "./ResourceForm.vue";
import useFetch from "../../composables/useFetch";
import { joinPath } from "../../helpers";
import { containsProp } from "@vueuse/core";

export interface FormSubmitOptions {
  /**
   * The endpoint to submit the form to.
   */
  endpoint: string;

  /**
   * The HTTP method to use when submitting the form.
   */
  method?: "post" | "put" | "patch" | "delete";
}

function isFormSubmitOptions(obj: object): obj is FormSubmitOptions {
  return obj && containsProp(obj, "endpoint", "method");
}

export class ErrorBag<T> {
  private errors = ref<Record<keyof T, string[]>>(
    {} as Record<keyof T, string[]>
  );

  add(field: keyof T, message: string) {
    if (!this.errors.value[field]) {
      this.errors.value[field] = [];
    }

    this.errors.value[field].push(message);
  }

  record(errors: Record<keyof T, string[]>) {
    this.errors.value = errors;
  }

  clear(field?: keyof T) {
    if (field && this.errors.value[field]) {
      delete this.errors.value[field];
    } else {
      this.errors.value = {};
    }
  }

  has(field: keyof T) {
    return !!this.errors.value?.[field];
  }

  first(field: keyof T) {
    return this.errors.value?.[field]?.[0];
  }

  all() {
    return this.errors.value;
  }
}

export class Resource<T> {
  readonly processing = ref(false);
  readonly fetching = ref(false);
  readonly creating = ref(false);
  readonly updating = ref(false);
  readonly deleting = ref(false);
  public data = ref({} as T);
  readonly originalData = ref({} as T);
  readonly errors = new ErrorBag<T>();
  readonly processingError = ref("");

  constructor(data?: Partial<T>) {
    this.data.value = data || ({} as T);
    this.originalData.value = { ...this.data.value };
  }

  populate(data: Partial<T>) {
    this.data.value = { ...this.data.value, ...data };
  }

  reset() {
    this.data.value = { ...this.originalData.value };
    this.errors.clear();
  }

  exists(): boolean {
    return !!this.data.value.id;
  }

  getKey(): number | null {
    return this.data.value.id || null;
  }

  async fetch(url: string) {
    this.processing.value = true;
    this.fetching.value = true;

    let tmpURL = url;

    // If URL does not have protocol, assume it is a relative URL
    if (!/^(http|https):\/\//.test(tmpURL)) {
      tmpURL = joinPath(window?.DASHBOARD_STATE?.api_base_url || "", url);
    }

    const finalURL = new URL(tmpURL);

    try {
      const { data } = await useFetch<T[]>(finalURL.toString()).get().json();

      for (const key in data.value) {
        if (!Object.prototype.hasOwnProperty.call(data.value, key)) {
          continue;
        }

        this.data.value[key] = data.value[key];
      }

      this.errors.clear();
    } catch (error: any) {
      // If status is 422 we have laravel validation errors
      if (error?.response?.status === 422) {
        this.errors.record(error.response.data.errors || {});
      } else {
        console.error(error);
      }
    } finally {
      this.processing.value = false;
      this.fetching.value = false;
    }
  }

  public async submit(endpoint: string): Promise<void>;
  public async submit(options: FormSubmitOptions): Promise<void>;

  public async submit(...args: any[]): Promise<void> {
    let options: FormSubmitOptions = {
      endpoint: "",
      method: "post",
    };

    if (args.length > 0) {
      const arg = args[0];
      if (typeof arg === "string") {
        options.endpoint = arg;
      } else if (typeof arg === "object" && isFormSubmitOptions(arg)) {
        options = arg;
      }
    } else {
      throw new Error("Invalid arguments");
    }

    this.errors.clear();

    this.processing.value = true;
    this.processingError.value = "";

    const { endpoint, method = "post" } = options;

    let tmpURL = endpoint;

    // If URL does not have protocol, assume it is a relative URL
    if (!/^(http|https):\/\//.test(tmpURL)) {
      tmpURL = joinPath(window?.DASHBOARD_STATE?.api_base_url || "", tmpURL);
    }

    const finalURL = new URL(tmpURL);

    const { error, statusCode, data, response } = await useFetch(
      finalURL.toString()
    )
      [method](this.data)
      .json();

    if (error.value) {
      if (statusCode.value === 422) {
        const reader = response?.value?.body?.getReader();

        if (!reader) {
          throw new Error("Invalid response");
        }

        const { value } = await reader.read();

        if (!value) {
          throw new Error("Invalid response");
        }

        const errors = JSON.parse(new TextDecoder().decode(value));

        this.errors.record(errors?.errors || {});
      } else {
        this.processingError.value = error.value;
        console.error(error.value);
      }
    } else {
      // Update the original data with the new data
      if (data.value && Object.keys(data.value).length > 0) {
        this.originalData.value = { ...data.value };
        this.data.value = { ...data.value };
      }
    }

    this.processing.value = false;
  }
}

export function useResource<T>(data?: Partial<T>) {
  return new Resource<T>(data);
}

export { ResourceForm };
