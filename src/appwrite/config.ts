export const config = {
  endpoint: String(process.env.ENDPOINT),
  project_id: String(process.env.PROJECT_ID),
  db_constants: String(process.env.DB_CONSTANTS),
  col_specialities: String(process.env.COLL_SPECIALITIES),
  col_gov: String(process.env.COLL_GOVERNORATES),
  col_city: String(process.env.COLL_CITIES),
  db_form_requests: String(process.env.DB_FORM_REQUESTS),
  col_doctor_join_requests: String(process.env.COLL_DOCTOR_JOIN_REQUESTS),
};
