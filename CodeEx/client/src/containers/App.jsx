import React from "react"
import ChallengeDetail from "../components/challengeDetail/ChallengeDetail";
import ChallengeJoined from "../components/challengeJoined/challengeJoined";
import CreateChallenge from "../components/createChallenge/createChallenge";

import Home from "./home/Home";
import Homepage from "./homepage/Homepage";

function App() {
    return (
        <div>
            {/* <Homepage /> */}
            {/* <Home /> */}
            {/* <ChallengeDetail /> */}
            {/* <CreateChallenge /> */}
            <ChallengeJoined />
        </div>
    )

}
export default App;