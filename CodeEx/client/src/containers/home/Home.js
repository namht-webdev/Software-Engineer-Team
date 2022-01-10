import React from "react";
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
                <script src="https://www.jdoodle.com/assets/jdoodle-pym.min.js" type="text/javascript">
                </script>
                <div data-pym-src=
                    "https://www.jdoodle.com/embed/v0/2IhG?stdin=1&arg=0">

                </div>

            </div>
            <Footer />
        </div>
    )
}

export default Home;