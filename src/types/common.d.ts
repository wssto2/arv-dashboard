export type RecordWithDefinition = {
  entry_type_id: number;
  entry_vin: string;
  entry_ecode: string;
  arv_category_id: number;
  arv_brand_id: number;
  arv_model_id: number;
  etx_category_id: number;
  etx_brand_id: number;
  etx_model_id: number;
  etx_version_id: number;
  first_registration_month: number;
  first_registration_year: number;
  mileage: number;
};

export type Characteristic = {
  id: number;
  category_id: number;
  sub_category_id: number;
  name: string;
  additional_3: string;
  additional_5: string;
};
