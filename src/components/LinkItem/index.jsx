
export default function LinkItem({link, label}) {
    return (
        <li>
            <a className="link-item" href={link}>{label}</a>
        </li>
    )
}