"use server";

import { redirect } from "next/navigation";
import PocketBase from "pocketbase";
import { cookies } from "next/headers";
import { actionClient } from "./safe-action";
import { LoginSchema } from "./validations";

export const login = actionClient
  .schema(LoginSchema)
  .action(async ({ parsedInput: { email, password } }) => {
    const pb = new PocketBase(process.env.POCKETBASE_URL);

    const { token, record: model } = await pb
      .collection("users")
      .authWithPassword(email, password);

    const cookie = JSON.stringify({ token, model });

    cookies().set("pb_auth", cookie, {
      secure: true,
      path: "/",
      sameSite: "strict",
      httpOnly: true,
    });

    redirect("/dashboard");
  });

export async function logout() {
  cookies().delete("pb_auth");
}
