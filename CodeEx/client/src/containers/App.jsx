import React from "react"
import ChallengeDetail from "../components/challengeDetail/ChallengeDetail";
import ChallengeJoined from "../components/challengeJoined/challengeJoined";
import CreateChallenge from "../components/createChallenge/createChallenge";
import Home from "./home/Home";
import { BrowserRouter as Router, Routes, Route, Outlet } from 'react-router-dom';
import Signup from "../components/signup/Signup";
import NotFound from "../components/notfound/Noufound";
import AuthContextProvider from "../contexts/authContext";
import Login from "../components/login/Login";
function App() {
    return (
        <AuthContextProvider>
            <Router>
                <Routes>
                    {/* <Route path="login" element={<Login />} />
                        <Route path="signup" element={<Signup />} /> */}
                    <Route exact path="/" element={<Home />} />
                    <Route exact path="/login" element={<Login />} />
                    <Route exact path="/signup" element={<Signup />} />

                    <Route exact path="/home/*" element={<Home />}>
                        <Route path="challengedetail" element={<ChallengeDetail />} />
                        <Route path="createchallenge" element={<CreateChallenge />} />
                        <Route path="challengejoined" element={<ChallengeJoined />} />
                    </Route>
                    {/* <Route path="/home/challengedetail" element={<ChallengeDetail />} />
                    <Route path="/home/createchallenge" element={<CreateChallenge />} /> */}

                    <Route path="*" element={<NotFound />} />
                </Routes>

            </Router>
        </AuthContextProvider>
    )
}
export default App;