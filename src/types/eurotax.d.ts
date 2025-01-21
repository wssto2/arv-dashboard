export type EurotaxBrand = {
  id: number;
  category_id: number;
  arv_brand_id: number;
  name: string;
};

export type EurotaxModel = {
  id: number;
  category_id: number;
  brand_id: number;
  arv_model_id: number;
  name: string;
};

export type EurotaxVersion = {
  id: number;
  category_id: number;
  brand_id: number;
  model_id: number;
  name: string;
  ch_body_type_id: number;
  ch_drive_type_id: number;
  ch_engine_class_id: number;
  ch_engine_type_id: number;
  ch_fuel_type_id: number;
  ch_gearbox_gears_id: number;
  ch_gearbox_type_id: number;
  doors_number: number;
  seats_number: number;
  engine_power: number;
  engine_power_hp: number;
  engine_volume: number;
  gearbox_gears_number: number;
  lpg: boolean;
  title_ad: string;
};

export type EurotaxEquipment = {
  id: number;
  item_id: number;
  title: string;
  title_short: string;
  type: number;
  bundle: boolean;
  sold_from: string;
  sold_from_original: string;
  sold_until: string;
  sold_until_original: string;
  items: EurotaxEquipmentBundleItem[] | null;
  not_sold_whole_period: boolean;
};

export type EurotaxEquipmentBundleItem = {
  bundle_id: number;
  id: number;
  title_short: string;
};
