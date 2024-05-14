import { Link } from "react-router-dom";

export default function HomePage() {
    return (
        <div className="container">
            <div className="row w-25 m-auto">
                <div className="col d-flex justify-content-around mt-5">
                    <Link to="login" className="btn btn-success btn-lg">Login</Link>
                    <Link to="register" className="btn btn-success btn-lg">Register</Link>
                </div>
            </div>
        </div>
    );
}