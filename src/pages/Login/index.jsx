import FormLogin from '../../components/FormLogin';
import { FormValidation } from '../../context/FormValidationContext';

export default function Login() {
    return (
        <FormValidation className="w-25 m-auto">
            <FormLogin />
        </FormValidation>
    );
}