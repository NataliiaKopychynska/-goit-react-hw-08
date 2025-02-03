import { useDispatch } from "react-redux";
// import { deleteContact } from "../../redux/contactsSice";
import { deleteContactsThunk, editContactThunk } from "../../redux/contactsOps";
import s from "./Contact.module.css";
import { FaUser, FaPhoneAlt } from "react-icons/fa";
import { selectContacts } from "../../redux/contactsSice";

export default function Contact({ contactName, contactNumber, id }) {
  const dispatch = useDispatch();

  // const handleDeleteContact = (id) => {
  //   // dirpath(deleteContact(id));
  // };

  return (
    <li className={s.containerContact}>
      <div className={s.contactInfo}>
        <div className={s.option}>
          <p className={s.icon}>
            <FaUser />
          </p>{" "}
          <p className={s.title}>{contactName}</p>
        </div>

        <div className={s.option}>
          <p className={s.icon}>
            <FaPhoneAlt />
          </p>{" "}
          <p className={s.title}>{contactNumber}</p>
        </div>
      </div>
      <div className={s.divBtn}>
        <button
          className={s.btnEdit}
          onClick={() =>
            dispatch(
              editContactThunk({
                id,
                name: prompt("Edit name", contactName),
                number: prompt("Edit number", contactNumber) ?? selectContacts,
              })
            )
          }
        >
          Edit
        </button>
        <button
          className={s.btn}
          onClick={() => dispatch(deleteContactsThunk(id))}
        >
          Delete
        </button>
      </div>
    </li>
  );
}
