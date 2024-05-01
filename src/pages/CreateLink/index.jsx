
import Layout from "../Layout"
import storage from "../../storage"
import { useState } from "react"

export default function CreateLink() {

    const [linkText, setLinkText] = useState();
    const [linkUrl, setLinkUrl] = useState();

    const submitHandle = (event) => {
        event.preventDefault();
        let links = storage.getLinks();
        links.push({linkText, linkUrl});
        storage.setLinks(links);
    }

    return (
       <Layout title="Create link">
        <form action="" onSubmit={submitHandle}>
            <div className="mb-3">
                <label htmlFor="link-text" className="form-label">Texto do link</label>
                <input type="text" className="form-control" id="link-text" onChange={event => setLinkText(event.target.value) } />
            </div>
            <div className="mb-3">
                <label htmlFor="link-url" className="form-label">URL do link</label>
                <input type="text" className="form-control" id="link-url" onChange={ event => setLinkUrl(event.target.value) } />
            </div>
            <div className="mb-3">
                <button className="btn btn-dark w-25">Criar link</button>
            </div>
        </form>
       </Layout>
    )
}