import React from "react";
import "./footer.css"

function Footer(){
    return(
        <div id="footer" className="fixed-bottom">
            <div className="container-fluid row">
                <div className="col-md-3">
                    <div>
                        <img src="Logo_W.png"/>
                    </div>
                    <div>
                        <span>Copyright 2021 CodeEx</span>
                        <br/>
                        <span>Privacy Policy</span>
                    </div>
                </div>
                <div className="col-md-3">
                    <span className="align-middle">
                    CodeEx là nền tảng làm bài tập trực tuyến. Hỗ trợ đăng tải, thực hiện bài tập.
                    Với slogan "CodeEx - Code your excercise", chúng tôi mang đến sứ mệnh giúp bạn thực hành các bài tập của mình, nâng cao trình độ bản thân.
                    </span>
                </div> 
                <div className="col-md-3">
                    <span className="align-middle">
                    Office <br/>
                    227, Nguyễn Văn Cừ, P4, Q5, TP.HCM
                    </span>
                </div>
                <div className="col-md-3">
                    Contact <br/>
                    contact.codeex@gmail.com
                </div>
            </div>
        </div>
    )
}

export default Footer;