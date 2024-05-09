import { Link, useParams } from "react-router-dom";
import ListLinks from "../../components/ListLinks";

export default function LinksPage() {
    let params = useParams();

    console.log(params);

    return (
        <>
            { params.username }
            <br />
            <Link to="/login">Login</Link>
            <ListLinks />
        </>
    )
}