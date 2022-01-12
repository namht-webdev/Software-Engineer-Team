import React from "react"
import ChallengeDetail from "../components/challengeDetail/ChallengeDetail";
import ChallengeJoined from "../components/challengeJoined/challengeJoined";
import CreateChallenge from "../components/createChallenge/createChallenge";
// import { BrowserRouter as Router, Route, Switch, Link, NavLink } from 'react-router-dom'
import Home from "./home/Home";
import Homepage from "./homepage/Homepage";
import { BrowserRouter as Router, Routes, Route, Outlet } from 'react-router-dom';
import AuthContextProvider from "../contexts/authContext";
import Signup from "../components/signup/Signup";
import NotFound from "../components/notfound/Noufound";

function App() {
    return (
        <AuthContextProvider>
            <Router>
                <Routes>
                    <Route path="/" element={<Homepage />} >
                        {/* <Route path="login" element={<Login />} />
                        <Route path="signup" element={<Signup />} /> */}
                    </Route>

                    <Route path="login" element={<Homepage />} />

                    <Route path="home" element={<Home />}>
                        {/* <Route path="challengedetail" element={<ChallengeDetail />} /> */}
                        {/* <Route path="createchallenge" element={<CreateChallenge />} /> */}
                    </Route>
                    {/* <Route path="signup" element={<Signup />} /> */}
                    <Route path="*" element={<NotFound />} />
                </Routes>

            </Router>
        </AuthContextProvider>
    )
}
export default App;