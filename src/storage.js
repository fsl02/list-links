


export default {
    
    getLinks() {
        return this.getItem('links');
    },

    getLink(key) {
        let allLinks = this.getLinks();
        return allLinks[key];
    },

    setLinks(links) {
        return this.setItem('links', links);
    },

    setLink(key, value) {
        let allLinks = this.getLinks();
        allLinks[parseInt(key)] = value;
        this.setLinks(allLinks);
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

    getAccessCount() {
        return this.getItem('access-count');
    },

    setAccessCount(accessCount) {
        return this.setItem('access-count', accessCount);
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