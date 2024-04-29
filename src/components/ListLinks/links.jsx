
export default {
    getLinks() {
        return fetch(url).then(r => r.json)
    }
}