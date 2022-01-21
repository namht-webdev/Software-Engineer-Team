import React, { useState, useContext } from "react";
import './login.css'
import GGlogo from "../../assets/gg_logo.png"
import { Link, useNavigate } from 'react-router-dom';
import codeExlogo from "../../assets/Logo_W.png"
import { AuthContext } from '../../contexts/authContext';
import { Spinner } from 'react-bootstrap';


function Login() {
    const { login } = useContext(AuthContext);
    const [message, setMessage] = useState('');
    const [spinner, setSpinner] = useState(false)
    const redirect = useNavigate();
    const [infor, setInfor] = useState({
        email: '',
        password: '',
    })

    function getInfor(event) {
        setInfor({ ...infor, [event.target.name]: event.target.value });
    }

    const checkLogin = () => {
        if (!infor.email || !infor.password) {
            setMessage('Please enter all required information!');
            return false;
        }
        return true;
    }


    const inforUser = async (event) => {
        event.preventDefault();
        const valid = checkLogin()
        if (valid === true) {
            try {
                setSpinner(true);
                const res = await login(infor);
                if (res.status === 200) {
                    setMessage(res.data.message);
                    if (res.data.success === true) {

                        localStorage.setItem('userId', res.data.userId);
                        redirect('/home');
                    }
                    else {
                        setSpinner(false);
                    }
                }
                
            } catch (error) {
                return error;
            }
        }
    }


    return (
        <div>
            <div className="background">
                <img className="logo" src={codeExlogo} />
                <h2 className="slogan">CodeEx code your exercise</h2>
                <span className="privacy">Copyright <i className="fa fa-copyright" aria-hidden="true"></i> 2022 CodeEx </span>
                <p></p>
                <span style={{ textDecoration: 'underline' }} className="privacy">Privacy Policy</span>

            </div>
            <div className="right-bg">
                <div className="row d-flex justify-content-center align-items-center h-80">

                    <div className="card-body p-5 text-center">
                        <h3 style={{ marginLeft: "-200px" }}>Welcome back</h3>
                        <h3 style={{ marginLeft: "-100px", fontWeight: "bold" }} className="mb-5">Login to your account</h3>
                        <label className="form-label text-left" style={{ display: "block", marginLeft: "15%" }}>Email</label>
                        <div className="form-outline mb-4">
                            <input onChange={getInfor} name="email" type="email" id="typeEmailX-2" className="form-control form-control-lg form-width" placeholder="Deadline@gmail.com" />
                        </div>

                        <label className="form-label text-left" style={{ display: "block", marginLeft: "15%" }}>Password</label>
                        <div className="form-outline mb-4" style={{ display: "inline" }}>

                            <input onChange={getInfor} name="password" type="password" className="form-control form-control-lg form-width" style={{ clear: "both" }} placeholder="hashdshadhash" />
                        </div>

                        <div style={{ marginLeft: "15%" }} className="form-check d-flex justify-content-start mb-4">
                            <input
                                className="form-check-input"
                                type="checkbox"
                                value=""
                                id="form1Example3"
                            />
                            <div style={{ display: "inline-block" }}>
                                <label className="form-check-label" htmlFor="form1Example3"> Remember me </label>
                                <a style={{ marginLeft: "200px" }} className="text-right" href="#" >Forgot password ?</a>
                            </div>
                        </div>
                        {spinner && (
                            <Spinner animation="border" role="status">
                                <span className="visually-hidden">Loading...</span>
                            </Spinner>)}
                        <p className="text-danger" style={{ fontWeight: "bold" }}>{message}</p>

                        <button onClick={inforUser} className="btn btn-primary btn-lg btn-block" type="submit" style={{ width: "70%", fontWeight: "bold" }}>Login</button>

                        <hr className="my-4" />

                        <a className="btn btn-lg btn-block btn-secondary" style={{ backgroundColor: "white", width: "50%", fontWeight: "bold", color: "#998066", fontSize: "1em", borderRadius: "50px" }} type="submit"><img className="mr-3" style={{ width: "20px", display: "inline" }} src={GGlogo} /> Login with google</a>
                        <div className="mt-5">
                            Do not have a account? <Link to='/signup'>Register</Link>
                        </div>

                    </div>
                </div>
            </div>
        </div>
    )
}

export default Login;