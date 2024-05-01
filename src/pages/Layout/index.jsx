import AdminMenu from "../../components/AdminMenu";
import Alert from '../../components/Alert';

export default function Layout({ title, showAlertState, children }) {
    return (
        <div className="container">
            <div className="row mt-5">
                <div className="col-3">
                    <AdminMenu />
                </div>
                <div className="col">
                    <Alert showAlertState={showAlertState} />
                    <h4>{ title }</h4>
                    <hr />
                    { children }
                </div>
            </div>
        </div>
    )
}