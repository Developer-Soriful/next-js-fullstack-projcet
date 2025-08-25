// app/api/auth/[...nextauth]/route.js
import NextAuth from "next-auth";
import GoogleProvider from "next-auth/providers/google";

export const authOptions = {
  providers: [
    GoogleProvider({
      clientId: process.env.GOOGLE_CLIENT_ID,
      clientSecret: process.env.GOOGLE_CLIENT_SECRET,
    }),
  ],
  callbacks: {
    async session({ session, token }) {
      // Add custom properties to the session object if needed
      return session;
    },
  },
  pages: {
    signIn: "/login", // Redirect users to your custom login page
  },
};

const handler = NextAuth(authOptions);

export { handler as GET, handler as POST };
