import { Link } from "react-router-dom";
import FormSection from "../FormSection";
import { useState } from "react";
import FieldError from "../FieldError";

export default function FormLogin() {

    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    const [error, setError] = useState({
        email: {
            showError: false,
            message: "Este campo precisa ser preenchido"
        },
        password: {
            showError: false,
            message: "Este campo precisa ser preenchido"
        }
    })

    const handleSubmit = (event) => {
        event.preventDefault();

        if(!email) {
            setError(valorAnterior => ({
                ...valorAnterior, 
                email: {message: 'Este campo precisa ser preenchido', showError: true}
            }));
        }

        if(!password) {
            setError(valorAnterior => ({
                ...valorAnterior, 
                password: {message: "Este campo precisa ser preenchido", showError: true}
            }));
        }

        if(password.length > 0 && password.length <= 3) {
            setError(valorAnterior => ({
                ...valorAnterior, 
                password: {message: "Este campo deve ter no minimo 4 caracteres", showError: true}
            }));
        }
    }
    return (
        <form className="w-25 m-auto" onSubmit={handleSubmit}>
            <FormSection title="Login">
                <div className="mb-3">
                    <label htmlFor="email" className="form-label">Email</label>
                    <input type="email" 
                        id="email" 
                        className="form-control"  
                        placeholder="name@example.com"
                        onChange={event => setEmail(event.target.value)}
                        onBlur={() => setError({...error, email: {...error.email, showError: false}})} />
                    <FieldError visible={error.email.showError}>
                        {error.email.message}
                    </FieldError>
                </div>
                <div className="mb-3">
                    <label htmlFor="password" className="form-label">Senha</label>
                    <input type="password" 
                        id="password"
                        className="form-control"  
                        placeholder="name@example.com"
                        onChange={event => setPassword(event.target.value)} 
                        onBlur={() => setError({...error, password: {...error.password, showError: false}})} />
                    <FieldError visible={error.password.showError}>
                        {error.password.message}
                    </FieldError>
                </div>
                <div>
                    <button className="btn btn-success w-100">Entrar</button>
                </div>
            </FormSection>
            <div className="text-center">
                <Link to="/">Esqueci minha senha</Link>
            </div>
        </form>
    )
}