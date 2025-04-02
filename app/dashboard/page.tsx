import { redirect } from "next/navigation";

import { createClient } from "@/utils/supabase/server";

import LogoutButton from "@/components/common/LogoutButton";

export default async function DashboardPage() {
  const supabase = await createClient();

  const { data, error } = await supabase.auth.getUser();
  if (error || !data?.user) {
    redirect("/auth/login");
  }

  return (
    <div>
      <h1>Bienvenue {data.user.email} !</h1>
      <LogoutButton />
    </div>
  );
}
