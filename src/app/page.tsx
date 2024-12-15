import Image from "next/image";
import SpalashImage from "@/assets/svgs/splash.svg";
import Button from "@/components/elements/Button";
import Link from "next/link";

export default function Home() {
  return (
    <div className="w-full min-h-screen flex flex-col items-center justify-between px-6 py-5">
      <div className="flex flex-col items-center">
        <Image src={SpalashImage} alt="splash image" className="mt-12" />
        <h1 className="heading1 text-center mt-5">
          Connect easily with your family and friends over countries
        </h1>
      </div>
      <Link href="/login" className="w-full">
        <Button variant="primary" fullWidth>
          Start Messaging
        </Button>
      </Link>
    </div>
  );
}
