import { cn } from "@/utils/cn";
import { ButtonHTMLAttributes, ReactNode } from "react";

interface IButton extends ButtonHTMLAttributes<HTMLButtonElement> {
  children: ReactNode;
  variant: "primary" | "secondary" | "ghost";
  className?: string;
  fullWidth?: boolean;
}

const variants = {
  primary: "bg-default text-offWhite rounded-full subheading2 ",
  secondary: "",
  ghost: "",
};

export default function Button({
  children,
  variant,
  className,
  fullWidth = false,
  ...props
}: IButton) {
  return (
    <button
      className={cn(
        "py-3 px-12",
        variants[variant],
        fullWidth && "w-full",
        className
      )}
      {...props}
    >
      {children}
    </button>
  );
}
