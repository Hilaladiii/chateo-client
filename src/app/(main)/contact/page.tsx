"use client";

import { useContact } from "@/commons/hooks/contact/useContact";
import ListContact from "./components/ListContact";

export default function ContactPage() {
  const { data, isLoading } = useContact();
  if (isLoading) {
    return <div>loading...</div>;
  }
  const contact = data.data;
  return (
    <div>
      <ListContact contacts={contact} />
    </div>
  );
}
