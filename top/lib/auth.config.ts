import Credentials from "next-auth/providers/credentials";
import type { NextAuthConfig } from "next-auth";
import { prisma } from "./prisma";
import bcrypt from "bcryptjs";

export default {
  providers: [
    Credentials({
      async authorize(credentials) {
        const { email, password } = credentials as {
          email: string;
          password: string;
        };
        const user = await prisma.user.findFirst({
          where: {
            email: email,
          },
        });
        if (!user || !user.password) {
          return null;
        }
        const passwordMatch = await bcrypt.compare(password, user.password);
        if (!passwordMatch) {
          return null;
        }
        return user;
      },
    }),
  ],
} satisfies NextAuthConfig;
