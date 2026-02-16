import { AuthOptions } from "next-auth";
import GoogleProvider from "next-auth/providers/google";

const googleClientId =
  process.env.GOOGLE_CLIENT_ID ?? "demo-google-client-id.apps.googleusercontent.com";
const googleClientSecret =
  process.env.GOOGLE_CLIENT_SECRET ?? "demo-google-client-secret";

export const authOptions: AuthOptions = {
  providers: [
    GoogleProvider({
      clientId: googleClientId,
      clientSecret: googleClientSecret,
    }),
  ],
  session: {
    strategy: "jwt",
  },
  secret: process.env.NEXTAUTH_SECRET ?? "demo-nextauth-secret-change-me",
};
