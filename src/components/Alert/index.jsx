import { useState } from "react"


export default function Alert({ showAlertState }) {

    return (
        <div className={showAlertState.showAlert ? "alert alert-success d-block" : "d-none" }  role="alert">
            A simple success alert—check it out!
        </div>
    )
}