import { ref, UnwrapRef } from "vue";
import CollectionTable from "./CollectionTable.vue";
import RowTarget from "./RowTarget.vue";
import useFetch from "../../composables/useFetch";
import { joinPath } from "../../helpers";
import type { IconKey } from "../../icons";

export type Column = {
  label: string;
  width?: number;
  align?: "left" | "center" | "right";
  orderable?: boolean;
  orderBy?: string;
  classList?: string[];
  hideOnMobile?: boolean;
};

export type CollectionView = {
  key: string;
  label: string;
  count?: number;
};

export type CollectionFilter = {
  key: string;
  label: string;
  type: "text" | "select" | "date" | "datetime";
  options?: { value: string | number; label: string }[];
  icon?: IconKey;
  withoutDefaultOption?: boolean;
  defaultOptionTitle?: string;
};

export class Collection<T> {
  readonly columns = ref<Record<string, Column>>({});
  readonly views = ref<CollectionView[]>([]);
  readonly meta = ref<Record<string, any>>({});
  readonly filters = ref<CollectionFilter[]>([]);
  private url = ref("");
  private data = ref<T[]>([]);
  readonly isFetching = ref(false);
  readonly isFailed = ref(false);
  readonly total = ref(0);
  readonly currentPage = ref(1);
  readonly from = ref(0);
  readonly to = ref(0);
  readonly lastPage = ref(0);
  readonly perPage = ref(10);
  readonly orderColumn = ref("");
  readonly orderDirection = ref("");
  readonly orderColumnKey = ref("");
  readonly search = ref("");
  readonly selectedFilters = ref<Record<string, any>>({});
  readonly activeView = ref("");
  readonly shouldRememberState = ref(false);
  readonly rememberStateKey = ref("");

  /**
   * Define the URL for the collection.
   *
   * @param url {string}
   * @returns {Collection<T>}
   */
  withURL(url: string): Collection<T> {
    this.url.value = url;

    return this;
  }

  /**
   * Define the columns for the collection.
   *
   * @param columns {Record<keyof T, Column>}
   * @returns {Collection<T>}
   */
  withColumns(columns: Record<keyof T, Column>): Collection<T> {
    this.columns.value = columns;

    // Set the first column as the default order column
    const columnKeys = Object.keys(columns);
    this.orderColumn.value = columnKeys[0];
    this.orderDirection.value = "asc";

    return this;
  }

  /**
   * Define the views for the collection.
   *
   * @param views {CollectionView[]}
   * @returns {Collection<T>}
   */
  withViews(views: CollectionView[]): Collection<T> {
    this.views.value = views;

    if (views.length > 0) {
      this.activeView.value = views[0].key;
    }

    return this;
  }

  /**
   * Set the active view for the collection.
   *
   * @param key {string}
   * @returns {Collection<T>}
   */
  setView(key: string): Collection<T> {
    if (!this.views.value.find((view) => view.key === key)) {
      console.warn(`View with key ${key} does not exist`);

      return this;
    }

    this.activeView.value = key;

    return this;
  }

  /**
   * Search the collection by the given search string.
   *
   * @param search {string}
   * @returns {Collection<T>}
   */
  searchBy(search: string): Collection<T> {
    this.search.value = search;

    return this;
  }

  /**
   * Order the collection by the given column name.
   *
   * @param columnName {keyof T}
   * @param direction {"asc" | "desc"}
   * @returns {Collection<T>}
   */
  orderBy(columnName: keyof T, direction?: "asc" | "desc"): Collection<T> {
    // Find the column by key
    const column = this.columns.value[columnName as string];

    if (!column) {
      console.warn(`Column with key ${columnName as string} does not exist`);

      return this;
    }

    if (!column.orderable) {
      return this;
    }

    this.orderColumnKey.value = columnName as string;

    // Check if the column has an orderBy property
    if (column.orderBy) {
      this.orderColumn.value = column.orderBy;
    } else {
      this.orderColumn.value = columnName as string;
    }

    this.orderDirection.value = direction || "asc";

    return this;
  }

  /**
   * Define the filters for the collection.
   *
   * @param filters {CollectionFilter[]}
   * @returns {Collection<T>}
   */
  withFilters(filters: CollectionFilter[]): Collection<T> {
    this.filters.value = filters;

    return this;
  }

  /**
   * Set the filter value for the given key.
   *
   * @param key {string}
   * @param value {any}
   * @returns {Collection<T>}
   */
  setFilter(key: string, value: any): Collection<T> {
    this.selectedFilters.value = {
      ...this.selectedFilters.value,
      [key]: value,
    };

    return this;
  }

  /**
   * Get the filter value for the given key.
   *
   * @param key {string}
   * @returns {any}
   */
  getFilter(key: string): any {
    return this.selectedFilters.value[key];
  }

