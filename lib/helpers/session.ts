import { cookies } from "next/headers";

export function getSession() {
  const cookie = cookies().get("pb_auth");

  if (!cookie) {
    return null;
  }

  const { model } = JSON.parse(cookie.value);
  return model;
}
