import React from "react"
import ChallengeDetail from "../components/challengeDetail/ChallengeDetail";
import ChallengeJoined from "../components/challengeJoined/challengeJoined";
import CreateChallenge from "../components/createChallenge/createChallenge";
import { BrowserRouter as Router, Route, Switch, Link, NavLink } from 'react-router-dom'
import Home from "./home/Home";
import Homepage from "./homepage/Homepage";

function App() {
    return (
        // <Router>
        //     <Route path="/" exact component={Homepage} />
        //     <Route path="/home" component={Home} />
        // </Router>
        <div>
            {/* <Homepage /> */}
            {/* <Home /> */}
            {/* <ChallengeDetail /> */}
            {/* <CreateChallenge /> */}
            <ChallengeJoined />
        </div>

    )

}
export default App;