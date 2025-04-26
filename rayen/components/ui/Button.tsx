import React from "react";

const VariantClasses = {
  primary: "bg-blue-500 text-white hover:bg-blue-600",
  secondary: "bg-gray-500 text-white hover:bg-gray-600",
  tertiary: "bg-green-500 text-white hover:bg-green-600",
  ghost: "bg-transparent text-blue-500 hover:bg-blue-100",
  link: "bg-transparent text-blue-500 hover:bg-blue-100",
};

type ButtonProps = {
  variant?: "primary" | "secondary" | "tertiary" | "ghost" | "link";
  size: "sm" | "md" | "lg";
  children: React.ReactNode;
  onClick?: () => void;
};
const Button = ({
  variant = "primary",
  onClick,
  size,
  children,
}: ButtonProps) => {
  const baseClasses = " rounded-md font-semibold px-4 py-2 text-center";
  const sizeClasses = {
    sm: "text-sm",
    md: "text-base",
    lg: "text-lg",
  };
  return (
    <button
      onClick={onClick}
      className={` ${VariantClasses[variant]} ${baseClasses} ${sizeClasses[size]} `}
    >
      {children}
    </button>
  );
};

export default Button;
