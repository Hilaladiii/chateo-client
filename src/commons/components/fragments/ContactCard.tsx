import Avatar from "../elements/Avatar";

export default function ContactCard() {
  return (
    <div className="flex flex-row gap-3 ">
      <Avatar />
      <div className="flex flex-col gap-1">
        <h1 className="text-active body1">Hilal</h1>
        <p className="text-disabled metadata1">
          Lorem ipsum dolor, sit amet consectetur adipisicing elit. Obcaecati
          delectus nulla quas, laboriosam eum soluta.
        </p>
      </div>
    </div>
  );
}
