import React from "react"
import Footer from "../components/footer/Footer";
import Navbar from "../components/navbar/Navbar";
import Home from "./home/Home";
import Homepage from "./homepage/Homepage";

function App() {
    return(
        <div>
            {/* <Navbar />,
            <Homepage />,
            <Footer /> */}
            <Home/>,
            <Footer/>
        </div>
    )
}

export default App;