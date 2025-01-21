import { createApp } from "vue";
import { createI18n } from "vue-i18n";
import { createPinia } from "pinia";
import router from "./router";
import App from "./App.vue";
import "./css/utils.scss";
import { useConfigStore } from "./stores/useConfigStore";

import Icon from "./components/Icon.vue";
import ViewHeader from "./components/ViewHeader.vue";
import Breadcrumbs from "./components/Breadcrumbs.vue";
import CustomButton from "./components/CustomButton.vue";
import CreateButton from "./components/CreateButton.vue";
import Timestamp from "./components/Timestamp.vue";
import Nullable from "./components/Nullable.vue";

import localeEn from "./locales/en";
import localeHr from "./locales/hr";
import localeSi from "./locales/si";
import localeRs from "./locales/rs";
import localeBa from "./locales/ba";
import localeMe from "./locales/me";
import localeRks from "./locales/rks";
import localeMk from "./locales/mk";

import { MessageSchema } from "./locales/schema";

const i18n = createI18n<
  [MessageSchema],
  "en" | "hr" | "si" | "rs" | "ba" | "me" | "rks" | "mk"
>({
  locale: window.DASHBOARD_STATE?.locale || "hr",
  fallbackLocale: "en",
  messages: {
    en: localeEn,
    hr: localeHr,
    si: localeSi,
    rs: localeRs,
    ba: localeBa,
    me: localeMe,
    rks: localeRks,
    mk: localeMk,
  },
});

const pinia = createPinia();
const app = createApp(App);
app.use(i18n);
app.use(router);
app.use(pinia);

const configStore = useConfigStore();
configStore.loadConfig();

if (window?.DASHBOARD_STATE?.route) {
  router.push({ name: window.DASHBOARD_STATE.route });
}

app.mount("#widgetsRoot");

// Register global components
app.component("Icon", Icon);
app.component("ViewHeader", ViewHeader);
app.component("Breadcrumbs", Breadcrumbs);
app.component("CustomButton", CustomButton);
app.component("CreateButton", CreateButton);
app.component("Timestamp", Timestamp);
app.component("Nullable", Nullable);
