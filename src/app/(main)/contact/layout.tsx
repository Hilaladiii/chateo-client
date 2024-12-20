import NavLayout from "@/commons/components/layouts/NavLayout";
import Image from "next/image";
import addIcon from "@/assets/svgs/add.svg";

export default function Layout({ children }: { children: React.ReactNode }) {
  return (
    <div>
      <NavLayout prefixTitle="Contact">
        <div className="flex items-center gap-2">
          <button>
            <Image src={addIcon} sizes="200" alt="new message" />
          </button>
        </div>
      </NavLayout>
      <div className="w-full px-6">{children}</div>
    </div>
  );
}
