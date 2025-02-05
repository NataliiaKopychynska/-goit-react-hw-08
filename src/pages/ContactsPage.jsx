// import { useEffect } from "react";
// import { useDispatch, useSelector } from "react-redux";
import SearchBox from "../components/SearchBox/SearchBox";
import ContactList from "../components/ContactList/ContactList";
import { useDispatch, useSelector } from "react-redux";

import { useEffect } from "react";
import { fetchContactThunk } from "../redux/contactsOps";
import ContactForm from "../components/ContactForm/ContactForm";
import { selectIsError, selectIsLoading } from "../redux/contacts/contactsSice";

function ContactsPage() {
  const dispatch = useDispatch();
  const isLoading = useSelector(selectIsLoading);
  const isError = useSelector(selectIsError);

  useEffect(() => {
    dispatch(fetchContactThunk());
  }, [dispatch]);

  return (
    <div className="container">
      <h1 className="mainTitle">Phonebook</h1>

      <div className="contain-date">
        <div>
          <SearchBox />
          <ContactForm />
        </div>
        <ContactList />
      </div>
      {isError && <h2>Try again latter...</h2>}
      {isLoading && <h2>Loading...</h2>}
    </div>
  );
}

export default ContactsPage;
