"use client";

import { logout } from "@/app/auth/logout/action";

export default function LogoutButton() {
  return (
    <form action={logout}>
      <button type="submit" className="text-sm text-red-600 underline">
        Se déconnecter
      </button>
    </form>
  );
}
