import { Field, Formik, Form } from "formik";

import s from "./LoginForm.module.css";
import { Link, useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import { loginThunk } from "../../redux/auth/operations";

function LoginForm() {
  const initialValue = {
    password: "",
    email: "",
  };

  const dispatch = useDispatch();
  const navigate = useNavigate();

  const handleSubmit = (values, options) => {
    console.log(values);
    dispatch(loginThunk(values))
      .unwrap()
      .then(() => navigate("/"));
    options.resetForm();
  };
  return (
    <div className="min-h-screen flex flex-col justify-center items-center">
      <Formik initialValues={initialValue} onSubmit={handleSubmit}>
        <Form className={s.container}>
          <h1 className={s.tittle}>Login</h1>
          <label className={s.inputBox}>
            <span>E-mail</span>
            <Field name="email" className={s.input} />
          </label>
          <label className={s.inputBox}>
            <span>Password</span>
            <Field name="password" type="password" className={s.input} />
          </label>
          <button type="submit" className={s.btn}>
            Login
          </button>
          <p className={s.paragraph}>
            Do you not have an account?
            <Link to="/register"> Let`s create one!</Link>
          </p>
        </Form>
      </Formik>
    </div>
  );
}

export default LoginForm;
