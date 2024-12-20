export default function BadgeCount({ count }: { count: number }) {
  return (
    <div className="rounded-full size-2 bg-brandBackground text-brandDark metadata3 p-2 flex items-center justify-center">
      {count}
    </div>
  );
}
