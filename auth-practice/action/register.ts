"use server";

import * as z from "zod";
import { prisma } from "@/lib/prisma";
import { RegisterSchema } from "@/schemas";

export const register = async (data: z.infer<typeof RegisterSchema>) => {
  try {
    const validateData = RegisterSchema.parse(data);
    if (!validateData) {
      return { error: "Invalid data" };
    }
    const exisitngUser = await prisma.user.findUnique({
      where: { email: validateData.email },
    });
    if (exisitngUser) {
      return { error: "User already exists" };
    }
    const user = await prisma.user.create({
      data: {
        name: validateData.name,
        email: validateData.email,
        password: validateData.password,
      },
    });
    return user;
  } catch (error) {
    console.error(error);
    return error;
  }
};
