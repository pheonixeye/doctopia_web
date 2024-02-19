"use server";

import { config } from "@/appwrite/config";
import { redirect } from "next/navigation";
import { v4 } from "uuid";
import { cookies } from "next/headers";
import { cookieName } from "@/i18n/settings";

export async function doctorJoinRequest(formData: FormData) {
  let response: Response;

  const documentId = v4();

  const lang = cookies().get(cookieName)?.value;

  const data = {
    name: formData.get("name"),
    mobile: formData.get("mobile"),
    speciality: formData.get("speciality"),
    governorate: formData.get("governorate"),
    city: formData.get("city"),
    email: formData.get("email"),
    status: "initial",
  };

  const body = {
    documentId: documentId,
    data: data,
    permissions: [
      'read("any")',
      'write("any")',
      'delete("any")',
      'update("any")',
    ],
  };
  //   console.log({ body });
  try {
    response = await fetch(
      `${config.endpoint}/databases/${config.db_form_requests}/collections/${config.col_doctor_join_requests}/documents`,
      {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          "X-Appwrite-Response-Format": "1.4.0",
          "X-Appwrite-Project": `${config.project_id}`,
        },
        body: JSON.stringify(body),
      }
    );
    // console.log(await response.json());
  } catch (error: any) {
    // console.log({ error });
    throw new Error(error);
  }
  if (response.ok) {
    redirect(`/${lang}/thankyou`);
  } else {
    throw new Error("Something Went Wrong, Please Try Again Later.");
  }
}
