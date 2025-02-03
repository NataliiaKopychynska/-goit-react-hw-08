import s from "./ContactList.module.css";
import Contact from "../Contact/Contact.jsx";
import { useSelector } from "react-redux";
import { selectFilteredContacts } from "../../redux/contactsSice.js";
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
