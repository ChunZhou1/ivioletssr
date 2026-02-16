import { getServerSession } from "next-auth";
import AdminAuthButton from "../../components/admin/AdminAuthButton";
import { authOptions } from "lib/auth";

export default async function AdminPage() {
  const session = await getServerSession(authOptions);
  const isLoggedIn = Boolean(session?.user);
  const displayName = session?.user?.name ?? session?.user?.email ?? "用户";

  return (
    <main style={{ minHeight: "100vh", padding: "24px 20px", background: "#f5f6f8" }}>
      <header
        style={{
          maxWidth: "960px",
          margin: "0 auto",
          borderRadius: "12px",
          padding: "16px 20px",
          background: "#fff",
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between",
          border: "1px solid #e5e7eb",
        }}
      >
        <h1 style={{ margin: 0, fontSize: "20px", color: "#111827" }}>Admin</h1>
        <AdminAuthButton isLoggedIn={isLoggedIn} />
      </header>

      <section
        style={{
          maxWidth: "960px",
          margin: "16px auto 0",
          borderRadius: "12px",
          padding: "20px",
          background: "#fff",
          border: "1px solid #e5e7eb",
          color: "#111827",
        }}
      >
        {isLoggedIn ? (
          <div>
            <p style={{ margin: 0, fontSize: "16px", fontWeight: 600 }}>已登录</p>
            <p style={{ margin: "8px 0 0", fontSize: "14px" }}>
              欢迎，{displayName}。你现在看到的是登录后内容。
            </p>
          </div>
        ) : (
          <div>
            <p style={{ margin: 0, fontSize: "16px", fontWeight: 600 }}>未登录</p>
            <p style={{ margin: "8px 0 0", fontSize: "14px" }}>
              请先点击右上角按钮使用 Google 登录，登录后会显示不同内容。
            </p>
          </div>
        )}
      </section>
    </main>
  );
}
