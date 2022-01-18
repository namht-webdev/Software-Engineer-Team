import React from "react";
import { Outlet } from "react-router-dom";
import ChallengeCard from "../../components/challengecard/ChallengeCard";
import Footer from "../../components/footer/Footer";
import Navbar from "../../components/navbar/Navbar";
import './home.css'
function Home() {
    return (
        <div id="home">

            <Navbar />

            <ChallengeCard />
            <div style={{ flex: "1 0 auto" }}>
                <Outlet />
            </div>

            <Footer />


        </div>
    )
}

export default Home;