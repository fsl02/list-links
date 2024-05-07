
import Alert from "../Alert";
import { AlertData } from "../../context/FormContext";

export default function Form({ children, submitHandle, alertState }) {
    return (
        <form onSubmit={submitHandle}>
            <AlertData.Provider value={alertState ?? {}}>
                <Alert />
                { children }
            </AlertData.Provider>
        </form>
    )
}