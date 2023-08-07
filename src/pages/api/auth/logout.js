import NextAuth from "next-auth";

export default NextAuth({
  providers: [
    // Your authentication providers here
  ],
  session: {
    jwt: true,
  },
  callbacks: {
    async jwt(token, user) {
      if (user) {
        token.id = user.id;
        token.name = user.name;
        // Include other user data in the token if needed
      }
      return token;
    },
    async session(session, token) {
      session.user = token;
      return session;
    },
  },
  pages: {
    signIn: "/admin", // Redirect to /admin for login
    signOut: "/admin", // Redirect to /admin for logout
    // Add other custom page paths if needed
  },
  // Set custom basePath to avoid /api prefix
  basePath: "/auth",
});