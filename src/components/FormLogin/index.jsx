import { Link } from "react-router-dom";
import FormSection from "../FormSection";
import { useState } from "react";
import FieldError from "../FieldError";
import { useForm } from '../../context/FormValidationContext'

export default function FormLogin() {
    let {
        handleErrors, 
        handleChange, 
        errors, 
        formValues
    } = useForm();

    return (
        <>
            <FormSection title="Login">
                <div className="mb-3">
                    <label htmlFor="email" className="form-label">Email</label>
                    <input type="email" 
                        id="email" 
                        name="user-email"
                        className="form-control"  
                        placeholder="name@example.com"
                        onChange={event => handleChange(event)}
                        onBlur={event => handleErrors(event, {required: true, validEmail: true})} />
                    <FieldError visible={errors['user-email'] ?? false}>
                        {errors['user-email'] ?? ''}
                    </FieldError>
                </div>
                <div className="mb-3">
                    <label htmlFor="password" className="form-label">Senha</label>
                    <input type="password" 
                        id="password"
                        name="user-password"
                        className="form-control"  
                        placeholder="name@example.com"
                        onChange={event => handleChange(event)}
                        onBlur={event => handleErrors(event, {required: true, minLength: 6, passwordMatch: ''})} />
                    <FieldError visible={errors['user-password']}>
                        {errors['user-password']}
                    </FieldError>
                </div>
                <div>
                    <button className="btn btn-success w-100">Entrar</button>
                </div>
            </FormSection>
            <div className="text-center">
                <Link to="/">Esqueci minha senha</Link>
            </div>
        </>
    )
}