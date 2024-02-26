"use server";

import { cookies } from "next/headers";
import { cookieName } from "@/i18n/settings";
import { RedirectType, redirect } from "next/navigation";

export async function searchDoctorsRedirect(formData: FormData) {
  const lang = cookies().get(cookieName)?.value;

  const srcParams = {
    spec: formData.get("speciality"),
    gov: formData.get("governorate"),
    city: formData.get("city"),
  };

  redirect(
    `/${lang}/doctors?speciality=${srcParams.spec}&governorate=${srcParams.gov}&city=${srcParams.city}&page=1`,
    RedirectType.push
  );
}
