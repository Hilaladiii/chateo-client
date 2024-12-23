"use client";

import InputSearch from "@/commons/components/elements/InputSearch";
import AddContactCard from "@/commons/components/fragments/AddContactCard";
import Modal from "@/commons/components/layouts/Modal";
import { IContact } from "@/commons/types/contact";

import { findContactUserService } from "@/commons/services/contact";
import { useEffect, useState } from "react";
import { useAddContact } from "@/commons/hooks/contact/useAddContact";

export default function AddContact() {
  const [contact, setContacts] = useState<IContact>();
  const [searchId, setSearchId] = useState<string>("");
  const { mutate } = useAddContact();
  useEffect(() => {
    const fetchData = async () => {
      const contact = await findContactUserService(searchId);
      setContacts(contact.data);
    };
    if (searchId.length == 24) {
      fetchData();
    }
  }, [searchId]);

  const handleAddToContact = async (userId: string) => {
    mutate({ id: userId });
  };
  return (
    <Modal>
      <div className="w-72">
        <InputSearch
          onChange={(e) => setSearchId(e.target.value)}
          placeholder="Search ID User"
          fullWidth
        />
        <div className="mt-5">
          {contact ? (
            <AddContactCard
              bio={contact.bio || "No bio available"}
              imageUrl={contact.image || ""}
              username={contact.username || "Unknown"}
              onClick={() => handleAddToContact(contact.id)}
            />
          ) : (
            <p className="mt-5 text-active metadata1 text-center">
              No contact found
            </p>
          )}
        </div>
      </div>
    </Modal>
  );
}
