import { cn } from "@/commons/utils/cn";
import { ButtonHTMLAttributes, ReactNode } from "react";

interface IButton extends ButtonHTMLAttributes<HTMLButtonElement> {
  children: ReactNode;
  variant?: "primary" | "secondary" | "ghost";
  className?: string;
  fullWidth?: boolean;
}

const variants = {
  primary: `bg-default text-offWhite hover:bg-brandDark 
    active:bg-brandDefault active:ring-8 active:ring-brandBackground disabled:bg-default/50`,
  secondary: ``,
  ghost: `text-brandDefault hover:text-brandDark active:bg-offWhite active:ring-8 
  active:ring-line disabled:text-brandDefault/50`,
};

export default function Button({
  children,
  variant = "primary",
  className,
  fullWidth = false,
  ...props
}: IButton) {
  return (
    <button
      className={cn(
        "py-3 px-12 rounded-full subheading2",
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
