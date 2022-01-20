import Footer from '../footer/Footer';
import Navbar from '../navbar/Navbar';
import './createChallenge.css'

function CreateChallenge() {
    return (
        <div>
            <div id='main-content' >
                <div className='container col-md-10'>
                    <div className="form-group">
                        <label for="challengeName">Challenge name</label>
                        <input type="text" className="form-control input-field" id="challengeName" placeholder="Name" />
                    </div>
                    <div className="form-group">
                        <label for="exampleFormControlSelect1">Language</label>
                        <select className="form-control input-field" id="challenge">
                            <option>Python</option>
                            <option>C/C++</option>
                            <option>Java</option>
                            <option>JavaScript</option>
                            <option>Other</option>
                        </select>
                    </div>
                    <div className="form-group">
                        <label for="challengeDateStart">Start date</label>
                        <input type="date" className='form-control input-field' id='challengeDateStart' />
                    </div>
                    <div className="form-group">
                        <label for="challengeDateEnd">End date</label>
                        <input type="date" className='form-control input-field' id='challengeDateEnd' />
                    </div>
                    <div className="form-group">
                        <label for="challengeDescription">Description</label>
                        <textarea className="form-control input-field" id="challengeDescription" rows="3" resize="None"></textarea>
                    </div>
                    <div className='form-group'>
                        <label for>Input: </label>
                        <input type="text" id='challengeInputDes' className='form-control input-field' />
                    </div>
                    <div className='form-group'>
                        <label for>Output: </label>
                        <input type="text" id='challengeOutputDes' className='form-control input-field' />
                    </div>
                    <div className="form-group">
                        <label for="challengeDataTest">Data (optional): </label>
                        <input type="file" class="form-control-file" id="challengeDataTest " />
                    </div>
                    <button type='submit' className='btn btn-primary'>
                        Create
                    </button>
                </div>
            </div>

        </div>
    )
}

export default CreateChallenge;