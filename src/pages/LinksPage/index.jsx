import { Link } from "react-router-dom";
import ListLinks from "../../components/ListLinks";

export default function LinksPage() {
    return (
        <>
            <br />
            <Link to="/login">Login</Link>
            <ListLinks />
        </>
    )
}