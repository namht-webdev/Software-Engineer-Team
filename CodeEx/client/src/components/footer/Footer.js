import React from "react";
import "./footer.css"
import codeExlogo from "../../assets/Logo_W.png"
import { Link } from "react-router-dom";
function Footer() {
    return (
        <footer id="footer" className="footer">
            <div className="container-fluid row">
                <div className="col-md-3">
                    <div>
                        <img src={codeExlogo} />
                    </div>
                    <div>
                        <span>Copyright 2021 CodeEx</span>
                        <br />
                        <Link to={"/home/policy"} style={{ color: 'white' }}>Privacy Policy</Link>

                    </div>
                </div>
                <div className="col-md-3">
                    <p className="align-middle text-justify">
                        CodeEx is an online homework platform. Support posting, performing exercises.
                        With the slogan "CodeEx - Code your excercise", we bring the mission to help you practice your exercises, improve yourself.
                        {/* CodeEx là nền tảng làm bài tập trực tuyến. Hỗ trợ đăng tải, thực hiện bài tập.
                        Với slogan "CodeEx - Code your excercise", chúng tôi mang đến sứ mệnh giúp bạn thực hành các bài tập của mình, nâng cao trình độ bản thân. */}
                    </p>
                </div>
                <div className="col-md-3">
                    <span className="align-middle">
                        Office <br />
                        227, Nguyễn Văn Cừ, P4, Q5, TP.HCM
                    </span>
                </div>
                <div className="col-md-3">
                    <span className="align-middle">
                        Contact <br />
                        contact.codeex@gmail.com
                    </span>
                </div>
            </div>
        </footer>
    )
}

export default Footer;