import Avatar from "../elements/Avatar";

interface IContactCard {
  imageUrl: string;
  username: string;
  bio: string;
  onClick: () => void;
}
export default function ContactCard({
  username,
  imageUrl,
  bio,
  onClick,
}: IContactCard) {
  return (
    <div className="flex flex-row gap-3 cursor-pointer" onClick={onClick}>
      <Avatar imageUrl={imageUrl} />
      <div className="flex flex-col gap-1">
        <h1 className="text-active body1">{username}</h1>
        <p className="text-disabled metadata1">{bio}</p>
      </div>
    </div>
  );
}
