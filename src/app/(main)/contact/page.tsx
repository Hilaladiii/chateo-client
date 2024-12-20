import InputSearch from "@/commons/components/elements/InputSearch";
import ContactCard from "@/commons/components/fragments/ContactCard";

export default function ContactPage() {
  return (
    <div>
      <InputSearch className="my-4" fullWidth />
      <ContactCard />
    </div>
  );
}
