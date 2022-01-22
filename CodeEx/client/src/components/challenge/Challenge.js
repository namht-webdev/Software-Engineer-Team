import ChallengeCard from "../challengecard/ChallengeCard";
import { ChallengeContext } from '../../contexts/challengeContext';
import { useContext } from 'react';
function Challenge() {

    const { challenges } = useContext(ChallengeContext);
    return (
        <div className="container">
            <div className="row">
                {challenges.map((challenge, index) => {
                    return (
                        <div key={index} className="col-3">
                            <ChallengeCard
                                title={challenge.title}
                                description={challenge.description}
                                numberTakeIn={challenge.numberTakeIn}
                                numberVote={challenge.numberVote}
                                type={challenge.type}
                            />
                        </div>
                    )
                })}
            </div>
        </div>
    )
}

export default Challenge;