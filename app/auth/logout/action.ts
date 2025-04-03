"use server";

import { redirect } from "next/navigation";
import { signOut } from "@/services/authService";
import { createClient } from "@/lib/supabase/server";

export async function logout() {
  const supabase = await createClient();

  const { error } = await signOut(supabase);

  if (error) {
    redirect("/error?type=logout");
  }

  redirect("/auth/login");
}
