"use client";

import InputSearch from "@/commons/components/elements/InputSearch";
import AddContactCard from "@/commons/components/fragments/AddContactCard";
import Modal from "@/commons/components/layouts/Modal";
import { IContact } from "@/commons/types/contact";
import {
  findContactUserService,
  saveUserContactService,
} from "@/services/contact";
import { useRouter } from "next/navigation";
import { useEffect, useState } from "react";
import toast from "react-hot-toast";

export default function AddContact() {
  const router = useRouter();
  const [contact, setContacts] = useState<IContact>();
  const [searchId, setSearchId] = useState<string>("");
  useEffect(() => {
    const fetchData = async () => {
      const contact = await findContactUserService(searchId);
      setContacts(contact.data);
    };
    fetchData();
  }, [searchId, router]);

  const handleAddToContact = async (userId: string) => {
    const res = await saveUserContactService(userId);
    if (res.statusCode == 200) {
      router.back();
      toast.success(res.message);
    } else {
      toast.error(res.message);
    }
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
