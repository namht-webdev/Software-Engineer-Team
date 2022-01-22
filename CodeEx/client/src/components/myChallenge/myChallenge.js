import ChallengeCard from "../challengecard/ChallengeCard";
import { ChallengeContext } from '../../contexts/challengeContext';
import { useContext } from 'react';
function MyChallenge() {

    const { mychallenges } = useContext(ChallengeContext);
    return (
        <div className="container">
            <div className="row">
                {
                mychallenges !== undefined && (mychallenges.map((challenge, index) => {
                    return (
                        <div key={index} className="col-3">
                            <ChallengeCard
                                title={challenge.title}
                                description={challenge.description}
                                numberTakeIn={challenge.numberTakeIn}
                                numberVote={challenge.numberVote}
                                type={challenge.type}
                                creator={challenge.username}
                                date={challenge.dayStart}
                                dayEnd={challenge.dayEnd}
                                id={challenge._id}
                            />
                        </div>
                    )
                }))}
            </div>
        </div>
    )
}

export default MyChallenge;