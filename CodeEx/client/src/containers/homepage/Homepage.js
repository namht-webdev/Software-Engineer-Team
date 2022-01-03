import React from "react";
import Login from "../../components/login/Login";

import "./homepage.css"

function Homepage(){
    return(
        <div>
            <div className="container-fluid row">
                <div className="col-md-7">
                    <h1>CodeEx - code your excercise</h1>
                    <img id = "imgBug" src = "image01.png" height="300" className="align"/>
                </div>
                <div className="col-md-5">
                    <Login/>
                </div>
            </div>
        </div>
    )
}

export default Homepage;