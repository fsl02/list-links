
import Layout from "../Layout"
import storage from "../../storage"
import { useContext, useState, contex } from "react"
import Form from '../../components/Form'
import { AlertData } from "../../context/FormContext"

export default function CreateLink() {

    const alertData = useContext(AlertData);

    const [linkText, setLinkText] = useState();
    const [linkUrl, setLinkUrl] = useState();
    const [alertState, setAlertState] = useState(alertData);

    const submitHandle = (event) => {
        event.preventDefault();
        let links = storage.getLinks();
        links.push({linkText, linkUrl});
        storage.setLinks(links);
        event.target.reset();

        setAlertState({
            show: true, 
            msg: "Link cadastrado com sucesso!",
            status: "success"
        });
        
        setTimeout(() => {
            setAlertState({show: false});
        }, 2000);
    }

    return (
       <>
       <Layout title="Create link">
            <Form submitHandle={submitHandle} alertState={alertState}>
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
            </Form>
       </Layout>
       </> 

    )
}