import Image from "next/image";
import testImage from "@/assets/images/me.jpeg";

export default function Avatar() {
  return (
    <Image
      src={testImage.src}
      alt="avatar"
      width={48}
      height={48}
      className="size-12 rounded-full object-cover object-center flex-none"
    />
  );
}
