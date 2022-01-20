import React, { useState } from 'react'
import Footer from '../footer/Footer'
import Navbar from '../navbar/Navbar'
import './challengejoined.css'

function ChallengeJoined() {
    const [challengeName, setChalName] = useState("Challenge Name")
    const [challengeDescription, setChalDes] = useState("Some quick example text to build on the card title and make up the bulk of the card's content.Some quick example text to build on the card title and make up the bulk of the card's content.Some quick example text to build on the card title and make up the bulk of the card's content.Some quick example text to build on the card title and make up the bulk of the card's content.Some quick example text to build on the card title and make up the bulk of the card's content.Some quick example text to build on the card title and make up the bulk of the card's content.Some quick example text to build on the card title and make up the bulk of the card's content.Some quick example text to build on the card title and make up the bulk of the card's content.Some quick example text to build on the card title and make up the bulk of the card's content.Some quick example text to build on the card title and make up the bulk of the card's content.Some quick example text to build on the card title and make up the bulk of the card's content.Some quick example text to build on the card title and make up the bulk of the card's content.")
    const [challengeDataDetail, setChalDataDetail] = useState("Some quick example text to build on the card title and make up the bulk of the card's content.")
    return (
        <div>
            <div id='main-content'>
                <div className='container col-md-10'>
                    <div id='challenge-name'>
                        {challengeName}
                    </div>
                    <nav aria-label="breadcrumb">
                        <ol className="breadcrumb">
                            <li className="breadcrumb-item active" aria-current="page" ><a href="#">Overview</a></li>
                            <li className="breadcrumb-item"><a href="#">Discuss</a></li>
                            <li className="breadcrumb-item"><a href='#'>Ranking</a></li>
                        </ol>
                    </nav>
                    <div>
                        <label className='font-weight-bold'>Description: </label>
                        <p id='challenge-description' className='text-justify'>
                            {challengeDescription}
                        </p>
                    </div>
                    <div>
                        <label className='font-weight-bold'>
                            Data description:
                        </label>
                        <p className='text-justify'>
                            {challengeDataDetail}
                        </p>
                    </div>
                    <div>
                        <iframe
                            frameBorder="0"
                            height="450px"
                            src="https://onecompiler.com/embed/?hideNew=true"
                            width="100%"

                        ></iframe>
                    </div>
                    <button className='btn btn-primary' type='submit'>Submit</button>
                </div>
            </div>

        </div>
    )
}

export default ChallengeJoined;