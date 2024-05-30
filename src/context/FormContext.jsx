import { createContext, useContext, useEffect, useState } from "react";

export const AlertData = createContext({
    show: false,
    msg: "",
    status: 'info'
});

export const UiThemeContext = createContext({});

export function UiThemeProvider({children, uiStyleData}) {
    return (
        <UiThemeContext.Provider value={uiStyleData}>
            { children }
        </UiThemeContext.Provider>
    )
}

export const FormContext = createContext({
    onSubmit: () => {}
});

export const useForm = () => useContext(FormContext);

export function Form ({children}) {

    const errorCodes = {
        required: {
            msg: "Campo obrigatorio",
            isValid: function (value, active) {
                return active && (!Boolean(value) || value.length <= 0)
            }
        },
        minLength: {
            msg: 'Campo precisa ter no minimo :min: caracteres',
            isValid: function (value, min) {
                if(Boolean(value) && value.length < min) {
                    this.msg = this.msg.replace(':min:', min);
                    return false;
                }
                return true;
            }
        }
    }
    
    const [errors, setErrors] = useState({});
    const [formValues, setFormValues] = useState({})

    const handleSubmit = (event) => {

    }

    const handleErrors = (event, errorObj) => {
        const name = event.target.name;
        let msg = '';

        for(let code in errorObj) {
            
            let errorData = errorCodes[code];
            let inputErrorCode = errorObj[code];

            if(!errorData || !inputErrorCode) {
                continue;
            }

            if(!errorData.validate) {
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

    const handleChange = (name, value) => {
        setFormValues({
            ...formValues,
            [name]: value
        });

        if(errors[name]) {
            setErrors({
                ...errors,
                [name]: ''
            })
        }
    }

    return (
        <FormContext.Provider value={{handleErrors, handleChange, errors}}>
            <form onSubmit={handleSubmit}>
                { children }
            </form>
        </FormContext.Provider>
    )
}
