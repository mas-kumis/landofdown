import React from "react";
import { auth } from "@/lib/auth";
const page = async () => {
  const session = await auth();
  console.log(session);
  return (
    <div>
      <h1 className="text-3xl font-bold text-center">Dashboard</h1>
    </div>
  );
};

export default page;
