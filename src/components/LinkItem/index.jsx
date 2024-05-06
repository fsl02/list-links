
export default function LinkItem({linkText, linkUrl}) {
    return (
        <li>
            <a className="link-item" href={linkUrl}>{linkText}</a>
        </li>
    )
}