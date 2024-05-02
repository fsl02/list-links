import AdminMenu from "../../components/AdminMenu";

export default function Layout({ title, children }) {
    return (
        <div className="container">
            <div className="row mt-5">
                <div className="col-3">
                    <AdminMenu />
                </div>
                <div className="col">
                    <h4>{ title }</h4>
                    <hr />
                    { children }
                </div>
            </div>
        </div>
    )
}