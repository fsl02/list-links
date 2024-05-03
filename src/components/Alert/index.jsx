import { useContext } from "react"
import { AlertData } from "../../context/FormContext"

export default function Alert() {
    const alertData = useContext(AlertData);

    return (
        <div className={alertData.show ? `alert alert-${alertData.status} d-block` : "d-none" }  role="alert">
            { alertData.msg }
        </div>
    )
}