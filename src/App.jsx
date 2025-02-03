import "./App.css";
import ContactList from "./components/ContactList/ContactList";
import ContactForm from "./components/ContactForm/ContactForm";
import SearchBox from "./components/SearchBox/SearchBox";
import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";
import { fetchContactThunk } from "./redux/contactsOps";
import { selectIsError, selectIsLoading } from "./redux/contactsSice";

function App() {
  const dispatch = useDispatch();
  const isLoading = useSelector(selectIsLoading);
  const isError = useSelector(selectIsError);

  useEffect(() => {
    dispatch(fetchContactThunk());
  }, [dispatch]);

  return (
    <div>
      <h1>Phonebook</h1>

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

export default App;
