import React from "react";
import { Outlet } from "react-router";
import ChallengeCard from "../../components/challengecard/ChallengeCard";
import Footer from "../../components/footer/Footer";
import Navbar from "../../components/navbar/Navbar";
import './home.css'
function Home() {
    return (
        <div id="home">
            <Navbar />
            <div className="container">
                <div className="row">
                    <ChallengeCard />
                    <ChallengeCard />
                    <ChallengeCard />
                    <ChallengeCard />
                </div>
            </div>
            <div className="container">
                <div className="row">
                    <ChallengeCard />
                    <ChallengeCard />
                    <ChallengeCard />
                    <ChallengeCard />
                </div>
            </div>
            <div className="container">
                <div className="row">
                    <ChallengeCard />
                    <ChallengeCard />
                    <ChallengeCard />
                    <ChallengeCard />
                </div>
            </div>
            <Footer />
        </div>
    )
}

export default Home;