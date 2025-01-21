export type Category = {
  id?: number;
  name: string;
};

export type Brand = {
  id?: number;
  category_id: number;
  name: string;
  model_code: string | null;
  shared_id: number | null;
  eurotax_id: number | null;
  active: boolean;
  created_at: string;
  updated_at: string;
};

export type Model = {
  id?: number;
  category_id: number;
  brand_id: number;
  name: string;
  model_code: string | null;
  shared_id: number | null;
  eurotax_id: number | null;
  active: boolean;
  created_at: string;
  updated_at: string;
};

export type Version = {
  id?: number;
  category_id: number;
  brand_id: number;
  model_id: number;
  name: string;
  has_translations: boolean;
  translations: I18nTranslation | null;
  renault_model_code: string | null;
  renault_version_code: string | null;
  fuel_type_id: number | null;
  engine_type_id: number | null;
  engine_class_id: number | null;
  gearbox_type_id: number | null;
  gearbox_gears_id: number | null;
  drive_type_id: number | null;
  body_type_id: number | null;
  engine_power: number | null;
  engine_power_hp: number | null;
  engine_volume: number | null;
  lpg: boolean;
  active: boolean;
  created_at: string;
  updated_at: string;
};
