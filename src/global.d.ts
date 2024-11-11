interface DashboardState {
  locale: string;
  api_base_url?: string;
  api_token?: string;
  widgets?: string[];
}

interface Window {
  DASHBOARD_STATE?: DashboardState;
}
