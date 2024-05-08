import { useState } from "react";
import storage from "../../storage"

export default function LinkItem({linkText, linkUrl}) {
    let linkStyle = storage.getUiStyle();
    let linkStyleHover = storage.getUiStyleHover()

    const [style, setStyle] = useState(linkStyle);

    return (
        <li>
            <a className="link-item" 
            href={linkUrl} 
            onMouseOver={() => setStyle({...linkStyle, ...linkStyleHover})}
            onMouseLeave={() => setStyle(linkStyle)}
            style={style}>
                {linkText}
            </a>
        </li>
    )
}