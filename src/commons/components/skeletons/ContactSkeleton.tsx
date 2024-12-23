export default function ContactSkeleton() {
  return (
    <div className="flex flex-row gap-3">
      <div className="size-12 rounded-full animate-pulse bg-disabled/50" />
      <div className="flex flex-col gap-4">
        <div className="w-20 h-2 rounded-md animate-pulse bg-disabled/50" />
        <div className="w-32 h-2 rounded-md animate-pulse bg-disabled/50" />
      </div>
    </div>
  );
}