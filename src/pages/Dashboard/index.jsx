import Layout from "../Layout";
import storage from "../../storage";

export default function Dashboard() {
    
    let accessCount = storage.getAccessCount();
    let total = accessCount.reduce((prev, current) => prev + current, 0);
    let links = storage.getLinks();

    return (
        <Layout title="Dashboard">
            <div className="row">
                <div className="card col m-2">
                    <div className="card-body">
                        <p className="card-text">Total de links</p>
                        <h2 className="card-text card-title">{ links.length }</h2>
                    </div>
                </div>
                <div className="card col m-2">
                    <div className="card-body">
                        <p className="card-text">Total de cliques</p>
                        <h2 className="card-text card-title">{ total }</h2>
                    </div>
                </div>
            </div>
        </Layout>
    )
}