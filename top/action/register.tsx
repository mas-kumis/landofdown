"use server";
import * as z from "zod";
import { prisma } from "@/lib/prisma";
import { RegisterSchema } from "@/components/register";
import bcrypt from "bcryptjs";

export const register = async (data: z.infer<typeof RegisterSchema>) => {
  try {
    const hashedPassword = await bcrypt.hash(data.password, 10);
    const existingUser = await prisma.user.findFirst({
      where: {
        email: data.email,
      },
    });
    if (existingUser) {
      return { error: "User already exists" };
    }
    const user = await prisma.user.create({
      data: {
        name: data.name,
        email: data.email,
        password: hashedPassword,
      },
    });
    return { success: "User created successfully", user };
  } catch (error) {
    console.error(error);
    return { error: "User not created" };
  }
};
