import react from 'react'
import './challengecard.css'
import { useNavigate, Link } from 'react-router-dom'
import ChallengeDetail from '../challengeDetail/ChallengeDetail'
import { Button } from 'react-bootstrap'

const value = 0

function ChallengeCard() {
    const navigate = useNavigate()

    return (
        <div className="challenge-card col-md-3 mt-4">
            <div className="card border-dark rounded-5">
                {/* <img className="card-img-top" src="..." alt="Card image cap"/> */}
                <div className="card-body">
                    <h4 className="card-title">Card Title</h4>
                    <p className="card-text text-justify">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                    <div>
                        <span className="pull-left" id='teams'>
                            {value} Team
                        </span>
                        <span className="pull-right" id="votes">
                            {value} votes
                        </span>
                    </div>

                </div>
                <div className="text-center">
                    <button onClick={() => navigate("challengedetail")} className="btn btn-primary">View</button>
                </div>
            </div>
        </div>

    )
}

export default ChallengeCard;