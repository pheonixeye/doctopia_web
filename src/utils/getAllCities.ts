import { config } from "@/appwrite/config";
import { Models } from "appwrite";

export interface City {
  id: string;
  governorate_id: string;
  city_name_en: string;
  city_name_ar: string;
}

export async function getAllCities(): Promise<City[]> {
  const result = await fetch(
    `${config.endpoint}/databases/${config.db_constants}/collections/${config.col_city}/documents?queries[]=limit(500)&queries[]=orderAsc("id")`,
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

  const cities: City[] = docs as any as City[];

  cities.sort((a, b) => (parseInt(a.id) > parseInt(b.id) ? 1 : -1));

  // console.log("fetched cities.");

  return cities;
}
