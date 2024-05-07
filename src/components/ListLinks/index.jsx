
import LinkItem from "../LinkItem";
import storage from "../../storage";
import { ThemeContext } from "../../context/ThemeContext";
import { useContext } from "react";

const links = storage.getLinks();

export default function ListLinks() {
    let theme = useContext(ThemeContext);

    return (
        <ul className={`theme-${theme} list-links`}>
            { links.map((item, index) => (<LinkItem key={index} {...item} />) ) }
        </ul>
    )
}