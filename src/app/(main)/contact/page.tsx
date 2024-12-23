"use client";

import { useContact } from "@/commons/hooks/contact/useContact";
import ListContact from "./components/ListContact";

export default function ContactPage() {
  const { data, isLoading } = useContact();
  const contact = isLoading ? [] : data.data;
  return (
    <div>
      <ListContact contacts={contact} isLoading={isLoading} />
    </div>
  );
}
