import Layout from "../Layout";

export default function Dashboard() {
    
    (async () => {
        await new Promise(resolve => setTimeout(resolve, 5000));
    })();

    return (
        <Layout title="User interface">
            <h1>Dashboard</h1>
        </Layout>
    )
}