import Credentials from "next-auth/providers/credentials";
import type { NextAuthConfig } from "next-auth";
import { LoginSchema } from "@/schemas";
import { prisma } from "@/lib/prisma";

export default {
  providers: [
    Credentials({
      async authorize(credentials) {
        const validateData = LoginSchema.safeParse(credentials);
        if (!validateData.success) return null;
        const { email, password } = validateData.data;
        const user = await prisma.user.findUnique({
          where: { email: email },
        });
        if (!user || !user.password || !user.email) return null;
        const passwordMatch = user.password === password;
        if (passwordMatch) {
          return user;
        }
        return null;
      },
    }),
  ],
} satisfies NextAuthConfig;
