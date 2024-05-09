
import Alert from "../Alert";
import { AlertData } from "../../context/FormContext";

export default function Form({ children, submitHandle, alertState, className }) {
    return (
        <form onSubmit={submitHandle} className={className}>
            <AlertData.Provider value={alertState ?? {}}>
                <Alert />
                { children }
            </AlertData.Provider>
        </form>
    )
}