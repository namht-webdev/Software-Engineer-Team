import React from "react"
import "./navbar.css"

const name = "TuKi"
/* Set the width of the sidebar to 250px and the left margin of the page content to 250px */


function Navbar() {
    // useEffect(() => {
    //     effect
    //     return () => {
    //         cleanup
    //     }
    // }, [input])
    // openNav = () => {
    //     document.getElementById("mySidebar").style.width = "250px";
    //     document.getElementById("main").style.marginLeft = "250px";
    // };

    // /* Set the width of the sidebar to 0 and the left margin of the page content to 0 */
    // closeNav = () => {
    //     document.getElementById("mySidebar").style.width = "0";
    //     document.getElementById("main").style.marginLeft = "0";
    // };

    return (
        <nav id="navbar">
            <div className="row container-fluid">
                <div id="mySidebar" className="sidebar">
                    <a href="javascript:void(0)" className="closebtn" onclick={() => "closeNav"}>&times;</a>
                    <a href="#">About</a>
                    <a href="#">Services</a>
                    <a href="#">Clients</a>
                    <a href="#">Contact</a>
                </div>
                <div className="col-md-2" id="menu">
                    <button className="btn btn-primary openbtn" onclick={() => "openNav()"}>Menu</button>
                </div>
                <div className="d-flex justify-content-center col-md-8">

                    <form className="input-group search">
                        <input type="search" id="search-box" className="form-control" placeholder="Search..." />
                        <button type="submit" className="btn btn-primary" id="btn-search"><i className="fa fa-search"></i></button>
                    </form>

                </div>
                <div className="col-md-2 row">
                    <img src="..." />
                    <div class="btn-group">
                        <button type="button" class="btn btn-info">{name}</button>
                        <button type="button" class="btn btn-info dropdown-toggle dropdown-toggle-split" data-toggle="dropdown"></button>
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
        </nav>
    );
}


export default Navbar;