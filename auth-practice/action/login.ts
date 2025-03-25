"use server";
import * as z from "zod";
import { prisma } from "@/lib/prisma";
import { LoginSchema } from "@/schemas";
import { AuthError } from "next-auth";
import { signIn } from "@/lib/auth";
export const login = async (data: z.infer<typeof LoginSchema>) => {
  const validateData = LoginSchema.parse(data);
  if (!validateData) {
    return { error: "Invalid data" };
  }
  const { email, password } = validateData;
  const exisitngUser = await prisma.user.findUnique({
    where: { email: email },
  });
  if (!exisitngUser || !exisitngUser.password || !exisitngUser.email) {
    return {
      error: "User Not Found",
    };
  }
  try {
    await signIn("credentials", {
      email: email,
      password: password,
      redirectTo: "/dashboard",
    });
  } catch (error) {
    if (error instanceof AuthError) {
      return {
        error: error.message,
      };
    }
    return {
      error: "Something went wrong",
    };
  }
};
