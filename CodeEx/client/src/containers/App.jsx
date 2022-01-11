import React from "react"
import ChallengeDetail from "../components/challengeDetail/ChallengeDetail";
import ChallengeJoined from "../components/challengeJoined/challengeJoined";
import CreateChallenge from "../components/createChallenge/createChallenge";
// import { BrowserRouter as Router, Route, Switch, Link, NavLink } from 'react-router-dom'
import Home from "./home/Home";
import Homepage from "./homepage/Homepage";
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import AuthContextProvider from "../contexts/authContext";
import Signup from "../components/signup/Signup";

function App() {
    return (
        <AuthContextProvider>
            <Router>
                <Routes>
                    <Route exact path="/" element={<Home />}>
                    </Route>
                    <Route exact path="/login" element={<Homepage />}>
                    </Route>
                    <Route exact path="/signup" element={<Signup />}>
                    </Route>
                </Routes>
            </Router>
        </AuthContextProvider>
    )
}
export default App;