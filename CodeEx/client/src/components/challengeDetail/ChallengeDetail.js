import React, { useContext, useEffect } from 'react'
import './challengedetail.css'
import { ChallengeContext } from '../../contexts/challengeContext'
import axios from 'axios';
import { apiURL } from '../../contexts/constants';

function ChallengeDetail() {
    const { detail } = useContext(ChallengeContext);
    const accept = async () => {
        try {
            console.log(detail.id, detail.title);
            await axios.patch(`${apiURL}/post/accept/${detail.id}`)
                .then(() => { window.location.assign('../home') })
                .catch(err => console.log(err))
        } catch (error) {
            return error;
        }
    }
    return (
        <div>
            <div id='main-content'>
                <div className='container col-md-10'>
                    <div id='challenge-name'>
                        {detail.title}
                    </div>
                    <nav aria-label="breadcrumb">
                        <ol className="breadcrumb">
                            <li className="breadcrumb-item active" aria-current="page" ><a href="#">Overview</a></li>
                            <li className="breadcrumb-item"><a href="#">Discuss</a></li>
                            <li className="breadcrumb-item"><a href='#'>Ranking</a></li>
                        </ol>
                    </nav>
                    <div>
                        <label className='font-weight-bold'>Creator: </label>
                        <span> {detail.creator}</span>
                    </div>
                    <div>
                        <label className='font-weight-bold'>Starting date: </label>
                        <span> {new Date(detail.date).getDate() + '-' + (new Date(detail.date).getMonth() + 1) + '-' + new Date(detail.date).getFullYear()}</span>
                    </div>

                    <div>
                        <label className='font-weight-bold'>Endind date: </label>
                        <span> {new Date(detail.dayEnd).getDate() + '-' + (new Date(detail.dayEnd).getMonth() + 1) + '-' + new Date(detail.dayEnd).getFullYear()}</span>
                    </div>
                    <div>
                        <label className='font-weight-bold'>Description: </label>
                        <span id='challenge-description' className='text-justify ml-3'>
                            {detail.description}
                        </span>
                    </div>
                    <button onClick={() => navigate("../challengejoined")} className='btn btn-primary' type='submit'>Enroll</button>
                    <p></p>
                    {detail.status === false ? (<button onClick={accept} style={{ position: "relative", left: "50%", top: "70%" }} className="btn btn-warning btn-status">Accept</button>) : ''}
                </div>
            </div>

        </div>
    )
}

export default ChallengeDetail;