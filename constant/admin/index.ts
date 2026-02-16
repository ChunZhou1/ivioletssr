import type { CSSProperties } from "react";

type AdminPageCopy = {
  fallbackUserName: string;
  pageTitle: string;
  loggedInTitle: string;
  loggedInDescriptionPrefix: string;
  loggedInDescriptionSuffix: string;
  loggedOutTitle: string;
  loggedOutDescription: string;
  signInButtonText: string;
  signOutButtonText: string;
};

export const adminPageCopy: AdminPageCopy = {
  fallbackUserName: "用户",
  pageTitle: "Admin",
  loggedInTitle: "已登录",
  loggedInDescriptionPrefix: "欢迎，",
  loggedInDescriptionSuffix: "。你现在看到的是登录后内容。",
  loggedOutTitle: "未登录",
  loggedOutDescription: "请先点击右上角按钮使用 Google 登录，登录后会显示不同内容。",
  signInButtonText: "使用 Google 登录",
  signOutButtonText: "退出登录",
};

export const adminPageStyles: Record<string, CSSProperties> = {
  main: {
    minHeight: "100vh",
    padding: "24px 20px",
    background: "#f5f6f8",
  },
  header: {
    maxWidth: "960px",
    margin: "0 auto",
    borderRadius: "12px",
    padding: "16px 20px",
    background: "#fff",
    display: "flex",
    alignItems: "center",
    justifyContent: "space-between",
    border: "1px solid #e5e7eb",
  },
  headerTitle: {
    margin: 0,
    fontSize: "20px",
    color: "#111827",
  },
  section: {
    maxWidth: "960px",
    margin: "16px auto 0",
    borderRadius: "12px",
    padding: "20px",
    background: "#fff",
    border: "1px solid #e5e7eb",
    color: "#111827",
  },
  statusTitle: {
    margin: 0,
    fontSize: "16px",
    fontWeight: 600,
  },
  statusDescription: {
    margin: "8px 0 0",
    fontSize: "14px",
  },
};

export const getAdminAuthButtonStyle = (isLoggedIn: boolean): CSSProperties => ({
  border: "none",
  borderRadius: "8px",
  backgroundColor: isLoggedIn ? "#444" : "#1a73e8",
  color: "#fff",
  padding: "10px 14px",
  cursor: "pointer",
  fontSize: "14px",
});
