import React, { useState } from 'react'
import { useNavigate } from 'react-router';
import './challengedetail.css'

function ChallengeDetail(props) {
    // challengeName = "Challenge Name"
    const navigate = useNavigate();
    const [challengeName, setChalName] = useState("Challenge Name")
    const [challengeDescription, setChalDes] = useState("Some quick example text to build on the card title and make up the bulk of the card's content.Some quick example text to build on the card title and make up the bulk of the card's content.Some quick example text to build on the card title and make up the bulk of the card's content.Some quick example text to build on the card title and make up the bulk of the card's content.Some quick example text to build on the card title and make up the bulk of the card's content.Some quick example text to build on the card title and make up the bulk of the card's content.Some quick example text to build on the card title and make up the bulk of the card's content.Some quick example text to build on the card title and make up the bulk of the card's content.Some quick example text to build on the card title and make up the bulk of the card's content.Some quick example text to build on the card title and make up the bulk of the card's content.Some quick example text to build on the card title and make up the bulk of the card's content.Some quick example text to build on the card title and make up the bulk of the card's content.")
    const [username, setUsername] = useState("TuKi")
    const [challengeDateStart, setChalDateStart] = useState("01/01/2000")
    const [challengeDateEnd, setChalDateEnd] = useState("01/01/2022")
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
                        <label className='font-weight-bold'>Người tạo: </label>
                        <span> {username}</span>
                    </div>
                    <div>
                        <label className='font-weight-bold'>Ngày tạo: </label>
                        <span> {challengeDateStart}</span>
                    </div>

                    <div>
                        <label className='font-weight-bold'>Ngày kết thúc: </label>
                        <span> {challengeDateEnd}</span>
                    </div>
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
                    <button onClick={() => navigate("../challengejoined")} className='btn btn-primary' type='submit'>Tham gia</button>
                </div>
            </div>

        </div>
    )
}

export default ChallengeDetail;