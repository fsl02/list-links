import { Link } from "react-router-dom";
import ListLinks from "../../components/ListLinks";
import './LinksPage.css';

export default function LinksPage() {
    return (
        <>
            <Link to="/login">Login</Link>
            <ListLinks />
        </>
    )
}