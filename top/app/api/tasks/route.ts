"use server";

// import { NextResponse } from "next/server";
import { prisma } from "@/lib/prisma";
// import { PrismaClient } from "@prisma/client";

export async function GET() {
  const tasks = await prisma.task.findMany();
  return new Response(JSON.stringify(tasks));
}
