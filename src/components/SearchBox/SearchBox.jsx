import { useDispatch, useSelector } from "react-redux";
import s from "./SearchBox.module.css";
import { selectFilter, setFilter } from "../../redux/contactsSice";
// import { setFilter } from "../../redux/filterSlise";

export default function SearchBox() {
  const dispatch = useDispatch();
  const filter = useSelector(selectFilter);

  // const handleChange = (e) => {
  //   dispatch(setFilter(e.target.value));
  // };

  return (
    <div className={s.container}>
      <label className={s.inputBox} htmlFor="id-form">
        Find contacts by name
      </label>
      <input
        value={filter}
        onChange={(e) => dispatch(setFilter(e.target.value))}
        className={s.input}
        id="id-form"
      ></input>
    </div>
  );
}
