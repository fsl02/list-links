
import FormSection from "../../components/FormSection"
import FieldError from "../../components/FieldError"
import { useEffect, useState } from "react";
import { useForm } from "../../context/FormValidationContext";

export default function Register () {
    let {
        handleErrors, 
        handleChange, 
        errors, 
        formValues,
        setHandleSubmit
    } = useForm();

    useEffect(() => {
        setHandleSubmit({
            execute: (event) => {
                event.preventDefault();
                alert('deu bom');
            }
        })
    }, []);

    return (
        <>
            <FormSection title="Register" >
                <div className="mb-3">
                    <label htmlFor="user-name" className="form-label">Nome</label>
                    <input type="text" 
                        id="user-name"
                        name="user-name"
                        className="form-control"  
                        placeholder="Digite seu nome" 
                        onChange={event => handleChange(event)}
                        onBlur={event => handleErrors(event, {required: true, minLength: 3})} />
                    <FieldError visible={errors['user-name'] ?? false}>
                        {errors['user-name'] ?? ''}
                    </FieldError>
                </div>
                <div className="mb-3">
                    <label htmlFor="user-lastname" className="form-label">Sobrenome</label>
                    <input type="text" 
                        id="user-lastname" 
                        name="user-lastname" 
                        className="form-control"  
                        placeholder="Digite seu sobrenome" 
                        onChange={event => handleChange(event)}
                        onBlur={event => handleErrors(event, {required: true, minLength: 3})} />
                    <FieldError visible={errors['user-lastname'] ?? false}>
                        {errors['user-lastname'] ?? ''}
                    </FieldError>
                </div>
                <div className="mb-3">
                    <label htmlFor="user-email" className="form-label">Email</label>
                    <input type="email" 
                        id="user-email" 
                        name="user-email" 
                        className="form-control"  
                        placeholder="Digite seu email" 
                        onChange={event => handleChange(event)}
                        onBlur={event => handleErrors(event, {required: true, validEmail: true})} />
                     <FieldError visible={errors['user-email'] ?? false}>
                        {errors['user-email'] ?? ''}
                    </FieldError>
                </div>
                <div className="mb-3">
                    <label htmlFor="user-password" className="form-label">Senha</label>
                    <input type="password" 
                        id="user-password" 
                        name="user-password" 
                        className="form-control"  
                        placeholder="Digite sua senha" 
                        onChange={event => handleChange(event)}
                        onBlur={event => handleErrors(event, {required: true, minLength: 6})} />
                    <FieldError visible={errors['user-password'] ?? false}>
                        {errors['user-password'] ?? ''}
                    </FieldError>
                </div>
                <div className="mb-3">
                    <label htmlFor="user-password" className="form-label">Senha</label>
                    <input type="password" 
                        id="user-confirm-password" 
                        name="user-confirm-password" 
                        className="form-control"  
                        placeholder="Digite a senha novamente" 
                        onChange={event => handleChange(event)}
                        onBlur={event => handleErrors(event, {required: true, minLength: 6, equal: 'user-password'})} />
                    <FieldError visible={errors['user-confirm-password'] ?? false}>
                        {errors['user-confirm-password'] ?? ''}
                    </FieldError>
                </div>
                <div>
                    <button type="submit" className="btn btn-primary">Criar Conta</button>
                </div>
            </FormSection>
            <div>
                <a href="/login">Ja tenho conta</a>
            </div>
        </>
    )
}