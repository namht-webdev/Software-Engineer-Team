import React from "react"
import "./navbar.css"
import { render } from "react-dom";
const name ="TuKi"
function Navbar(){
    return(
        <div id="navbar"> 
            <div className = "row container-fluid">
                <div className="col-md-2" id="menu">
                    Menu
                </div>  
                <div className="col-md-8">
                    <form>
                        <div className="input-group search">
                            <input type="search" id="search-box" className="form-control" placeholder="Search..."/>
                            <button type="button" className="btn btn-outline-primary"><i class="fa fa-search"></i></button>
                        </div>
                    </form>
                </div>
                <div className="col-md-2 row">
                    <img src="..."/>
                    <div class="btn-group">
                        <button type="button" class="btn btn-outline-info">{name}</button>
                        <button type="button" class="btn btn-outline-info dropdown-toggle dropdown-toggle-split" data-toggle="dropdown"></button>
                        <div class="dropdown-menu">

                            <button class="dropdown-item btn" href="#"><i class="fa fa-user-circle-o"></i> Hồ sơ</button>
                            <button class="dropdown-item btn" href="#"><i class="fa fa-cog"></i> Cài đặt</button>
                            <button class="dropdown-item btn" href="#"><i class="fa fa-key"></i> Mật khẩu</button>
                            <button class="dropdown-item btn" href="#"><i class="fa fa-archive"></i> Challenge của tôi</button>
                            <button class="dropdown-item btn" href="#"><i class="fa fa-lock"></i> Khóa tài khoản</button>
                            <button class="dropdown-item btn" href="#"><i class="fa fa-sign-out"></i> Đăng xuất</button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Navbar;  