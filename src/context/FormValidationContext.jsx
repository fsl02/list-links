import { createContext, useContext, useState } from "react";

export const FormContext = createContext({
    handleErrors: () => {}, 
    handleChange: () => {}, 
    errors: {}, 
    formValues: {},
    handleSubmit: {execute: () => {}},
    setHandleSubmit: () => {}
});

export const useForm = () => useContext(FormContext);

export function FormValidation ({children, className}) {
    const validateEvent = (event, functionName) => {
        let name = event.target?.name;
        let value = event.target?.value;

        if(!name || typeof value === 'undefined') {
            throw new Error(`${functionName}() esperava receber um objeto SyntheticBaseEvent como argumento mas recebeu: ${event}`)
        }
    } 

    const errorCodes = {    
        required: {
            msg: "Campo obrigatorio",
            isValid: function (inputValue, isRequired) {
                return !(isRequired && (!Boolean(inputValue) || inputValue.length <= 0));
            }
        },
        minLength: {
            msg: 'Campo precisa ter no minimo :min: caracteres',
            isValid: function (inputValue, min) {
                if(Boolean(inputValue) && inputValue.length < min) {
                    this.msg = this.msg.replace(':min:', min);
                    return false;
                }
                return true;
            }
        }
    }
    
    const [errors, setErrors] = useState({});
    const [formValues, setFormValues] = useState({});
    const [handleSubmit, setHandleSubmit] = useState({
        execute: () => {}
    });

    const handleErrors = (event, errorObj) => {
        validateEvent(event, 'handleErrors')

        const name = event.target.name;
        let msg = '';

        for(let code in errorObj) {
            
            let errorData = errorCodes[code];
            let inputErrorCode = errorObj[code];

            
            if(!errorData || !inputErrorCode) {
                continue;
            }
            
            if(!errorData.isValid) {
                msg = errorData.msg;
            }
            
            if(errorData.isValid && !errorData.isValid(formValues[name], inputErrorCode)) {
                msg = errorData.msg;
            }
        }

        setErrors({
            ...errors,
            [name]: msg
        })

    }

    const handleChange = (event) => {
        validateEvent(event, 'handleChange')
        
        let name = event.target.name; 
        
        setFormValues({
            ...formValues,
            [name]: event.target?.value
        });

        if(errors[name]) {
            setErrors({
                ...errors,
                [name]: ''
            })
        }
    }

    return (
        <FormContext.Provider value={{
                handleErrors, 
                handleChange, 
                errors, 
                formValues, 
                handleSubmit, 
                setHandleSubmit
            }}>
            <form className={className} onSubmit={handleSubmit.execute}>
                { children }
            </form>
        </FormContext.Provider>
    )
}
