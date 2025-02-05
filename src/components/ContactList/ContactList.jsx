import { useSelector } from "react-redux";
import { selectFilteredContacts } from "../../redux/contacts/contactsSice.js";
import Contact from "../Contact/Contact.jsx";
import s from "./ContactList.module.css";
// import { deleteContact } from "../../redux/contactsSice.js";

export default function ContactList() {
  // const contacts = useSelector(selectContacts);
  // const filters = useSelector((state) => state.filters.filters || "");

  const filteredContacts = useSelector(selectFilteredContacts);

  return (
    <ul className={s.containerList}>
      {filteredContacts.map((contact) => {
        return (
          <Contact
            contactName={contact.name}
            contactNumber={contact.number}
            //   contactInfo={contact}
            key={contact.id}
            id={contact.id}
          />
        );
      })}
    </ul>
  );
}
