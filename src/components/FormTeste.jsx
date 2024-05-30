import { useEffect } from "react";
import { useForm } from "../context/FormValidationContext";

export default function FormTeste () {
    let {
        handleErrors,
        errors,
        handleChange,
        formValues,
        setFormValues
    } = useForm();

  return (
    <>
        <label htmlFor="">Teste</label>
        <br />
        <input 
            type="texte" 
            name="input-teste"
            value={formValues['input-teste'] ?? ''}
            onChange={(event) => handleChange(event)}
            onBlur={(event) => handleErrors(event, {required: true, minLength: 3})}/>
        <div>
            { errors && errors['input-teste'] }
        </div>
        <br />
        <button>Enviar</button>
    </>
  )
}