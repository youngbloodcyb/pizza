"use server";

import { redirect } from "next/navigation";
import PocketBase from "pocketbase";
import { cookies } from "next/headers";
import { actionClient } from "./safe-action";
import { LoginSchema, SignUpSchema } from "./validations";

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

export const signUp = actionClient
  .schema(SignUpSchema)
  .action(async ({ parsedInput: { email, password, username } }) => {
    const pb = new PocketBase(process.env.POCKETBASE_URL);

    // create a new user record in PocketBase
    const user = await pb.collection("users").create({
      username,
      email,
      password,
      passwordConfirm: password,
    });

    // authenticate the newly created user
    const { token, record: model } = await pb
      .collection("users")
      .authWithPassword(email, password);

    // create a cookie with the authentication token and model
    const cookie = JSON.stringify({ token, model });

    cookies().set("pb_auth", cookie, {
      secure: true,
      path: "/",
      sameSite: "strict",
      httpOnly: true,
    });

    redirect("/");
  });

export async function logout() {
  cookies().delete("pb_auth");
}
