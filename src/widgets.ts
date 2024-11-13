import SaleSummaryByDealer from "./widgets/SaleSummaryByDealer.vue";
import SaleSummaryByEmployee from "./widgets/SaleSummaryByEmployee.vue";
import ConfirmedEvaluations from "./widgets/ConfirmedEvaluations.vue";
import ActiveVehicles from "./widgets/ActiveVehicles.vue";
import StockAge from "./widgets/StockAge.vue";
import SummaryByPhase from "./widgets/SummaryByPhase.vue";
import PreparationPhaseSummary from "./widgets/PreparationPhaseSummary.vue";
import PlannedDeliveries from "./widgets/PlannedDeliveries.vue";
import PendingEvaluations from "./widgets/PendingEvaluations.vue";
import RecentEvaluations from "./widgets/RecentEvaluations.vue";
import VegaActiveStatusByBrand from "./widgets/VegaActiveStatusByBrand.vue";

type WidgetDefinition = {
  columns: number;
  component: any;
};

export default {
  sale_summary_by_dealer: {
    columns: 12,
    component: SaleSummaryByDealer,
  },
  sale_summary_by_employee: {
    columns: 12,
    component: SaleSummaryByEmployee,
  },
  confirmed_evaluations: {
    columns: 4,
    component: ConfirmedEvaluations,
  },
  active_vehicles: {
    columns: 4,
    component: ActiveVehicles,
  },
  stock_age: {
    columns: 4,
    component: StockAge,
  },
  summary_by_phase: {
    columns: 4,
    component: SummaryByPhase,
  },
  preparation_phase_summary: {
    columns: 4,
    component: PreparationPhaseSummary,
  },
  planned_deliveries: {
    columns: 4,
    component: PlannedDeliveries,
  },
  pending_evaluations: {
    columns: 6,
    component: PendingEvaluations,
  },
  recent_evaluations: {
    columns: 6,
    component: RecentEvaluations,
  },
  vega_active_status_by_brand: {
    columns: 12,
    component: VegaActiveStatusByBrand,
  },
} as Record<string, WidgetDefinition>;
