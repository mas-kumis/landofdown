"use server";
import { z } from "zod";
import { LoginSchema } from "@/components/login";
// import bcrypt from "bcryptjs";
import { prisma } from "@/lib/prisma";
import { signIn } from "@/lib/auth";
import bcrypt from "bcryptjs";
export const login = async (data: z.infer<typeof LoginSchema>) => {
  try {
    const userExist = await prisma.user.findFirst({
      where: {
        email: data.email,
      },
    });
    if (!userExist || !userExist.password) {
      return { error: "User not found, Please Register" };
    }
    const comparePassword = await bcrypt.compare(
      data.password,
      userExist.password
    );
    if (!comparePassword) {
      return { error: "Wrong Password" };
    }
    try {
      await signIn("credentials", {
        email: data.email,
        password: data.password,
        redirect: false,});
      return { success: "User logged in successfully" };
    } catch (error) {
      if (error instanceof Error) {
        return { error: error.message };
      }
      return { error: "Something Wrong" };
    }
  } catch (error) {
    console.error(error);
    return { error: "Something Wrong" };
  }
};
