import { InputHTMLAttributes } from "react";
import {
  UseFormRegister,
  FieldValues,
  Path,
  FieldError,
} from "react-hook-form";

interface IInput<T extends FieldValues>
  extends InputHTMLAttributes<HTMLInputElement> {
  name: Path<T>;
  register: UseFormRegister<T>;
  errors?: FieldError;
}
export default function Input<T extends FieldValues>({
  name,
  register,
  errors,
  ...props
}: IInput<T>) {
  return (
    <div className="flex flex-col w-full">
      <input
        {...register(name)}
        {...props}
        className="placeholder:text-disabled bg-offWhite focus:outline-none py-3 px-4 focus:ring-2 focus:ring-line rounded-md w-full"
      />
      {errors && (
        <span className="text-xs text-red-500 mt-1">{errors.message}</span>
      )}
    </div>
  );
}
