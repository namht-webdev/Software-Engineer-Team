import React from "react"
import ChallengeDetail from "../components/challengeDetail/ChallengeDetail";
import ChallengeJoined from "../components/challengeJoined/challengeJoined";
import CreateChallenge from "../components/createChallenge/createChallenge";

import Home from "./home/Home";
import Homepage from "./homepage/Homepage";
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import AuthContextProvider from "../contexts/authContext";
import Signup from "../components/signup/Signup";

function App() {
    return (
        <AuthContextProvider>
            <Router>
                <Switch>
                    <Route exact path="/" component={Home}>
                    </Route>
                    <Route exact path="/login" component={Homepage}>
                    </Route>
                    <Route exact path="/signup" component={Signup}>
                    </Route>
                </Switch>
            </Router>
        </AuthContextProvider>
    )
}
export default App;