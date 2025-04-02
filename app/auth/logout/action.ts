"use server";

import { redirect } from "next/navigation";
import { createClient } from "@/utils/supabase/server";
import { signOut } from "@/services/authService";

export async function logout() {
  const supabase = await createClient();

  const { error } = await signOut(supabase);

  if (error) {
    redirect("/error?type=logout");
  }

  redirect("/auth/login");
}
