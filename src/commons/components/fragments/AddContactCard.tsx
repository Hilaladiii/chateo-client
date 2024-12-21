import Image from "next/image";
import Avatar from "../elements/Avatar";
import AddIcon from "@/assets/svgs/add.svg";

interface IAddContact {
  imageUrl: string;
  username: string;
  bio: string;
  onClick: () => void;
}
export default function AddContactCard({
  username,
  imageUrl,
  bio,
  onClick,
}: IAddContact) {
  return (
    <div className="w-full flex flex-row gap-3">
      <Avatar imageUrl={imageUrl} />
      <div className="flex flex-col gap-1">
        <h1 className="text-active body1">{username}</h1>
        <p className="text-disabled metadata1">{bio}</p>
      </div>
      <div className="flex flex-grow items-center justify-end ">
        <button onClick={onClick}>
          <Image src={AddIcon} alt="add contact" />
        </button>
      </div>
    </div>
  );
}
