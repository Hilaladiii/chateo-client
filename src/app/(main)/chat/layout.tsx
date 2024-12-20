import NavLayout from "@/commons/components/layouts/NavLayout";
import NewMessageIcon from "@/assets/svgs/new-message.svg";
import MenuIcon from "@/assets/svgs/menu.svg";
import Image from "next/image";

export default function Layout({ children }: { children: React.ReactNode }) {
  return (
    <div>
      <NavLayout prefixTitle="Chat">
        <div className="flex items-center gap-2">
          <button>
            <Image src={NewMessageIcon} sizes="200" alt="new message" />
          </button>
          <button>
            <Image src={MenuIcon} sizes="200" alt="menu" />
          </button>
        </div>
      </NavLayout>
      <div className="w-full px-6">{children}</div>
    </div>
  );
}
