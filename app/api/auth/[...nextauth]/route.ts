import NextAuth from "next-auth"
import CredentialsProvider from "next-auth/providers/credentials"

// This is a simplified auth implementation for the demo
// In a real application, you would connect this to your Spring Boot backend

const handler = NextAuth({
  providers: [
    CredentialsProvider({
      name: "Credentials",
      credentials: {
        email: { label: "Email", type: "email" },
        password: { label: "Password", type: "password" },
      },
      async authorize(credentials) {
        // In a real application, you would validate against your Spring Boot API
        // This is a mock implementation for demonstration purposes
        if (credentials?.email === "admin@example.com" && credentials?.password === "password") {
          return {
            id: "1",
            name: "Admin User",
            email: "admin@example.com",
            role: "admin",
          }
        } else if (credentials?.email === "agent@example.com" && credentials?.password === "password") {
          return {
            id: "2",
            name: "Agent User",
            email: "agent@example.com",
            role: "agent",
          }
        }
        return null
      },
    }),
  ],
  session: {
    strategy: "jwt",
  },
  callbacks: {
    async jwt({ token, user }) {
      if (user) {
        token.role = user.role
      }
      return token
    },
    async session({ session, token }) {
      if (session.user) {
        session.user.role = token.role
      }
      return session
    },
  },
  pages: {
    signIn: "/login",
  },
})

export { handler as GET, handler as POST }

