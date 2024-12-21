import Image from "next/image";
import PlaceholderImage from "@/assets/images/placeholder.jpg";

export default function Avatar({ imageUrl }: { imageUrl: string }) {
  return (
    <Image
      src={imageUrl || PlaceholderImage.src}
      alt="avatar"
      width={48}
      height={48}
      className="size-12 rounded-full object-cover object-center flex-none"
    />
  );
}
