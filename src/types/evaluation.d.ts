import { RecordWithDefinition } from "./common";

export type Evaluation = RecordWithDefinition & {
  id?: number;
  etx_country: string;
  source: number;
  step_id: number;
  session_id: string;
  evaluation_number: string;
  evaluation_year: number;
  dealer_id: number;
  dealer_location_id: number | null;
  dealer_internal_id: string;
  vehicle_id: number;
  title_generic: string;
  etx_version_title: string;
  // etx_category_id: number;
  // etx_brand_id: number;
  // etx_model_id: number;
  // etx_version_id: number;
  // arv_category_id: number;
  // arv_brand_id: number;
  // arv_model_id: number;
  version_name_short: string;
  customer_id: number;
  customer_name: string;
  customer_email: string;
  engine_volume: number;
  ch_fuel_type_id: number;
  ch_engine_type_id: number;
  engine_power: number;
  engine_power_hp: number;
  seats_number: number;
  doors_number: number;
  ch_color_id: number;
  ch_owner_id: number;
  ch_gearbox_type_id: number;
  ch_gearbox_gears_id: number;
  ch_drive_type_id: number;
  ch_engine_class_id: number;
  ch_body_type_id: number;
  vin: string;
  emission_co2: number;
  registration: string;
  technical_inspection: boolean;
  auto_radio_code: string;
  auto_alarm_code: string;
  auto_start_code: string;
  first_registration_date: string;
  manufacturer: string;
  main_purpose: string;
  front_tires_condition: number;
  rear_tires_condition: number;
  vat: boolean;
  purchase_price: boolean;
  selling_price: boolean;
  market_position: number;
  administrative_fee: number;
  etx_purchase_price: number;
  etx_selling_price: number;
  etx_mileage_correction_purchase: number;
  etx_mileage_correction_selling: number;
  etx_evaluation_mileage: number;
  tin_age: number;
  tin_margin: number;
  tin_warranty: number;
  tin_administration_costs: number;
  tin_stock_cost: number;
  tin_preparation_cost: number;
  tin_correction: number;
  tin_damage_small: number;
  tin_damage_large: number;
  tin_tires_medium: number;
  tin_tires_bad: number;
  tin_brand_correction: number;
  tin_model_correction: number;
  tin_fuel_correction: number;
  tin_mileage_correction: number;
  tin_transfer: number;
  tin_convenience: number;
  tin_price: number;
  tin_price_eur: number;
  tin_price_correction: boolean;
  evaluated_by: number;
  evaluation_date: string;
  evaluation_file: string;
  archive: string;
  rejected_offer_reason: string | null;
  deleted: boolean;
  created_by: number;
  updated_by: number;
  archived_by: number;
  deleted_by: number;
  created_at: string;
  updated_at: string;
  archived_at: string;
  deleted_at: string;
};
