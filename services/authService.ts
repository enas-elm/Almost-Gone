import { SupabaseClient } from "@supabase/supabase-js";

export async function signInWithEmail(
  supabase: SupabaseClient,
  email: string,
  password: string
) {
  return await supabase.auth.signInWithPassword({ email, password });
}

export async function signUpWithEmail(
  supabase: SupabaseClient,
  email: string,
  password: string
) {
  return await supabase.auth.signUp({ email, password });
}

export async function signOut(supabase: SupabaseClient) {
  return await supabase.auth.signOut();
}
