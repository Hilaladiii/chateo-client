import Avatar from "../elements/Avatar";
import BadgeCount from "../elements/BadgeCount";

export default function ChatCard() {
  return (
    <div className="w-full flex flex-row gap-3">
      <Avatar />
      <div className="flex flex-col">
        <div className="flex justify-between items-center">
          <h1 className="body1 text-active">Abdullah Hilal</h1>
          <dt className="metadata2 text-neutralWeak">Today</dt>
        </div>
        <div className="flex justify-between items-center mt-1">
          <p className="metadata1 text-disabled w-2/3 line-clamp-1">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Vel,
            aperiam!
          </p>
          <BadgeCount count={1} />
        </div>
      </div>
    </div>
  );
}
