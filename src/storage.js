


export default {
    
    getLinks() {
        return this.getItem('links');
    },

    setLinks(links) {
        return this.setItem('links', links);
    },

    setUiStyle(uiStyle) {
        return this.setItem('ui-style', uiStyle);
    },

    getUiStyle() {
        return this.getItem('ui-style');
    },

    setUiStyleHover(uiStyleHover) {
        this.setItem('ui-style-hover', uiStyleHover)
    },

    getUiStyleHover() {
        return this.getItem('ui-style-hover');
    },

    setItem(key, value) {
        
        if(typeof value === 'object') {
            value = JSON.stringify(value);
        }

        return window.localStorage.setItem(key, value);
    },

    getItem(key) {
        let value = window.localStorage.getItem(key);
        
        try {
            value = JSON.parse(value) ?? [];
        } catch (error) {}

        return value;
    }
}