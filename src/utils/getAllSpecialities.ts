import { Models } from "appwrite";
import { config } from "../appwrite/config";

export interface Speciality {
  speciality_en: string;
  speciality_ar: string;
  spec_id: number;
}

export const getAllSpecialities = async () => {
  const result = await fetch(
    `${config.endpoint}/databases/${config.db_constants}/collections/${config.col_specialities}/documents?queries[]=limit(100)&queries[]=orderAsc("spec_id")`,
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

  const specs: Speciality[] = docs as any as Speciality[];

  // console.log("fetched specialities.");

  return specs;
};
