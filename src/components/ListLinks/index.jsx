
import LinkItem from "../LinkItem";
import storage from "../../storage";
import './ListLinks.css';

export default function ListLinks({ links }) {
    links = links ?? storage.getLinks()
    return (
        <ul className="list-links">
            { links.map((item, index) => (<LinkItem key={index} {...item} />) ) }
        </ul>
    )
}