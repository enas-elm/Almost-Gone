"use server";

import { createClient } from "@/lib/supabase/server";
import { loginSchema, registerSchema } from "@/models/authSchema";
import {
  signInWithEmail,
  signOut,
  signUpWithEmail,
} from "@/services/authService";
import { revalidatePath } from "next/cache";
import { redirect } from "next/navigation";

export async function login(formData: FormData) {
  const supabase = await createClient();
  console.log("Login form data:", formData);

  for (const [key, value] of formData.entries()) {
    console.log(`${key}: ${value}`);
  }

  const parsed = loginSchema.safeParse({
    email: formData.get("email"),
    password: formData.get("password"),
  });

  if (!parsed.success) {
    redirect("/error?type=validation");
  }

  const data = {
    email: formData.get("email") as string,
    password: formData.get("password") as string,
  };

  const { error } = await signInWithEmail(supabase, data.email, data.password);

  if (error) {
    redirect("/error");
  }

  revalidatePath("/", "layout");
  redirect("/");
}

export async function signup(formData: FormData) {
  const supabase = await createClient();
  console.log("Signup form data:", formData);

  for (const [key, value] of formData.entries()) {
    console.log(`${key}: ${value}`);
  }

  const parsed = registerSchema.safeParse({
    email: formData.get("email"),
    password: formData.get("password"),
    repeatPassword: formData.get("repeatPassword"),
  });

  if (!parsed.success) {
    redirect("/error?type=validation");
  }

  const data = {
    email: formData.get("email") as string,
    password: formData.get("password") as string,
  };

  const { error } = await signUpWithEmail(supabase, data.email, data.password);

  if (error) {
    redirect("/error");
  }

  revalidatePath("/", "layout");
  redirect("/");
}

export async function logout() {
  const supabase = await createClient();

  const { error } = await signOut(supabase);

  if (error) {
    redirect("/error?type=logout");
  }

  redirect("/auth/login");
}
