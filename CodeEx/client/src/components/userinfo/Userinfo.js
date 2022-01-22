import { Link, useNavigate } from "react-router-dom";
import ChallengeCard from "../challengecard/ChallengeCard";
import img from '../../assets/imgcr.png';
import ava from '../../assets/ava.png';
import "./userinfo.css"
function Userinfo() {
    const navigate = useNavigate();
    return (
        <div id="userinfo">
            <div id="ava">
                <img className="avaimg" src={ava} />
                <p className="pncr">Nguyễn Văn CodeEx</p>
            </div>
            <div className="container-fluid row">
                {/* <nav className="">
                    <ol className="breadcrumb">
                        <li className="breadcrumb-item active" aria-current="page" ><Link to="../user/info" style={{ color: "black" }}>Profile</Link></li>
                        <li className="breadcrumb-item"><Link to="../user/challenge" style={{ color: "black" }}>Challenge</Link></li>
                    </ol>
                </nav> */}
                <div className="col-md-6" id="info">
                    <table className="table table-dark">
                        <tr>
                            <td>Username</td>
                            <td>Nguyễn Văn CodeEx</td>
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
            <div id="challenge">
                <p>My Challenge</p>
                <ChallengeCard />
            </div>

        </div>
    )
}

export default Userinfo;