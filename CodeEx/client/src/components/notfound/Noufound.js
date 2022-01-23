import { Link } from "react-router-dom";
import codeExlogo from "../../assets/Logo_B.png"
function NotFound() {
    return (
        <div>
            <Link to={"/home"}>
                <div className="d-flex justify-content-center">
                    <img src={codeExlogo} />
                </div>
            </Link>
            <div className="d-flex justify-content-center" style={{ fontWeight: "bold", }}>
                <h2>PAGE NOT FOUND</h2>
            </div>
        </div>
    )
}

export default NotFound;