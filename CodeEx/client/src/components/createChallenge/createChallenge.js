import Footer from '../footer/Footer';
import Navbar from '../navbar/Navbar';
import {Link, useNavigate} from 'react-router-dom';
import { useState, useContext } from 'react';
import { ChallengeContext } from '../../contexts/challengeContext'
import './createChallenge.css';
import img from '../../assets/imgcr.png';
import { Spinner } from 'react-bootstrap';

function CreateChallenge() {
    const redirect = useNavigate();
    const { create } = useContext(ChallengeContext);
    const [message, setMessage] = useState('');
    const [spinner, setSpinner] = useState(false)
    const [challenge, setChallenge] = useState({
        userId: localStorage.getItem('userId'),
        title: '',
        type: '',
        dayStart: '',
        dayEnd: '',
        description: '',
        result: ''
    })

    function getInforChallenge(event) {
        setChallenge({ ...challenge, [event.target.name]: event.target.value })
    }

    function checkInfor() {
        if (!challenge.title || !challenge.type || !challenge.dayStart || !challenge.dayEnd || !challenge.description || !challenge.result) {
            setMessage('Please fill in all required information!')
            return false;
        }
        if (Date.parse(challenge.dayStart) > Date.parse(challenge.dayEnd)) {
            setMessage('Starting date must be greater than or equal to day ending date');
            return false;
        }
        if (Date.parse(challenge.dayStart) > Date.now()) {
            setMessage('Starting date must be greater than or equal to today');
            return false;
        }
        return true;
    }

    const createChallenge = async function (event) {
        event.preventDefault();
        if (checkInfor()) {

            try {
                const response = await create(challenge);
                if(response.status === 200) {
                    setSpinner(true);
                    if(response.data.success) {
                        alert('Your challenge was created successfully!');
                        redirect('/home');
                    }
                }
                
            } catch (error) {
                return response;
            }
        }
    }

    return (
        <div>
            <div className="conimgcr">
                <p className="pncr">CodeEx</p>
                <p className="slcr">Code your excercises</p>
                <img className="imgcr" src={img} />
            </div>
            <div id='main-content' className="crform">

                <div className='container col-md-10 mt-5'>
                    <div className="form-group">
                        <label htmlFor="challengeName">Challenge name</label>
                        <input onChange={getInforChallenge} name="title" type="text" className="form-control input-field" id="challengeName" placeholder="Name" />
                    </div>
                    <div className="form-group">
                        <label htmlFor="exampleFormControlSelect1">Language</label>
                        <select onChange={getInforChallenge} name="type" className="form-control input-field" id="challenge">
                            <option> --- Choose a language --- </option>
                            <option>Python</option>
                            <option>C/C++</option>
                            <option>Java</option>
                            <option>JavaScript</option>
                            <option>Other</option>
                        </select>
                    </div>
                    <div className="form-group">
                        <label htmlFor="challengeDateStart">Start date</label>
                        <input onChange={getInforChallenge} name="dayStart" type="date" className='form-control input-field' id='challengeDateStart' />
                    </div>
                    <div className="form-group">
                        <label htmlFor="challengeDateEnd">End date</label>
                        <input onChange={getInforChallenge} name="dayEnd" type="date" className='form-control input-field' id='challengeDateEnd' />
                    </div>
                    <div className="form-group">
                        <label htmlFor="challengeDescription">Description</label>
                        <textarea onChange={getInforChallenge} name="description" className="form-control input-field" id="challengeDescription" rows="3" resize="None"></textarea>
                    </div>
                    <div className='form-group'>
                        <label>Output: </label>
                        <input onChange={getInforChallenge} name="result" type="text" id='challengeOutputDes' className='form-control input-field' />
                    </div>
                    {spinner && (
                            <Spinner animation="border" role="status">
                                <span className="visually-hidden">Loading...</span>
                            </Spinner>)}
                    <p className="text-center text-danger fw-bold">{message}</p>
                    <button onClick={createChallenge} type='submit' className='btn btn-primary btncr mb-4'>
                        Create
                    </button>
                </div>
            </div>

        </div>
    )
}

export default CreateChallenge;