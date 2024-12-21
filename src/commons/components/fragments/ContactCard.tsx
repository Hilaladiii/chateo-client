import Avatar from "../elements/Avatar";

interface IContactCard {
  imageUrl: string;
  username: string;
  bio: string;
}
export default function ContactCard({ username, imageUrl, bio }: IContactCard) {
  return (
    <div className="flex flex-row gap-3 ">
      <Avatar imageUrl={imageUrl} />
      <div className="flex flex-col gap-1">
        <h1 className="text-active body1">{username}</h1>
        <p className="text-disabled metadata1">{bio}</p>
      </div>
    </div>
  );
}
