import { getServerSession } from "next-auth";
import AdminAuthButton from "../../components/admin/AdminAuthButton";
import { adminPageCopy, adminPageStyles } from "constant/admin";
import { authOptions } from "lib/auth";

export default async function AdminPage() {
  const session = await getServerSession(authOptions);
  const isLoggedIn = Boolean(session?.user);
  const displayName =
    session?.user?.name ?? session?.user?.email ?? adminPageCopy.fallbackUserName;

  return (
    <main style={adminPageStyles.main}>
      <header style={adminPageStyles.header}>
        <h1 style={adminPageStyles.headerTitle}>{adminPageCopy.pageTitle}</h1>
        <AdminAuthButton isLoggedIn={isLoggedIn} />
      </header>

      <section style={adminPageStyles.section}>
        {isLoggedIn ? (
          <div>
            <p style={adminPageStyles.statusTitle}>{adminPageCopy.loggedInTitle}</p>
            <p style={adminPageStyles.statusDescription}>
              {adminPageCopy.loggedInDescriptionPrefix}
              {displayName}
              {adminPageCopy.loggedInDescriptionSuffix}
            </p>
          </div>
        ) : (
          <div>
            <p style={adminPageStyles.statusTitle}>{adminPageCopy.loggedOutTitle}</p>
            <p style={adminPageStyles.statusDescription}>{adminPageCopy.loggedOutDescription}</p>
          </div>
        )}
      </section>
    </main>
  );
}
