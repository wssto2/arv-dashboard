import { createApp } from "vue";
import { createI18n } from "vue-i18n";
import App from "./App.vue";
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

const app = createApp(App);
app.use(i18n);

app.mount("#app");
