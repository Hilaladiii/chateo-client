"use client";

import InputSearch from "@/commons/components/elements/InputSearch";
import ContactCard from "@/commons/components/fragments/ContactCard";
import { IContact } from "@/commons/types/contact";
import { useState } from "react";

export default function ListContact({ contacts }: { contacts: IContact[] }) {
  const [filteredContact, setFilteredContact] = useState(contacts);
  const handleFilteredContact = (search: string) => {
    setFilteredContact(
      contacts.filter((contact) => contact.username.includes(search))
    );
  };
  return (
    <div>
      <InputSearch
        name="search"
        onChange={(e) => handleFilteredContact(e.target.value)}
        className="my-4"
        fullWidth
      />
      {filteredContact.map((contact: IContact) => (
        <ContactCard
          key={contact.id}
          username={contact.username}
          imageUrl={contact.image}
          bio={contact.bio}
        />
      ))}
    </div>
  );
}
