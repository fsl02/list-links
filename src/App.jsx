
import FormTeste from "./components/FormTeste";
import { Form, useForm } from "./context/FormContext";
import { FormValidation } from "./context/FormValidationContext";

export default function App() {
  return (
    <FormValidation onSubmit={function() {}}>
     <FormTeste />
    </FormValidation>
  )
}