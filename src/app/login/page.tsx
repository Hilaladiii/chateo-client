"use client";

import Button from "@/commons/components/elements/Button";
import Input from "@/commons/components/elements/Input";
import { loginSchema, TLogin } from "@/commons/validator/loginValidator";
import { zodResolver } from "@hookform/resolvers/zod";
import { SubmitHandler, useForm } from "react-hook-form";
import Image from "next/image";
import Logo from "@/assets/svgs/logo.svg";
import { loginService } from "@/commons/services/user";
import toast from "react-hot-toast";
import { useRouter } from "next/navigation";

export default function LoginPage() {
  const router = useRouter();
  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
  } = useForm<TLogin>({ resolver: zodResolver(loginSchema) });

  const onSubmit: SubmitHandler<TLogin> = async (data) => {
    const res = await loginService(data);
    if (res.statusCode == 200) {
      router.push("/chat");
      toast.success(res.message);
    } else {
      toast.error(res.message);
    }
  };

  return (
    <div className="w-full flex flex-col items-center px-6 pt-5">
      <div className="flex flex-col items-center mt-10">
        <Image src={Logo} alt="logo" />
        <h1 className="heading2 text-center text-active mt-4">
          Welcome back to Chateo
        </h1>
        <p className="body2 text-active">
          Please fill all the data to login your account
        </p>
      </div>
      <form
        className="mt-12 flex flex-col w-full"
        onSubmit={handleSubmit(onSubmit)}
      >
        <div className="flex flex-col  gap-4">
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
        <Button variant="primary" fullWidth type="submit" className="mt-52">
          {isSubmitting ? "Loading..." : "Login"}
        </Button>
      </form>
    </div>
  );
}
