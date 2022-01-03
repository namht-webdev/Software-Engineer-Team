import react from 'react'
import './challengecard.css'


const value = 0

function ChallengeCard() {
    return(
        <div className="challenge-card col-md-3">
            <div className="card border-dark rounded-5">
                {/* <img className="card-img-top" src="..." alt="Card image cap"/> */}
                <div className="card-body">
                    <h4 className="card-title">Card title</h4>
                    <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                    <div className="row">
                        <span className="align-left">
                            {value} Team
                        </span>
                        <span className="align-right">
                            {value} votes
                        </span>
                    </div>
                    <div className="text-center">
                        <a href="#" className="btn btn-primary">Enroll</a>
                    </div>
                    
                </div>
            </div>
        </div>
        
    )
}

export default ChallengeCard;