"use client";

import Link from "next/link";
import MessageIcon from "@/assets/svgs/message.svg";
import ContactIcon from "@/assets/svgs/contact.svg";
import MenuDot from "@/assets/svgs/menu-dot.svg";
import Image from "next/image";
import { cn } from "@/commons/utils/cn";
import { usePathname } from "next/navigation";

const navigations = [
  {
    icon: ContactIcon,
    href: "/contact",
  },
  {
    icon: MessageIcon,
    href: "/chat",
  },
  {
    icon: MenuDot,
    href: "/setting",
  },
];

export default function BottomNavigator() {
  const pathname = usePathname();
  return (
    <div className="w-full flex flex-row justify-between px-6 py-3 items-end">
      {navigations.map((navigation, index) => (
        <Link
          href={navigation.href}
          key={index}
          className={cn(
            " w-20 flex justify-center pb-3",
            pathname.includes(navigation.href) && "border-b-4 border-black"
          )}
        >
          <Image src={navigation.icon} alt="navigation" />
        </Link>
      ))}
    </div>
  );
}
