import { defineStore } from "pinia";
import { ref } from "vue";

export const useConfigStore = defineStore("config", () => {
  const apiBaseUrl = ref<string>("");
  const locale = ref<string>("hr");
  const apiToken = ref<string>("");
  const route = ref<string>("");
  const widgets = ref<string[]>([]);

  // Load config from window.DASHBOARD_STATE
  const loadConfig = () => {
    if (!window.DASHBOARD_STATE) {
      console.error("window.DASHBOARD_STATE is not defined.");
      return;
    }

    if (window.DASHBOARD_STATE.api_base_url) {
      apiBaseUrl.value = window.DASHBOARD_STATE.api_base_url;
    }

    if (window.DASHBOARD_STATE.locale) {
      locale.value = window.DASHBOARD_STATE.locale;
    }

    if (window.DASHBOARD_STATE.api_token) {
      apiToken.value = window.DASHBOARD_STATE.api_token;
    }

    if (window.DASHBOARD_STATE.route) {
      route.value = window.DASHBOARD_STATE.route;
    }

    if (window.DASHBOARD_STATE.widgets) {
      widgets.value = window.DASHBOARD_STATE.widgets;
    }
  };

  return {
    apiBaseUrl,
    locale,
    apiToken,
    route,
    widgets,
    loadConfig,
  };
});
