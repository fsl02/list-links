
import Alert from "../Alert";

export default function Form({ children, submitHandle, showAlert, alertMsg, alertStatus }) {
    return (
        <form onSubmit={submitHandle}>
            <Alert showAlertState={showAlert} status={ alertStatus }>
                { alertMsg }
            </Alert>
            { children }
        </form>
    )
}