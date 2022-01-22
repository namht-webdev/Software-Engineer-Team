import ChallengeCard from "../challengecard/ChallengeCard";
import { ChallengeContext } from '../../contexts/challengeContext';
import { useContext } from 'react';
function Challenge() {

    const { challenges } = useContext(ChallengeContext);
    return (
        <div className="container">
            <div className="row">
                {
                challenges !== undefined && (challenges.map((challenge, index) => {
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

export default Challenge;