import { getUserContactService } from "@/services/contact";
import { use } from "react";
import ListContact from "./components/ListContact";

export default function ContactPage() {
  const data = use(getUserContactService());
  const contacts = data.data;
  return (
    <div>
      <ListContact contacts={contacts} />
    </div>
  );
}
