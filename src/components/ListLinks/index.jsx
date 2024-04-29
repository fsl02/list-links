
import LinkItem from "../LinkItem";

const links = [
    {label: "Texto exibido no link", link: "https://google.com"},
    {label: "Texto exibido no link", link: "https://google.com"},
    {label: "Texto exibido no link", link: "https://google.com"},
]

export default function ListLinks() {
    return (
        <ul class="list-links">
            { links.map((item, index) => (<LinkItem key={index} {...item} />) ) }
        </ul>
    )
}