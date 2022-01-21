import React from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { useState, useContext } from 'react';
import codeExlogo from "../../assets/Logo_W.png"
import './signup.css';
import { Spinner } from 'react-bootstrap';
import { AuthContext } from '../../contexts/authContext';

function Signup() {
    const [spinner, setSpinner] = useState(false)
    const redirect = useNavigate();
    const { register } = useContext(AuthContext);
    const [message, setMessage] = useState('');
    const [infor, setInfor] = useState({
        email: '',
        password: '',
        confirm_password: '',
    })

    function getInfor(event) {
        setInfor({ ...infor, [event.target.name]: event.target.value });
    }

    function validateEmail(email) {
        return String(email)
            .toLowerCase()
            .match(
                /^[a-z0-9](\.?[a-z0-9]){5,}@g(oogle)?mail\.com$/
            );
    };


    const checkRegister = () => {
        if (!infor.email || !infor.password || !infor.confirm_password) {
            setMessage('Please enter all required information!');
            return false;
        }
        else if (!validateEmail(infor.email)) {
            setMessage('Your email address is invalid!');
            return false;
        }
        else if (infor.password.length < 6) {
            setMessage('Your password must be at least 6 characters!')
            return false;
        }
        else if (infor.password !== '' && !infor.confirm_password) {
            setMessage('Your confirm password dose not match!')
            return false;
        }
        return true;
    }


    const inforUser = async (event) => {
        event.preventDefault();
        const valid = checkRegister()
        if (valid === true) {
            try {
                setSpinner(true);
                const res = await register(infor);
                if (res.status === 200) {
                    if (res.data.success === true) {
                        alert(res.data.message);
                        redirect('/login')
                    } else {
                        setSpinner(false);
                        setMessage(res.data.message);
                    }
                }

            } catch (error) {
                return error;
            }
        }
    }


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
                        <label htmlFor="email" className="form-label text-left" style={{ display: "block", marginLeft: "15%" }}>Email</label>
                        <div className="form-outline mb-4">
                            <input onChange={getInfor} type="email" id="typeEmailX-2" name="email" className="form-control form-control-lg form-width" placeholder="Deadline@gmail.com" />
                        </div>

                        <label className="form-label text-left" style={{ display: "block", marginLeft: "15%" }}>Password</label>
                        <div className="form-outline mb-4" style={{ display: "inline" }}>

                            <input onChange={getInfor} htmlFor="password" type="password" className="form-control form-control-lg form-width" name="password" style={{ clear: "both" }} placeholder="password" />
                        </div>

                        <label className="form-label text-left mt-4" style={{ display: "block", marginLeft: "15%" }}>Repeat password</label>
                        <div className="form-outline mb-4" style={{ display: "inline" }}>

                            <input htmlFor="confirm_password" onChange={getInfor} type="password" name="confirm_password" className="form-control form-control-lg form-width" style={{ clear: "both" }} placeholder="password" />
                        </div>

                        <div style={{ marginLeft: "15%" }} className="form-check d-flex justify-content-start mb-4">
                            <input
                                className="form-check-input"
                                type="checkbox"
                                value=""
                                id="form1Example3"
                            />
                            <div style={{ display: "inline-block" }}>
                                <label className="form-check-label" htmlFor="form1Example3"> I agree to terms & conditions </label>
                            </div>
                        </div>
                        {spinner && (
                            <Spinner animation="border" role="status">
                                <span className="visually-hidden">Loading...</span>
                            </Spinner>)}
                        <p className="text-danger" style={{ fontWeight: "bold" }}>{message}</p>
                        <button onClick={inforUser} className="btn btn-primary btn-lg btn-block" type="submit" style={{ width: "70%", fontWeight: "bold" }}>Register</button>
                        <p className='text-center mt-2'>Have an account, <Link to="/login">Login</Link></p>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Signup;