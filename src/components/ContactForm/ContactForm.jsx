import { Formik, Form, Field } from "formik";
import s from "./ContactForm.module.css";

import { ErrorMessage } from "formik";
import * as Yup from "yup";
import { addContactThunk } from "../../redux/contactsOps";
import { useDispatch } from "react-redux";
// import { addContact } from "../../redux/contactsSice";

export default function ContactForm() {
  const dispatch = useDispatch();

  const yupValidation = Yup.object().shape({
    nameContact: Yup.string()
      .min(3, "To Short!")
      .max(50, "To Long!")
      .required("Name is required"),
    numberContact: Yup.string()
      .min(10, "Is not a phone!")
      .max(10, "Is not a phone!")
      .required("Number is required"),
  });

  const handleAddContact = (values, actions) => {
    const newContact = {
      // id: Date.now().toString(),
      name: values.nameContact,
      number: values.numberContact,
    };

    dispatch(addContactThunk(newContact));
    actions.resetForm();
  };

  return (
    <Formik
      initialValues={{
        nameContact: "",
        numberContact: "",
      }}
      onSubmit={handleAddContact}
      validationSchema={yupValidation}
    >
      <Form className={s.form}>
        <div className={s.containerInput}>
          <label className={s.label} htmlFor="nameContact">
            Name
          </label>
          <Field
            className={s.input}
            type="text"
            name="nameContact"
            id="nameContact"
          ></Field>
          <ErrorMessage
            className={s.error}
            name="nameContact"
            component="span"
          />
        </div>

        <div className={s.containerInput}>
          <label className={s.label} htmlFor="telContact">
            Number
          </label>
          <Field
            className={s.input}
            type="text"
            name="numberContact"
            id="telContact"
            pattern="\d*"
          ></Field>
          <ErrorMessage
            className={s.error}
            name="numberContact"
            component="span"
          />
        </div>
        <button type="submit" className={s.btn}>
          Add contact
        </button>
      </Form>
    </Formik>
  );
}
