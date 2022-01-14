<<<<<<< HEAD
import React from 'react';
import { Link } from 'react-router-dom';
import { useState } from 'react';
import codeExlogo from "../../assets/Logo_W.png"
import './signup.css';

const User = {
    email: '',
    password: '',
    confirm_password: ''
}


=======
import React from 'react'
import { Link, useNavigate } from 'react-router-dom';
>>>>>>> 423bd28aaffa54f9ef0efafdcc4f557391bf1bf9
function Signup() {
    const navigate = useNavigate();
    return (
        <div>
            <div className="background-re">
                <img className="logo" src={codeExlogo} />
                <h2 className="slogan">CodeEx code your exercise</h2>
                <span className="privacy">Copyright <i className="fa fa-copyright" aria-hidden="true"></i> 2022 CodeEx </span>
                <p></p>
                <span style={{ textDecoration: 'underline' }} className="privacy">Privacy Policy</span>
            </div>
            <div className="right-bg">
                <div className="mt-4">
                    <i className="fa fa-angle-double-left ml-2"></i>
                    <Link className="ml-2" to='/login'> Back</Link>
                </div>

                <div className="row d-flex justify-content-center align-items-center h-80">

                    <div className="card-body p-5 text-center">
                        <h3 style={{ marginLeft: "-120px", fontWeight: "bold" }} className="mb-5">Create An Account</h3>
                        <label className="form-label text-left" style={{ display: "block", marginLeft: "15%" }}>Email</label>
                        <div className="form-outline mb-4">
                            <input type="email" id="typeEmailX-2" className="form-control form-control-lg form-width" placeholder="Deadline@gmail.com" />
                        </div>

                        <label className="form-label text-left" style={{ display: "block", marginLeft: "15%" }}>Password</label>
                        <div className="form-outline mb-4" style={{ display: "inline" }}>

                            <input type="password" className="form-control form-control-lg form-width" style={{ clear: "both" }} placeholder="hashdshadhash" />
                        </div>

                        <label className="form-label text-left mt-4" style={{ display: "block", marginLeft: "15%" }}>Repeat password</label>
                        <div className="form-outline mb-4" style={{ display: "inline" }}>

                            <input type="password" className="form-control form-control-lg form-width" style={{ clear: "both" }} />
                        </div>

                        <div style={{ marginLeft: "15%" }} className="form-check d-flex justify-content-start mb-4">
                            <input
                                className="form-check-input"
                                type="checkbox"
                                value=""
                                id="form1Example3"
                            />
                            <div style={{ display: "inline-block" }}>
                                <label className="form-check-label" for="form1Example3"> I agree to terms & conditions </label>
                            </div>
                        </div>
<<<<<<< HEAD

                        <button className="btn btn-primary btn-lg btn-block" type="submit" style={{ width: "70%", fontWeight: "bold" }}>Register</button>


                    </div>
=======
                        <button type="submit" className="btn btn-primary btn-block" onClick={() => navigate("/login")}>Sign Up</button>
                    </form>
                </div>
                <div>
                    <p className='text-center'>Have an account, <Link to="/login">Login</Link></p>
>>>>>>> 423bd28aaffa54f9ef0efafdcc4f557391bf1bf9
                </div>
            </div>
        </div>
    )
}

export default Signup;