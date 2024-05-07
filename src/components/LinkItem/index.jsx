import storage from "../../storage"

export default function LinkItem({linkText, linkUrl}) {
    let linkStyle = storage.getUiStyle();

    return (
        <li>
            <a className="link-item" href={linkUrl} style={linkStyle}>{linkText}</a>
        </li>
    )
}