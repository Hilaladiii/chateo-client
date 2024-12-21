"use client";
import { useRouter } from "next/navigation";

export default function Modal({ children }: { children: React.ReactNode }) {
  const router = useRouter();
  return (
    <div
      className={`fixed inset-0 z-50 flex items-start justify-center overflow-y-auto bg-black bg-opacity-40 transition-opacity duration-300`}
      onClick={() => router.back()}
    >
      <div
        className={`mt-24 flex transform flex-col items-center justify-center rounded-md bg-white p-8 transition-transform duration-300`}
        onClick={(e) => e.stopPropagation()}
      >
        {children}
      </div>
    </div>
  );
}
