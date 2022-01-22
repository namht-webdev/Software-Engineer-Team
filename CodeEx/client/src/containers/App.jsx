import React from "react"
import ChallengeDetail from "../components/challengeDetail/ChallengeDetail";
import ChallengeJoined from "../components/challengeJoined/challengeJoined";
import CreateChallenge from "../components/createChallenge/createChallenge";
import Home from "./home/Home";
import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import Signup from "../components/signup/Signup";
import NotFound from "../components/notfound/Noufound";
import AuthContextProvider from "../contexts/authContext";
import Login from "../components/login/Login";
import Userinfo from "../components/userinfo/Userinfo";
import ChallengeContextProvider from "../contexts/challengeContext";
import MyChallenge from "../components/myChallenge/myChallenge";
import Waiting from "../components/waitingChallenge/waiting";
import Challenge from "../components/challenge/Challenge";
function App() {
    return (
        <AuthContextProvider>
            <ChallengeContextProvider>
                <Router>
                    <Routes>
                    <Route exact path="/" element={<Navigate replace to="/login" />} />
                    <Route exact path="/login" element={<Login />} />
                    <Route exact path="/signup" element={<Signup />} />

                    <Route exact path="home" element={<Home />}>
                        {/* <Challenge /> */}
                        <Route path="" element={<Challenge />} />
                        <Route path="challengedetail" element={<ChallengeDetail />} />
                        <Route path="createchallenge" element={<CreateChallenge />} />
                        <Route path="challengejoined" element={<ChallengeJoined />} />
                        {/* <Route path="user" element={<Navigate />} /> */}
                        <Route path="user/info" element={<Userinfo />} />
                        <Route path="user/challenge" element={<MyChallenge />} />
                        <Route path="waiting" element={<Waiting />} />
                    </Route>

                    <Route path="*" element={<NotFound />} />
                    </Routes>

                </Router>
            </ChallengeContextProvider>
        </AuthContextProvider>
    )
}
export default App;