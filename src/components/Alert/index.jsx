import { useState } from "react"


export default function Alert({ showAlertState, status, children }) {

    return (
        <div className={showAlertState ? `alert alert-${status} d-block` : "d-none" }  role="alert">
            { children }
        </div>
    )
}