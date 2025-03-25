"use server";
import * as z from "zod";
import { prisma } from "@/lib/prisma";
import { RegisterSchema } from "@/schemas";

export const login = async (data: z.infer<typeof RegisterSchema>) => {};
