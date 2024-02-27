import { config } from "@/appwrite/config";
import { Models } from "appwrite";
import { QueryClass } from "./queryClass";
// import { QueryClass } from "./queryClass";

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
  $id: string;
}

export interface Parameters {
  spec?: string;
  gov?: string;
  city?: string;
  page?: string;
}

function _buildFindDoctorsQueryQuery(
  spec_id: number,
  gov_id: number | null,
  city_id: number | null,
  page: number
): string {
  let qSpecs: string;
  let qGovs: string | null;
  let qCity: string | null;
  let qPage: string | null;

  const queries: string[] = [];

  if (spec_id != null) {
    qSpecs = QueryClass.equal("spec_id", spec_id);
    queries.push(`?queries[]=${qSpecs}&`);
  }
  if (gov_id != null) {
    qGovs = QueryClass.equal("gov_id", gov_id);
    queries.push(`queries[]=${qGovs}&`);
  }
  if (city_id != null) {
    qCity = QueryClass.equal("city_id", city_id);
    queries.push(`queries[]=${qCity}&`);
  }
  queries.push(`queries[]=limit(5)&`);
  //TODO: pagination by cursor
  const cursor = QueryClass.cursorAfter("$documentId");
  // queries.push(`${cursor}&`);

  return queries.join();
}

export async function getDoctorSearchResults(
  parameters: Parameters
): Promise<Clinic[]> {
  const spec_id = parseInt(parameters.spec!);
  const gov_id = tryParseInt(parameters.gov);
  const city_id = tryParseInt(parameters.city);
  const page = tryParseInt(parameters.page);

  let query: string;

  try {
    query = _buildFindDoctorsQueryQuery(spec_id, gov_id, city_id, page!);
  } catch (error) {
    throw new Error("No Speciality Selected...");
  }

  // console.log("query: ", query);

  const result = await fetch(
    `${config.endpoint}/databases/${config.db_clinics}/collections/${config.col_clinics}/documents${query}`,
    //TODO: make requests by id of spec/gov/city

    {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
        "X-Appwrite-Response-Format": "1.4.0",
        "X-Appwrite-Project": `${config.project_id}`,
      },
    }
  );

  // console.log(result.url);
  if (!result.ok) throw new Error(result.statusText);

  const res = (await result.json()) as any;

  const docs = res.documents as Models.Document[];

  const clinics: Clinic[] = docs as any as Clinic[];

  return clinics;
}

function tryParseInt(i?: string | ""): number | null {
  let value: number | null;
  try {
    value = parseInt(i!);
  } catch (error) {
    value = null;
  }
  return value;
}
