import React from "react"
import ChallengeDetail from "../components/challengeDetail/ChallengeDetail";
import ChallengeJoined from "../components/challengeJoined/challengeJoined";
import CreateChallenge from "../components/createChallenge/createChallenge";
import Home from "./home/Home";
import Homepage from "./homepage/Homepage";
import Signup from "../components/signup/Signup";

import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import AuthContextProvider from "../contexts/authContext";
import Login from "../components/login/Login";
function App() {
    return (
        <AuthContextProvider>
            <Router>
                <Switch>
                    <Route exact path="/" component={Home}>
                    </Route>
                    <Route exact path="/homepage" component={Homepage}>
                    </Route>
                    <Route exact path="/signup" component={Signup}>
                    </Route>
                    <Route exact path="/login" component={Login}>
                    </Route>
                    <Route exact path="/create" component={CreateChallenge}>
                    </Route>
                    <Route exact path="/details" component={ChallengeDetail}>
                    </Route>
                    <Route exact path="/joined" component={ChallengeJoined}>
                    </Route>
                </Switch>
            </Router>
        </AuthContextProvider>
    )
}
export default App;