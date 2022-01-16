import { Link } from "react-router-dom";

function NotFound() {
    return (
        <div>
            <Link to={"/home"}>
                <div className="d-flex justify-content-center">
                    <img src="Logo_B.png" />
                </div>
            </Link>
            <div className="d-flex justify-content-center" style={{ fontWeight: "bold", }}>
                <h2>PAGE NOT FOUND</h2>
            </div>
        </div>
    )
}

export default NotFound;