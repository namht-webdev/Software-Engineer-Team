import React from 'react'
import { Link, useNavigate } from 'react-router-dom';
function Signup() {
    const navigate = useNavigate();
    return (
        <div>
            <div className="col-md-10">
                <div>
                    <h3>Create an account</h3>
                </div>
                <div className="signup-form">
                    <form>
                        <div className="form-group">
                            <label>Username</label>
                            <input type="text" className="form-control" placeholder="Username" name="username" />
                        </div>
                        <div className="form-group">
                            <label>Password</label>
                            <input type="password" className="form-control" placeholder="Password" name="pw" />
                        </div>
                        <div className="form-group">
                            <label>Repeat Password</label>
                            <input type="password" className="form-control" placeholder="Password" name="pw-repeat" />
                        </div>
                        <div className="checkbox checkbox-circle">
                            <input type="checkbox" name="check-terms" checked />
                            <label>I agree with <a href="#">terms and conditions</a></label>
                        </div>
                        <button type="submit" className="btn btn-primary btn-block" onClick={() => navigate("/login")}>Sign Up</button>
                    </form>
                </div>
                <div>
                    <p className='text-center'>Have an account, <Link to="/login">Login</Link></p>
                </div>
            </div>
        </div>
    )
}

export default Signup;