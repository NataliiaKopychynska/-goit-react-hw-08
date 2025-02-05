import { Toaster } from "react-hot-toast";
import RegistrationForm from "../components/RegistrationForm/RegistrationForm";

function RegistrationPage() {
  return (
    <>
      <RegistrationForm />
      <Toaster />
    </>
  );
}

export default RegistrationPage;
