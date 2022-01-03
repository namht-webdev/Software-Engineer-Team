import React from "react";
import ChallengeCard from "../../components/challengecard/ChallengeCard";
import Navbar from "../../components/navbar/Navbar";
import './home.css'
function Home() {
    return(
        <div id="home">
            <Navbar/>
            <div className="container">
                <div className="row">
                    <ChallengeCard/>
                    <ChallengeCard/>
                    <ChallengeCard/>
                    <ChallengeCard/>
                </div>
            </div>
            <div className="container">
                <div className="row">
                    <ChallengeCard/>
                    <ChallengeCard/>
                    <ChallengeCard/>
                    <ChallengeCard/>
                </div>
            </div>
        </div>
    )
}

export default Home;