  /**
   * Reset the filters for the collection.
   *
   * @returns {Collection<T>}
   */
  resetFilters(): Collection<T> {
    this.selectedFilters.value = {};

    return this;
  }

  /**
   * Get the filter value for the given key.
   *
   * @param key {string}
   * @returns {Collection<T>}
   */
  fromPage(page: number): Collection<T> {
    this.currentPage.value = page;

    return this;
  }

  /**
   * Get the previous page of the collection.
   *
   * @returns {Collection<T>}
   */
  prevPage(): Collection<T> {
    this.currentPage.value = Math.max(this.currentPage.value - 1, 1);

    return this;
  }

  /**
   * Get the next page of the collection.
   *
   * @returns {Collection<T>}
   */
  nextPage(): Collection<T> {
    this.currentPage.value = Math.min(
      this.currentPage.value + 1,
      this.lastPage.value
    );

    return this;
  }

  /**
   * Get the first page of the collection.
   *
   * @param count {number}
   * @returns {Collection<T>}
   */
  take(count: number): Collection<T> {
    this.perPage.value = count;

    return this;
  }

  items(): UnwrapRef<T[]> {
    return this.data.value;
  }

  rememberState(key: string): Collection<T> {
    this.shouldRememberState.value = true;
    this.rememberStateKey.value = key;

    return this;
  }

  // Load the state from the local storage
  private loadState(): void {
    const key = this.rememberStateKey.value;

    if (!key || key.length === 0) {
      return;
    }

    const state = localStorage.getItem(`${key}_collection_state`);

    if (!state) {
      return;
    }

    const {
      currentPage,
      perPage,
      orderColumn,
      orderDirection,
      search,
      filters,
    } = JSON.parse(state);

    this.currentPage.value = currentPage;
    this.perPage.value = perPage;
    this.orderColumn.value = orderColumn;
    this.orderDirection.value = orderDirection;
    this.search.value = search;
    this.filters.value = filters;
  }

  private saveState(): void {
    const key = this.rememberStateKey.value;

    if (!key || key.length === 0) {
      return;
    }

    const state = {
      currentPage: this.currentPage.value,
      perPage: this.perPage.value,
      orderColumn: this.orderColumn.value,
      orderDirection: this.orderDirection.value,
      search: this.search.value,
      filters: this.filters.value,
    };

    localStorage.setItem(`${key}_collection_state`, JSON.stringify(state));
  }

  async fetch(): Promise<void> {
    if (this.shouldRememberState.value) {
      this.loadState();
    }

    this.isFailed.value = false;
    this.isFetching.value = true;

    let tmpURL = this.url.value;

    // If URL does not have protocol, assume it is a relative URL
    if (!/^(http|https):\/\//.test(tmpURL)) {
      tmpURL = joinPath(
        window?.DASHBOARD_STATE?.api_base_url || "",
        this.url.value
      );
    }

    const url = new URL(tmpURL);

    if (!url.searchParams.has("page") && this.currentPage.value > 0) {
      url.searchParams.append("page", this.currentPage.value.toString());
    }

    if (!url.searchParams.has("per_page") && this.perPage.value > 0) {
      url.searchParams.append("length", this.perPage.value.toString());
    }

    if (!url.searchParams.has("order_column")) {
      url.searchParams.append("order_column", this.orderColumn.value);
    }

    if (!url.searchParams.has("order_direction")) {
      url.searchParams.append("order_direction", this.orderDirection.value);
    }

    if (!url.searchParams.has("search") && this.search.value.length > 0) {
      url.searchParams.append("search", this.search.value);
    }

    if (!url.searchParams.has("view") && this.activeView.value.length > 0) {
      url.searchParams.append("view", this.activeView.value);
    }

    for (const [key, value] of Object.entries(this.selectedFilters.value)) {
      if (value === null || value === undefined || value === "") {
        continue;
      }

      url.searchParams.append(key, value);
    }

    try {
      const { data } = await useFetch<T[]>(url.toString()).get().json();

      this.data.value = data.value.data || [];
      this.total.value = data.value.total || 0;
      this.currentPage.value = data.value.current_page || 0;
      this.from.value = data.value.from || 0;
      this.to.value = data.value.to || 0;
      this.lastPage.value = data.value.last_page || 0;
      this.perPage.value = data.value.per_page || 0;

      // Check if we have views in response
      if (data.value.views) {
        for (const viewMeta of data.value.views) {
          const view = this.views.value.find((v) => v.key === viewMeta.key);

          if (view) {
            view.count = viewMeta.count;
          }
        }
      }

      // Check if we have meta in response
      if (data.value.meta) {
        this.meta.value = data.value.meta;
      }

      if (this.shouldRememberState.value) {
        this.saveState();
      }
    } catch (error) {
      console.error(error);
      this.isFailed.value = true;
    }

    this.isFetching.value = false;
  }
}

export function useCollection<T>() {
  return new Collection<T>();
}

export { CollectionTable, RowTarget };
