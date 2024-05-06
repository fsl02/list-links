
import { NavLink } from "react-router-dom"

export default function AdminMenu() {
    return (
        <div className="list-group">
            <NavLink to="/admin" className="list-group-item list-group-item-action" end>Dashboard</NavLink>
            <NavLink to="/admin/create-link" className="list-group-item list-group-item-action">Criar link</NavLink>
            <NavLink to="/admin/ui" className="list-group-item list-group-item-action">Ui</NavLink>
        </div>
    )
}