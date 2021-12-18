import React from "react"
import Footer from "../components/footer/Footer";
import Navbar from "../components/navbar/Navbar";
import Homepage from "./homepage/Homepage";
import SignIn from "../forms/signin/SignIn";

function App() {
    return(
        <div>
            <Navbar />,
            <Homepage />,
            <Footer />
        </div>
    )
}

export default App;