import { useState, useContext } from "react";
import storage from "../../storage"
import { UiThemeContext } from "../../context/FormContext";
import './LinkItem.css';

export default function LinkItem({linkText, linkUrl}) {
    let {uiStyle, setUiStyle, styleHover} = useContext(UiThemeContext);

    console.log({uiStyle, setUiStyle, styleHover})

    let linkStyle = storage.getUiStyle();
    let linkStyleHover = storage.getUiStyleHover();
    let [style, setStyle] = useState(linkStyle);
    
    if(uiStyle && setUiStyle && styleHover) {
        linkStyle = uiStyle;
        style = uiStyle;
        setStyle = setUiStyle; 
        linkStyleHover = styleHover;
    }

    console.log(style);

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