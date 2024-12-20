import { InputHTMLAttributes } from "react";
import SearchIcon from "@/assets/svgs/search.svg";
import Image from "next/image";
import { cn } from "@/commons/utils/cn";

interface IInputSearch extends InputHTMLAttributes<HTMLInputElement> {
  className?: string;
  fullWidth?: boolean;
}

export default function InputSearch({
  className,
  fullWidth = false,
  ...props
}: IInputSearch) {
  return (
    <div className={cn("relative", className)}>
      <input
        id="search"
        placeholder="Search"
        className={cn(
          "bg-offWhite text-disabled focus:outline-none focus:ring-2 focus:ring-offWhite rounded-md body1 py-1.5 px-10",
          fullWidth && "w-full"
        )}
        {...props}
      />
      <label htmlFor="search" className="cursor-pointer">
        <Image
          src={SearchIcon}
          alt="search"
          className="absolute top-1 left-2"
        />
      </label>
    </div>
  );
}
