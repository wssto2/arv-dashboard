import { createFetch } from "@vueuse/core";

export default createFetch({
  //baseUrl: window?.DASHBOARD_STATE?.api_base_url || "",
  options: {
    async beforeFetch({ options }) {
      const token = window?.DASHBOARD_STATE?.api_token;

      if (!token) {
        return { options };
      }

      options.headers = options.headers || {};
      (
        options.headers as Record<string, string>
      ).Authorization = `Bearer ${token}`;

      return { options };
    },
  },
  fetchOptions: {
    mode: "cors",
  },
});
