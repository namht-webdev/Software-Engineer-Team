import ChallengeCard from "../challengecard/ChallengeCard";

function Challenge() {
    return (
        <div className="container">
            <div className="container row">
                <ChallengeCard />
                <ChallengeCard />
                <ChallengeCard />
                <ChallengeCard />
            </div>
            <div className="container row">
                <ChallengeCard />
                <ChallengeCard />
                <ChallengeCard />
                <ChallengeCard />
            </div>
        </div>
    )
}

export default Challenge;