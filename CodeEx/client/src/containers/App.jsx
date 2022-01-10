import React from "react"
import Footer from "../components/footer/Footer";
import Navbar from "../components/navbar/Navbar";
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