interface DashboardState {
  locale: string;
  api_base_url?: string;
  api_token?: string;
  route?: string;
  widgets?: string[];
}

type KeyboardShortcut = {
  key: string;
  ctrlKey?: boolean;
  shiftKey?: boolean;
  altKey?: boolean;
  metaKey?: boolean;
};

interface Window {
  DASHBOARD_STATE?: DashboardState;
  registeredKeyboardShortcuts?: KeyboardShortcut[];
}

type Country = "hr" | "si" | "ba" | "rs" | "me" | "mk" | "rks";

type I18nTranslation = Record<Country, string>;

type TextAlign = "left" | "center" | "right";
