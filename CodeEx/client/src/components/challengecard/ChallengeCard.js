import {useState, useEffect} from 'react'
import './challengecard.css'
import { useNavigate, Link } from 'react-router-dom'
import cpp from '../../assets/cpp.png'
import python from '../../assets/python.png'
import java from '../../assets/java.png'
import js from '../../assets/js.png'


function ChallengeCard(props) {
    const navigate = useNavigate()
    const [language, setLanguage] = useState();
    useEffect(() =>{
        if(props.type === "Java"){
            setLanguage(java)
        }
        else if(props.type === "JavaScript"){
            setLanguage(js)
        }
        else if(props.type === "Python"){
            setLanguage(python)
        }
        else{
            setLanguage(cpp)
        }
    },[]);

    return (
        <div className="challenge-card mt-4">
            <div className="card border-dark" style={{borderRadius: "20px"}}>
                <img className="card-img-top" src={language} alt="Card image cap"/>
                <div className="card-body" style={{backgroundColor: "#242730", color:"white"}}>
                    <h4 className="card-title">{props.title}</h4>
                    <p className="card-text text-justify">{props.description}</p>
                    <div>
                        <span className="pull-left" id='teams'>
                            {props.numberTakeIn} participants
                        </span>
                        <span className="pull-right" id="votes">
                            {props.numberVote} votes
                        </span>
                    </div>

                </div>
                <div className="text-center" style={{backgroundColor: "#242730", borderRadius: "0 0 20px 20px"}}>
                    <button onClick={() => navigate("challengedetail")} className="btn btn-primary">View</button>
                </div>
            </div>
        </div>

    )
}

export default ChallengeCard;