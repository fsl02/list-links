
import FormSection from "../../components/FormSection"

export default function Register () {
    return (
        <form>
            <FormSection title="Register">
                <div className="mb-3">
                    <label htmlFor="user-name" className="form-label">Nome</label>
                    <input type="text" 
                        id="user-name" 
                        className="form-control"  
                        placeholder="Digite seu nome" />
                </div>
                <div className="mb-3">
                    <label htmlFor="user-lastname" className="form-label">Sobrenome</label>
                    <input type="text" 
                        id="user-lastname" 
                        className="form-control"  
                        placeholder="Digite seu sobrenome" />
                </div>
                <div className="mb-3">
                    <label htmlFor="user-email" className="form-label">Email</label>
                    <input type="email" 
                        id="user-email" 
                        className="form-control"  
                        placeholder="Digite seu email" />
                </div>
                <div className="mb-3">
                    <label htmlFor="user-password" className="form-label">Senha</label>
                    <input type="password" 
                        id="user-password" 
                        className="form-control"  
                        placeholder="Digite seu senha" />
                </div>
                <div className="mb-3">
                    <label htmlFor="user-confirm-password" className="form-label">Confirmar senha</label>
                    <input type="password" 
                        id="user-confirm-password" 
                        className="form-control"  
                        placeholder="Digite sua senha novamente" />
                </div>
            </FormSection>
        </form>
    )
}