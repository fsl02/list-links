
import { Link } from "react-router-dom"

export default function AdminMenu() {
    return (
        <div class="list-group">
            <Link to="/admin" className="list-group-item list-group-item-action">Dashboard</Link>
            <Link to="/admin/create-link" className="list-group-item list-group-item-action">Criar link</Link>
            <Link to="/admin/ui" className="list-group-item list-group-item-action">Ui</Link>
        </div>
    )
}