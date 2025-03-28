"use server";
import { RegisterSchema } from "@/schemas";
import { prisma } from "@/lib/prisma";
import * as z from "zod";

const register = async (formData: z.infer<typeof RegisterSchema>) => {
  try {
    const validateData = RegisterSchema.parse(formData);
    if (!validateData) {
      return {
        status: 400,
        body: {
          message: "Bad Request",
        },
      };
    }
    await prisma.user.create({
      data: {
        name: validateData.name,
        email: validateData.email,
        password: validateData.password,
      },
    });
    return {
      status: 200,
      body: {
        message: "success",
      },
    };
  } catch (error) {
    console.error(error);
    return {
      status: 400,
      body: {
        message: "Bad Request",
      },
    };
  }
};

export { register };
