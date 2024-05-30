import FormLogin from '../../components/FormLogin';
import { FormValidation } from '../../context/FormValidationContext';

export default function Login() {

    const handleSubmit = (event) => {
        event.preventDefault();
    }

    return (
        <FormValidation className="w-25 m-auto" handleSubmit={handleSubmit}>
            <FormLogin />
        </FormValidation>
    );
}