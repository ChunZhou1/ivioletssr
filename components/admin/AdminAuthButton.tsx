"use client";

import { signIn, signOut } from "next-auth/react";

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
      style={{
        border: "none",
        borderRadius: "8px",
        backgroundColor: isLoggedIn ? "#444" : "#1a73e8",
        color: "#fff",
        padding: "10px 14px",
        cursor: "pointer",
        fontSize: "14px",
      }}
    >
      {isLoggedIn ? "退出登录" : "使用 Google 登录"}
    </button>
  );
}
