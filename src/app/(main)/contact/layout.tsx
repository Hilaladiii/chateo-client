import NavLayout from "@/commons/components/layouts/NavLayout";
import Image from "next/image";
import addIcon from "@/assets/svgs/add.svg";
import Link from "next/link";

export default function Layout({ children }: { children: React.ReactNode }) {
  return (
    <div>
      <NavLayout prefixTitle="Contact">
        <Link href="/add-contact">
          <Image src={addIcon} sizes="200" alt="new contact" />
        </Link>
      </NavLayout>
      <div className="w-full px-6">{children}</div>
    </div>
  );
}
