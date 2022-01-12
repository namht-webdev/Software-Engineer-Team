import React from "react";
import { Link, useNavigate } from "react-router-dom";
import Signup from "../signup/Signup";

function Login() {
    const navigate = useNavigate()
    return (
        <div id="login">
            <div className="col-md-10">
                <div>
                    <h4>Welcome back</h4>
                    <h3>Login to your account</h3>
                </div>
                <div className="login-form">
                    <form>
                        <div className="form-group">
                            <label>Username</label>
                            <input type="text" className="form-control" placeholder="Username" />
                        </div>
                        <div className="form-group">
                            <label>Password</label>
                            <input type="password" className="form-control" placeholder="Password" />
                        </div>
                        <button type="submit" className="btn btn-primary btn-block" onClick={() => navigate("/home")}>Login</button>
                    </form>
                </div>
                <div>
                    <span>Don't have account, <Link to="/signup">Sign Up</Link>
                    </span>
                </div>
            </div>
        </div>
    )
}

export default Login;

// import React, { useState } from 'react';

// function Login(props) {
//   const username = useFormInput('');
//   const password = useFormInput('');
//   const [error, setError] = useState(null);
//   const [loading, setLoading] = useState(false);

//   // handle button click of login form
//   const handleLogin = () => {
//     props.history.push('/dashboard');
//   }

//   return (
//     <div>
//       Login<br /><br />
//       <div>
//         Username<br />
//         <input type="text" {...username} autoComplete="new-password" />
//       </div>
//       <div style={{ marginTop: 10 }}>
//         Password<br />
//         <input type="password" {...password} autoComplete="new-password" />
//       </div>
//       {error && <><small style={{ color: 'red' }}>{error}</small><br /></>}<br />
//       <input type="button" value={loading ? 'Loading...' : 'Login'} onClick={handleLogin} disabled={loading} /><br />
//     </div>
//   );
// }

// const useFormInput = initialValue => {
//   const [value, setValue] = useState(initialValue);

//   const handleChange = e => {
//     setValue(e.target.value);
//   }
//   return {
//     value,
//     onChange: handleChange
//   }
// }

// export default Login;
