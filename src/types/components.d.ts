/** Register global components */
import type Icon from "./components/Icon.vue";
import type ViewHeader from "../components/ViewHeader.vue";
import type Breadcrumbs from "../components/Breadcrumbs.vue";
import type CustomButton from "../components/CustomButton.vue";
import type CreateButton from "../components/CreateButton.vue";
import type Timestamp from "../components/Timestamp.vue";
import type Nullable from "../components/Nullable.vue";

declare module "vue" {
  export interface GlobalComponents {
    Icon: typeof Icon;
    ViewHeader: typeof ViewHeader;
    Breadcrumbs: typeof Breadcrumbs;
    CustomButton: typeof CustomButton;
    CreateButton: typeof CreateButton;
    Timestamp: typeof Timestamp;
    Nullable: typeof Nullable;
  }
}
