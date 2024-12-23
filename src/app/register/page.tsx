"use client";

import Button from "@/commons/components/elements/Button";
import Input from "@/commons/components/elements/Input";
import {
  registerSchema,
  TRegister,
} from "@/commons/validator/registerValidator";
import { zodResolver } from "@hookform/resolvers/zod";
import { SubmitHandler, useForm } from "react-hook-form";
import Image from "next/image";
import Logo from "@/assets/svgs/logo.svg";
import { registerService } from "@/commons/services/user";
import toast from "react-hot-toast";
import { useRouter } from "next/navigation";

export default function RegisterPage() {
  const router = useRouter();
  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
    watch,
  } = useForm<TRegister>({ resolver: zodResolver(registerSchema) });

  const email = watch("email");

  const onSubmit: SubmitHandler<TRegister> = async (data) => {
    const res = await registerService(data);
    if (res.statusCode == 400) {
      toast.error(res.message);
    } else {
      toast.success(res.message, {
        duration: 2000,
      });
      router.push(`/verify/${email}`);
    }
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
