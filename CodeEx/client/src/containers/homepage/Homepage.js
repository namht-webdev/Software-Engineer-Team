import React from "react";
import { Outlet, Routes } from "react-router";
import Login from "../../components/login/Login";
import Signup from "../../components/signup/Signup";
import "./homepage.css"

function Homepage() {
    return (
        <div>
            <div>
                <img id="logo" src="Logo_B.png"></img>
            </div>
            <div className="container-fluid row">
                <div className="col-md-7">
                    <h1>CodeEx - code your excercise</h1>
                    <img id="imgBug" src="image01.png" height="300" className="align" />
                </div>
                <div className="col-md-5">
                    {/* <Outlet /> */}
                    <Login />
                    {/* <Route path="login" element={<Login />} />
                    <Route path="signup" element={<Signup />} /> */}

                </div>
            </div>
            <Outlet />
        </div>
    )
}

export default Homepage;