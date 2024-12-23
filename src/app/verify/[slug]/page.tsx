"use client";

import Button from "@/commons/components/elements/Button";
import { useVerify } from "@/commons/hooks/user/useVerify";
import { emailAtConverter } from "@/commons/utils/converter";
import { use, useEffect, useState } from "react";
import OTPInput from "react-otp-input";

type Params = Promise<{ slug: string }>;

export default function VerifyPage(props: { params: Params }) {
  const params = use(props.params);
  const [otp, setOtp] = useState("");
  const { mutate } = useVerify();
  useEffect(() => {
    if (otp.length >= 4) {
      const handleVerication = () => {
        mutate({
          email: emailAtConverter(params.slug),
          code: Number(otp),
        });
      };
      handleVerication();
    }
  }, [otp, params.slug]);
  return (
    <div className="w-full min-h-screen flex flex-col justify-center items-center px-6">
      <div>
        <h1 className="heading2 text-center text-active">Enter Code</h1>
        <p className="body2 text-active text-center">
          We have sent a verification code to your email. Please check your
          inbox or spam folder.
        </p>
      </div>
      <div className="mt-12">
        <OTPInput
          value={otp}
          onChange={setOtp}
          numInputs={4}
          inputType="number"
          renderSeparator={<span className="px-2"> - </span>}
          inputStyle={{
            fontFamily: "var(--font-mulish)",
            background: "#F7F7FC",
            fontWeight: "bold",
            color: "#0F1828",
            fontSize: "40px",
            borderRadius: "12px",
            paddingLeft: "12px",
            width: "80px",
          }}
          renderInput={(props) => <input {...props}></input>}
        />
        <Button variant="ghost" className="mt-20" fullWidth>
          Resend Code
        </Button>
      </div>
    </div>
  );
}
