
import Layout from "../Layout"
import storage from "../../storage"
import { useContext, useState } from "react"
import Form from '../../components/Form'
import { AlertData } from "../../context/FormContext"
import { useParams } from 'react-router-dom';

export default function EditLink() {
    const alertData = useContext(AlertData);

    const params = useParams();
    const currentLink = storage.getLink(params.id);

    const [linkText, setLinkText] = useState(currentLink.linkText);
    const [linkUrl, setLinkUrl] = useState(currentLink.linkUrl);
    const [alertState, setAlertState] = useState(alertData);

    const submitHandle = (event) => {
        event.preventDefault();
        
        storage.setLink(params.id, {linkText, linkUrl});

        setAlertState({
            show: true, 
            msg: "Link atualizado com sucesso!",
            status: "success"
        });
        
        setTimeout(() => {
            setAlertState({show: false});
        }, 2000);
    }

    return (
       <>
       <Layout title="Edit link">
            <Form submitHandle={submitHandle} alertState={alertState}>
                <div className="mb-3">
                    <label htmlFor="link-text" className="form-label">Texto do link</label>
                    <input type="text" value={linkText} className="form-control" id="link-text" onChange={event => setLinkText(event.target.value) } />
                </div>
                <div className="mb-3">
                    <label htmlFor="link-url" className="form-label">URL do link</label>
                    <input type="text" value={linkUrl} className="form-control" id="link-url" onChange={ event => setLinkUrl(event.target.value) } />
                </div>
                <div className="mb-3">
                    <button className="btn btn-dark w-25">Atualizar link</button>
                </div>
            </Form>
       </Layout>
       </> 

    )
}