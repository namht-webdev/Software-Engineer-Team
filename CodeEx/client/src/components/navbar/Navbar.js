import React from "react"
import "./navbar.css"
import { Nav } from "react-bootstrap";
import { useNavigate, withRouter } from "react-router";
import { Link } from "react-router-dom";
const username = "TuKi"
import codeExlogo from "../../assets/Logo_W.png"

function Navbar() {
    const navigate = useNavigate();
    const openMenu = () => {
        document.getElementById("mySidepanel").style.width = "250px";
    }

    const closeMenu = () => {
        document.getElementById("mySidepanel").style.width = "0";
    }
    return (

        <nav id="navbar">
            <div className="row container-fluid">
                <div className="col-md-2">
                    <div id="mySidepanel" className="sidepanel">
                        <img id="logo" src={codeExlogo}></img>
                        <button className="closebtn btn" onClick={closeMenu}>&times;</button>
                        <Link to="/home"><i className="fa fa-home"></i> Trang chủ</Link>
                        <Link to="/home/createchallenge"><i className="fa fa-plus"></i> Tạo challenge</Link>
                    </div>
                    <button className="openbtn btn btn-outline-primary" onClick={openMenu}>&#9776; Menu</button>
                </div>
                <div className="d-flex justify-content-center col-md-9">
                    <form className="form-group  form-inline" id="search">
                        <input type="search" id="search-box" className="form-control" placeholder="Search..." />
                        <button type="submit" className="btn btn-outline" id="btn-search"><i className="fa fa-search"></i></button>
                    </form>
                </div>
                <div className="col-md-1 row">
                    <div className="btn-group">
                        <button type="button" className="btn btn-outline-info" onClick={() => navigate("user")}>{username}</button>
                        <button type="button" className="btn btn-info dropdown-toggle dropdown-toggle-split" data-toggle="dropdown" aria-haspopup="false" aria-expanded="true"></button>
                        <div className="dropdown-menu dropdown-menu-right">
                            <button className="dropdown-item btn" href="#"><i className="fa fa-user-circle-o"></i> Hồ sơ</button>
                            <button className="dropdown-item btn" href="#"><i className="fa fa-cog"></i> Cài đặt</button>
                            <button className="dropdown-item btn" href="#"><i className="fa fa-key"></i> Mật khẩu</button>
                            <button className="dropdown-item btn" href="#"><i className="fa fa-archive"></i> Challenge của tôi</button>
                            <button className="dropdown-item btn" href="#"><i className="fa fa-lock"></i> Khóa tài khoản</button>
                            <button className="dropdown-item btn" href="#"><i className="fa fa-sign-out"></i> Đăng xuất</button>
                        </div>
                    </div>
                </div>
            </div>
        </nav>
    );
}


export default Navbar;