
import FormSection from "../../components/FormSection"
import FieldError from "../../components/FieldError"
import { useState } from "react";

export default function Register () {
    const [name, setName] = useState('');
    const [lastname, setLastname] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [confirmPassword, setConfirmPassword] = useState('');

    const initialError = {
        showError: false,
        message: "Este campo é obrigatorio"
    };

    const [error, setError] = useState({
        name: initialError,
        lastname: initialError,
        email: initialError,
        password: initialError,
        confirmPassword: initialError
    })

    const showErrors = () => {
        setError({
            name: { showError: false },
            lastname: { showError: false },
            email: { showError: false },
            password: { showError: false },
            confirmPassword: { showError: false }
        });

        if(!name) {
            setError(current => ({
                ...current, 
                name: {message: 'Este campo é obrigatorio', showError: true}
            }));
        }

        if(!lastname) {
            setError(current => ({
                ...current, 
                lastname: {message: 'Este campo é obrigatorio', showError: true}
            }));
        }
        
        if(name.length > 0 && name.length < 3) {
            setError(current => ({
                ...current, 
                name: {message: 'Este precisar ter no minimo 3 caracteres', showError: true}
            }));
        }

        if(lastname.length > 0 && lastname.length < 3) {
            setError(current => ({
                ...current, 
                lastname: {message: 'Este precisar ter no minimo 3 caracteres', showError: true}
            }));
        }

        if(!email) {
            setError(current => ({
                ...current, 
                email: {message: 'Este campo é obrigatorio', showError: true}
            }));
        }

        if(!password) {
            setError(current => ({
                ...current, 
                password: {message: "Este campo é obrigatorio", showError: true}
            }));
        }

        if(!confirmPassword) {
            setError(current => ({
                ...current, 
                confirmPassword: {message: "Este campo é obrigatorio", showError: true}
            }));
        }

        if(password !== confirmPassword) {
            setError(current => ({
                ...current, 
                confirmPassword: {message: "As senhas estão diferentes", showError: true}
            }));
        }
    }

    const handleSubmit = (event) => {
        event.preventDefault();
        showErrors();
    }
    
    return (
        <form className="w-25 m-auto" onSubmit={handleSubmit}>
            <FormSection title="Register" >
                <div className="mb-3">
                    <label htmlFor="user-name" className="form-label">Nome</label>
                    <input type="text" 
                        id="user-name" 
                        className="form-control"  
                        placeholder="Digite seu nome" 
                        onChange={event => setName(event.target.value)}
                        onBlur={showErrors} />
                    <FieldError visible={error.name.showError}>
                        {error.name.message}
                    </FieldError>
                </div>
                <div className="mb-3">
                    <label htmlFor="user-lastname" className="form-label">Sobrenome</label>
                    <input type="text" 
                        id="user-lastname" 
                        className="form-control"  
                        placeholder="Digite seu sobrenome" 
                        onChange={event => setLastname(event.target.value)}
                        onBlur={showErrors} />
                    <FieldError visible={error.lastname.showError}>
                        {error.lastname.message}
                    </FieldError>
                </div>
                <div className="mb-3">
                    <label htmlFor="user-email" className="form-label">Email</label>
                    <input type="email" 
                        id="user-email" 
                        className="form-control"  
                        placeholder="Digite seu email" 
                        onChange={event => setEmail(event.target.value)}
                        onBlur={showErrors} />
                    <FieldError visible={error.email.showError}>
                        {error.email.message}
                    </FieldError>
                </div>
                <div className="mb-3">
                    <label htmlFor="user-password" className="form-label">Senha</label>
                    <input type="password" 
                        id="user-password" 
                        className="form-control"  
                        placeholder="Digite sua senha" 
                        onChange={event => setPassword(event.target.value)}
                        onBlur={showErrors} />
                    <FieldError visible={error.password.showError}>
                        {error.password.message}
                    </FieldError>
                </div>
                <div className="mb-3">
                    <label htmlFor="user-confirm-password" className="form-label">Confirmar senha</label>
                    <input type="password" 
                        id="user-confirm-password" 
                        className="form-control"  
                        placeholder="Digite sua senha novamente" 
                        onChange={event => setConfirmPassword(event.target.value)}
                        onBlur={showErrors} />
                    <FieldError visible={error.confirmPassword.showError}>
                        {error.confirmPassword.message}
                    </FieldError>
                </div>
                <div>
                    <button type="submit" class="btn btn-primary">Criar Conta</button>
                </div>
            </FormSection>
            <div>
                <a href="/login">Ja tenho conta</a>
            </div>
        </form>
    )
}