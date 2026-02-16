"use client";

import { signIn, signOut } from "next-auth/react";
import { adminPageCopy, getAdminAuthButtonStyle } from "constant/admin";

type AdminAuthButtonProps = {
  isLoggedIn: boolean;
};

export default function AdminAuthButton({ isLoggedIn }: AdminAuthButtonProps) {
  const handleAuthClick = () => {
    if (isLoggedIn) {
      void signOut({ callbackUrl: "/admin" });
      return;
    }
    void signIn("google", { callbackUrl: "/admin" });
  };

  return (
    <button
      type="button"
      onClick={handleAuthClick}
      style={getAdminAuthButtonStyle(isLoggedIn)}
    >
      {isLoggedIn ? adminPageCopy.signOutButtonText : adminPageCopy.signInButtonText}
    </button>
  );
}
