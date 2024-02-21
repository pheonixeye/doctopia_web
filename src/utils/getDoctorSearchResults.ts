import { config } from "@/appwrite/config";
import { Models } from "appwrite";
import { Speciality, getAllSpecialities } from "./getAllSpecialities";
import { Governorate, getAllGovernorates } from "./getGovernorates";
import { City, getAllCities } from "./getAllCities";

export interface Clinic {
  doc_id: string;
  speciality_en: string;
  speciality_ar: string;
  name_en: string;
  name_ar: string;
  venue_en: string;
  venue_ar: string;
  gov_en: string;
  gov_ar: string;
  city_en: string;
  city_ar: string;
  mobile: string;
  landline: string;
  address_en: string;
  address_ar: string;
  location_link: string;
  attendance: boolean;
  published: boolean;
  consultation_fees: number;
  followup_fees: number;
  discount: number;
  off_dates: string[];
  spec_id: number;
  gov_id: number;
  city_id: number;
}

export interface Parameters {
  spec?: string;
  gov?: string;
  city?: string;
  page?: string;
}

export async function getDoctorSearchResults(
  parameters: Parameters
): Promise<Clinic[]> {
  const spec_id = tryParseInt(parameters.spec);
  const gov_id = tryParseInt(parameters.gov);
  const city_id = tryParseInt(parameters.city);
  const page = tryParseInt(parameters.page);

  const result = await fetch(
    `${config.endpoint}/databases/${config.db_clinics}/collections/${
      config.col_clinics
    }/documents?queries[]=limit(5)&queries[]=equal("spec_id",${spec_id!})`,
    //TODO: make requests by id of spec/gov/city
    {
      headers: {
        "Content-Type": "application/json",
        "X-Appwrite-Response-Format": "1.4.0",
        "X-Appwrite-Project": `${config.project_id}`,
      },
    }
  );
  if (!result.ok) throw new Error(result.statusText);

  const res = (await result.json()) as any;

  const docs = res.documents as Models.Document[];

  const govs: Clinic[] = docs as any as Clinic[];

  return govs;
}

function tryParseInt(i?: string | ""): number | undefined {
  let value: number | undefined;
  try {
    value = parseInt(i!);
  } catch (error) {
    value = undefined;
  }
  return value;
}
