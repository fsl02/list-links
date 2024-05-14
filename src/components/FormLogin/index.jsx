import { Link } from "react-router-dom";
import FormSection from "../FormSection";

export default function FormLogin() {

    const handleSubmit = (event) => {
        event.preventDefault();
    }
    return (
        <form className="w-25 m-auto" onSubmit={handleSubmit}>
            <FormSection title="Login">
                <div class="mb-3">
                    <label for="email" class="form-label">Email</label>
                    <input type="email" className="form-control" id="email" placeholder="name@example.com" />
                </div>
                <div class="mb-3">
                    <label for="password" class="form-label">Senha</label>
                    <input type="password" className="form-control" id="password" placeholder="name@example.com" />
                </div>
                <div>
                    <button class="btn btn-success w-100">Entrar</button>
                </div>
            </FormSection>
            <div className="text-center">
                <Link to="/">Esqueci minha senha</Link>
            </div>
        </form>
    )
}