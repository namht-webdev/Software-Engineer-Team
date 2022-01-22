import { Link, useNavigate } from "react-router-dom";
import ChallengeCard from "../challengecard/ChallengeCard";

import "./userinfo.css"
function Userinfo() {
    const navigate = useNavigate();
    return (
        <div id="userinfo">
            <div className="container-fluid row">
                <nav className="">
                    <ol className="breadcrumb">
                        <li className="breadcrumb-item active" aria-current="page" ><Link to="../user/info" style={{ color: "black" }}>Profile</Link></li>
                        <li className="breadcrumb-item"><Link to="../user/challenge" style={{ color: "black" }}>Challenge</Link></li>
                    </ol>
                </nav>
                <div className="col-md-6">
                    <table className="table table-dark">
                        <tr>
                            <td>Username</td>
                            <td>CodeEx</td>
                            <td><i class="fa fa-cog" aria-hidden="true"></i></td>
                        </tr>
                        <tr>
                            <td>Email</td>
                            <td>codeex.contact@gmail.com</td>
                            <td><i class="fa fa-cog" aria-hidden="true"></i></td>
                        </tr>
                        <tr>
                            <td>Phone</td>
                            <td>0123456789</td>
                            <td><i class="fa fa-cog" aria-hidden="true"></i></td>
                        </tr>
                        <tr>
                            <td>Date of birth</td>
                            <td>01/01/2000</td>
                            <td><i class="fa fa-cog" aria-hidden="true"></i></td>
                        </tr>
                        <tr>
                            <td>Gender</td>
                            <td>Male</td>
                            <td><i class="fa fa-cog" aria-hidden="true"></i></td>
                        </tr>
                    </table>
                </div>

            </div>
            <ChallengeCard />
        </div>
    )
}

export default Userinfo;