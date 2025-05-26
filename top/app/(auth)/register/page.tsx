import { RegisterForm } from "@/components/register";
import React from "react";

const page = () => {
  return (
    <div className="mx-auto h-screen w-screen flex justify-center items-center">
      <div className="w-[400px] border rounded-lg p-8">
        {" "}
        <RegisterForm />
      </div>
    </div>
  );
};

export default page;
