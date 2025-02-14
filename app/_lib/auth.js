// NextAuth authentication configuration with Google provider and guest management.
import NextAuth from "next-auth";
import Google from "next-auth/providers/google";
import { createGuest, getGuest } from "@/app/_lib/data-service";

// Authentication configuration for NextAuth with Google provider.
const authConfig = {
  providers: [
    // Configures Google as an authentication provider.
    Google({
      clientId: process.env.AUTH_GOOGLE_ID,
      clientSecret: process.env.AUTH_GOOGLE_SECRET,
    }),
  ],
  callbacks: {
    // Ensures only authenticated users are authorized.
    authorized({ auth, request }) {
      return !!auth?.user;
    },
    // Handles sign-in logic and creates a guest if not existing.
    async signIn({ user, account, profile }) {
      try {
        const existingGuest = await getGuest(user.email);

        if (!existingGuest)
          await createGuest({ email: user.email, fullName: user.name });

        return true;
      } catch {
        return false;
      }
    },
    // Modifies the session to include the guest ID.
    async session({ session, user }) {
      const guest = await getGuest(session.user.email);
      session.user.guestId = guest.id;
      return session;
    },
  },
  // Custom sign-in page URL.
  pages: {
    signIn: "/login",
  },
};

// Exports NextAuth instance and authentication handlers for GET and POST requests.
export const {
  auth,
  signIn,
  signOut,
  handlers: { GET, POST },
} = NextAuth(authConfig);
