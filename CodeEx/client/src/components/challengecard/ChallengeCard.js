import react from 'react'
import './challengecard.css'


const value = 0

function ChallengeCard() {
    return (
        <div className="challenge-card col-md-3">
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
                    <a href="#" className="btn btn-primary">Xem</a>
                </div>
            </div>
        </div>

    )
}

export default ChallengeCard;