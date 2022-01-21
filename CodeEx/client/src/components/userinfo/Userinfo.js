import { Link, useNavigate } from "react-router-dom";

function Userinfo() {
    const navigate = useNavigate();
    return (
        <div id="userinfo" className="container row">
            <nav >
                <ol className="breadcrumb">
                    <li className="breadcrumb-item active" aria-current="page" ><Link to="../user/info">Profile</Link></li>
                    <li className="breadcrumb-item"><Link to="../user/challenge">Challenge</Link></li>
                </ol>
            </nav>
            <div className="col-md-6">
                <table className="table table-bordered table-dark">
                    <tr>
                        <td>Username</td>
                        <td>TuKi</td>
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
    )
}

export default Userinfo;