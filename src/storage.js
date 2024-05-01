


export default {
    
    getLinks() {
        return this.getItem('links');
    },

    setLinks(links) {
        return this.setItem('links', links);
    },

    setItem(key, value) {
        
        if(typeof value === 'object') {
            value = JSON.stringify(value);
        }

        window.localStorage.setItem(key, value);
    },

    getItem(key) {
        let value = window.localStorage.getItem(key);
        
        try {
            value = JSON.parse(value) ?? [];
        } catch (error) {}

        return value;
    }
}