import type { RouteRecordRaw } from "vue-router";
import Dashboard from "../views/Dashboard.vue";

const routes = [
  {
    path: "/",
    name: "dashboard",
    component: Dashboard,
  },

  // Stock
  // Evaluations
  {
    path: "/stock/evaluations",
    name: "stock.evaluations.index",
    component: () => import("../views/stock/evaluations/Index.vue"),
  },
  {
    path: "/stock/evaluations/create",
    name: "stock.evaluations.create",
    component: () => import("../views/stock/evaluations/Create.vue"),
  },
  {
    path: "/stock/evaluations/:evaluationId",
    name: "stock.evaluations.details",
    component: () => import("../views/stock/evaluations/Details.vue"),
  },

  {
    path: "/administration/definitions/brands",
    name: "administration.definitions.brands",
    component: () => import("../views/administration/definitions/Brands.vue"),
  },
  {
    path: "/administration/definitions/:categoryId/brands/:brandId/models",
    name: "administration.definitions.models",
    component: () => import("../views/administration/definitions/Models.vue"),
  },
  {
    path: "/administration/definitions/:categoryId/brands/:brandId/models/:modelId/versions",
    name: "administration.definitions.versions",
    component: () => import("../views/administration/definitions/Versions.vue"),
  },
] as RouteRecordRaw[];

export type AppRoutes =
  | "dashboard"
  | "stock.evaluations.index"
  | "administration.definitions.brands"
  | "administration.definitions.models"
  | "administration.definitions.versions";

export default routes;
