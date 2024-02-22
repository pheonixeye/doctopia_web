import { config } from "@/appwrite/config";
import { Models } from "appwrite";

export interface Governorate {
  id: string;
  governorate_name_en: string;
  governorate_name_ar: string;
}

export async function getAllGovernorates(): Promise<Governorate[]> {
  const result = await fetch(
    `${config.endpoint}/databases/${config.db_constants}/collections/${config.col_gov}/documents?queries[]=limit(200)`,
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

  const govs: Governorate[] = docs as any as Governorate[];

  govs.sort((a, b) => (parseInt(a.id) > parseInt(b.id) ? 1 : -1));

  console.log("fetched governorates.");

  return govs;
}
