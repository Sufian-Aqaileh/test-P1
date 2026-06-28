import bcrypt from "bcryptjs";
import NextAuth from "next-auth";
import CredentialsProvider from "next-auth/providers/credentials";

const adminEmail = process.env.ADMIN_EMAIL || "admin@alkarima-clinic.com";
const demoHash = bcrypt.hashSync(process.env.ADMIN_PASSWORD || "demo-password", 10);

const handler = NextAuth({
  session: { strategy: "jwt" },
  providers: [
    CredentialsProvider({
      name: "Admin",
      credentials: {
        email: { label: "Email", type: "email" },
        password: { label: "Password", type: "password" }
      },
      async authorize(credentials) {
        const email = credentials?.email || "";
        const password = credentials?.password || "";
        const validPassword = await bcrypt.compare(password, demoHash);
        if (email === adminEmail && validPassword) {
          return { id: "admin", email, name: "Admin", role: "ADMIN" };
        }
        return null;
      }
    })
  ],
  pages: {
    signIn: "/admin"
  },
  callbacks: {
    async jwt({ token, user }) {
      if (user) token.role = "ADMIN";
      return token;
    },
    async session({ session, token }) {
      session.user = { ...session.user, role: token.role as string };
      return session;
    }
  }
});

export { handler as GET, handler as POST };
