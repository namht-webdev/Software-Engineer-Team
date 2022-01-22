import ChallengeCard from "../challengecard/ChallengeCard";
import { ChallengeContext } from '../../contexts/challengeContext';
import { useContext, useState } from 'react';
function Waiting() {
    const { waiting } = useContext(ChallengeContext);
    return (
        <div className="container">
            <div className="row">
                {
                    waiting !== undefined ? (waiting.map((challenge, index) => {
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
                                    status={challenge.status}
                                    id={challenge._id}
                                />
                            </div>
                        )
                    })): (<p style={{fontWeight: "bold", fontSize: "2em"}} className="text-primary">No challenge awaits!</p>)
                }
            </div>
        </div>
    )
}

export default Waiting;