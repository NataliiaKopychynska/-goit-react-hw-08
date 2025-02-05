import { Formik, Form, Field } from "formik";
import * as Yup from "yup";
import s from "./RegistrationForm.module.css";
import { Link, NavLink, useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import { registerThunk } from "../../redux/auth/operations";
import logo from "../../img/logoBoook.png";

const validationSchema = Yup.object({
  name: Yup.string()
    .min(3, "Too short...")
    .max(20, "Too long...")
    .required("Required"),
  email: Yup.string().email("Not correctly email...").required("required"),
  password: Yup.string().min(6, "too short").required("required"),
});

function RegistrationForm() {
  const initialValue = {
    name: "",
    password: "",
    email: "",
  };

  const dispatch = useDispatch();
  const navigate = useNavigate();

  const handleSubmit = (values, options) => {
    console.log(values);
    dispatch(registerThunk(values))
      .unwrap()
      .then(() => navigate("/"));
    options.resetForm();
  };
  return (
    <div className="min-h-screen flex flex-col justify-center items-center">
      <NavLink className={s.imgContainer} to="/">
        <img className={s.imgLogo} src={logo} alt="Logo" />
        Home
      </NavLink>
      <Formik
        initialValues={initialValue}
        onSubmit={handleSubmit}
        validationSchema={validationSchema}
      >
        <Form className={s.container}>
          <h1 className={s.tittle}>Register</h1>
          <label className={s.inputBox}>
            <span>Name</span>
            <Field name="name" className={s.input} />
          </label>
          <label className={s.inputBox}>
            <span>E-mail</span>
            <Field name="email" className={s.input} />
          </label>
          <label className={s.inputBox}>
            <span>Password</span>
            <Field name="password" type="password" className={s.input} />
          </label>
          <button type="submit" className={s.btn}>
            Register
          </button>
          <p className={s.paragraph}>
            Do you already have an account? <Link to="/login"> Login!</Link>
          </p>
        </Form>
      </Formik>
    </div>
  );
}

export default RegistrationForm;
