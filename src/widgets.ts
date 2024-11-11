import SaleSummaryByDealer from "./widgets/SaleSummaryByDealer.vue";
import ConfirmedEvaluations from "./widgets/ConfirmedEvaluations.vue";
import ActiveVehicles from "./widgets/ActiveVehicles.vue";
import StockAge from "./widgets/StockAge.vue";
import SummaryByPhase from "./widgets/SummaryByPhase.vue";
import PreparationPhaseSummary from "./widgets/PreparationPhaseSummary.vue";
import PlannedDeliveries from "./widgets/PlannedDeliveries.vue";

type WidgetDefinition = {
  columns: number;
  component: any;
};

export default {
  sale_summary_by_dealer: {
    columns: 12,
    component: SaleSummaryByDealer,
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
} as Record<string, WidgetDefinition>;
