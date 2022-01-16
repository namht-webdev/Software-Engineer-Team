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
                            <li className="breadcrumb-item active" aria-current="page" ><a href="#">Tổng quan</a></li>
                            <li className="breadcrumb-item"><a href="#">Thảo luận</a></li>
                            <li className="breadcrumb-item"><a href='#'>Bảng xếp hạng</a></li>
                        </ol>
                    </nav>
                    <div>
                        <label className='font-weight-bold'>Mô tả: </label>
                        <p id='challenge-description' className='text-justify'>
                            {challengeDescription}
                        </p>
                    </div>
                    <div>
                        <label className='font-weight-bold'>
                            Mô tả dữ liệu:
                        </label>
                        <p className='text-justify'>
                            {challengeDataDetail}
                        </p>
                    </div>
                    <div>
                        {/* <div data-pym-src="https://www.jdoodle.com/embed/v0/4hZi"></div> */}
                        <iframe
                            frameBorder="0"
                            height="450px"
                            src="https://onecompiler.com/embed/"
                            width="100%"
                        ></iframe>
                    </div>
                    <button className='btn btn-primary' type='submit'>Nộp bài</button>
                </div>
            </div>

        </div>
    )
}

export default ChallengeJoined;