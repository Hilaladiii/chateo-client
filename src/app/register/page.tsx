"use client";

import Button from "@/commons/components/elements/Button";
import Input from "@/commons/components/elements/Input";
import { registerSchema, TRegister } from "@/commons/validator/register";
import { zodResolver } from "@hookform/resolvers/zod";
import { SubmitHandler, useForm } from "react-hook-form";
import Image from "next/image";
import Logo from "@/assets/svgs/logo.svg";
import { useRegister } from "@/commons/hooks/user/useRegister";

export default function RegisterPage() {
  const { mutate } = useRegister();
  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
  } = useForm<TRegister>({ resolver: zodResolver(registerSchema) });

  const onSubmit: SubmitHandler<TRegister> = async (data) => {
    mutate(data);
  };

  return (
    <div className="w-full flex flex-col items-center px-6 pt-5">
      <div className="flex flex-col items-center mt-10">
        <Image src={Logo} alt="logo" />
        <h1 className="heading2 text-center text-active mt-4">
          Register your account
        </h1>
        <p className="body2 text-active">Please fill all the data</p>
      </div>
      <form
        className="mt-12 flex flex-col w-full"
        onSubmit={handleSubmit(onSubmit)}
      >
        <div className="flex flex-col  gap-4">
          <Input
            register={register}
            name="username"
            placeholder="Username"
            type="text"
            errors={errors.username}
          />
          <Input
            register={register}
            name="email"
            placeholder="Email"
            type="email"
            errors={errors.email}
          />
          <Input
            register={register}
            name="password"
            placeholder="Password"
            type="password"
            errors={errors.password}
          />
        </div>
        <Button variant="primary" fullWidth type="submit" className=" mt-40">
          {isSubmitting ? "Loading..." : "Register"}
        </Button>
      </form>
    </div>
  );
}
