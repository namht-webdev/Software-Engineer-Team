import React from "react"
import "./navbar.css"
import { render } from "react-dom";
import Button from "@mui/material/Button"

function Navbar(){
    return(
        <div> 
            <div className = "row container-fluid">
                <img id = "imgLogo" src=".\Logo_B.png" height = "100" alt = "logo nè" className = "col-md-2 img-fluid"/>
                <div className = "col-md-10 d-flex justify-content-end">
                    <button
                    id = "loginButton" 
                    className = "btn btn-outline-primary align-self-center">
                    Login 
                    </button>
                    <button
                    id = "signUpButton"
                    className = "btn btn-outline-primary align-self-center">
                    Sign up
                    </button>
                </div>
            </div>
        </div>
    );
}

export default Navbar;  