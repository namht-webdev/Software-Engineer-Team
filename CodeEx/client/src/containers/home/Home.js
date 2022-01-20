import React from "react";
import { Outlet } from "react-router-dom";
import ChallengeCard from "../../components/challengecard/ChallengeCard";
import Footer from "../../components/footer/Footer";
import Navbar from "../../components/navbar/Navbar";
import './home.css'
function Home() {
    return (
        <div id="home">
            <div style={{ display: "block", minHeight: "100vh", paddingBottom: "60px" }}>
                <Navbar />

                <div className="justify-content-center">
                    <Outlet />
                </div>

            </div>
            <Footer />
        </div>
    )
}

export default Home;