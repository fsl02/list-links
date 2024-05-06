
import LinkItem from "../LinkItem";
import storage from "../../storage";

const links = storage.getLinks();


export default function ListLinks() {
    return (
        <ul className="list-links">
            { links.map((item, index) => (<LinkItem key={index} {...item} />) ) }
        </ul>
    )
}