import React from "react"
import "./navbar.css"

const username = "TuKi"

function Navbar() {
    const openMenu = () => {

    }
    return (
        <nav id="navbar">
            <div className="row container-fluid">
                <div className="col-md-2">
                    <button className="btn btn-danger" onClick={openMenu}>Menu</button>
                </div>
                <div className="d-flex justify-content-center col-md-9">
                    <form className="input-group" id="search">
                        <input type="search" id="search-box" className="form-control" placeholder="Search..." />
                        <button type="submit" className="btn btn-primary" id="btn-search"><i className="fa fa-search"></i></button>
                    </form>
                </div>
                <div className="col-md-1 row">
                    {/* <img src="..." /> */}
                    <div class="btn-group">
                        <button type="button" class="btn btn-info">{username}</button>
                        <button type="button" class="btn btn-info dropdown-toggle dropdown-toggle-split" data-toggle="dropdown"></button>
                        <div class="dropdown-menu">
                            <button class="dropdown-item btn" href="#"><i class="fa fa-user-circle-o"></i> Hồ sơ</button>
                            <button class="dropdown-item btn" href="#"><i class="fa fa-cog"></i> Cài đặt</button>
                            <button class="dropdown-item btn" href="#"><i class="fa fa-plus"></i> Tạo challenge</button>
                            <button class="dropdown-item btn" href="#"><i class="fa fa-archive"></i> Challenge của tôi</button>
                            <button class="dropdown-item btn" href="#"><i class="fa fa-lock"></i> Khóa tài khoản</button>
                            <button class="dropdown-item btn" href="#"><i class="fa fa-sign-out"></i> Đăng xuất</button>
                        </div>
                    </div>
                </div>
            </div>
        </nav>
    );
}


export default Navbar;