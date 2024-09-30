"use server";

import { redirect } from "next/navigation";
import PocketBase from "pocketbase";
import { cookies } from "next/headers";
import { actionClient } from "./safe-action";
import { SignInSchema, SignUpSchema } from "./validations";

export const signIn = actionClient
  .schema(SignInSchema)
  .action(async ({ parsedInput: { username, password } }) => {
    const pb = new PocketBase(process.env.POCKETBASE_URL);

    const { token, record: model } = await pb
      .collection("users")
      .authWithPassword(username, password);

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

    let user;
    try {
      user = await pb.collection("users").create({
        username,
        email,
        password,
        passwordConfirm: password,
      });
    } catch (error) {
      throw new Error("Username or email already exists");
    }

    console.log(user);

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
