"use client";

import InputSearch from "@/commons/components/elements/InputSearch";
import ContactCard from "@/commons/components/fragments/ContactCard";
import ContactSkeleton from "@/commons/components/skeletons/ContactSkeleton";
import { IContact } from "@/commons/types/contact";
import { useCallback, useState } from "react";

export default function ListContact({
  contacts,
  isLoading,
}: {
  contacts: IContact[];
  isLoading: boolean;
}) {
  const [searchTerm, setSearchTerm] = useState("");
  const filteredContact = contacts.filter((contact) =>
    contact.username.toLowerCase().includes(searchTerm.toLowerCase())
  );
  const handleConversation = useCallback((id: string) => {}, [contacts]);
  return (
    <div>
      <InputSearch
        name="search"
        onChange={(e) => setSearchTerm(e.target.value)}
        className="my-4"
        fullWidth
      />
      <div className="flex flex-col gap-4">
        {isLoading
          ? [...new Array(7)].map((_, index) => <ContactSkeleton key={index} />)
          : filteredContact.map((contact: IContact) => (
              <ContactCard
                onClick={() => handleConversation(contact.id)}
                key={contact.id}
                username={contact.username}
                imageUrl={contact.image}
                bio={contact.bio}
              />
            ))}
      </div>
    </div>
  );
}
