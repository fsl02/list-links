import Layout from "../Layout";
import storage from "../../storage";
import { Link } from "react-router-dom";

export default function AdminListing() {

    let accessCount = storage.getAccessCount();

    return (
        <Layout title="Listagem de links">
            <table className="table table-striped">
                <thead>
                    <tr>
                        <th>ID</th>
                        <th>Texto do link</th>
                        <th>Url do link</th>
                        <th>Total de clicks</th>
                        <th>Ações</th>
                    </tr>
                </thead>
                <tbody>
                    {storage.getLinks().map((item, index) => (
                        <tr key={index}>
                            <td>{index}</td>
                            <td>{item.linkText}</td>
                            <td>{item.linkUrl}</td>
                            <td>{accessCount[index] ?? 0}</td>
                            <td>
                                <Link to={`/admin/edit-link/${index}`}>Editar</Link>
                            </td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </Layout>
    );

}