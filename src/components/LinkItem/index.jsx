import { useState, useContext, useEffect } from "react";
import storage from "../../storage"
import { UiThemeContext } from "../../context/FormContext";
import './LinkItem.css';

export default function LinkItem({linkText, linkUrl}) {
    let {uiStyleLive, styleHover} = useContext(UiThemeContext);

    let linkStyle = storage.getUiStyle() ?? uiStyleLive;
    let linkStyleHover = storage.getUiStyleHover();
    let [style, setStyle] = useState(linkStyle);

    useEffect(() => {
        if(uiStyleLive) {
            setStyle(uiStyleLive);
        }
    }, [uiStyleLive]);

    let setStyleLive = () => {
        let currentStyle = uiStyleLive ?? linkStyle
        let currentStyleHover = styleHover ?? linkStyleHover
        setStyle({...currentStyle, ...currentStyleHover});
    }

    const setStyleHoverLive = () => {
        let currentStyle = uiStyleLive ?? linkStyle
        setStyle(currentStyle);
    }

    return (
        <li>
            <a className="link-item" 
            href={linkUrl} 
            onMouseOver={setStyleLive}
            onMouseLeave={setStyleHoverLive}
            style={style}>
                {linkText}
            </a>
        </li>
    )
}