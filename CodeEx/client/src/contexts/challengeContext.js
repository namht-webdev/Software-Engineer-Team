import React, { createContext, useState, useEffect } from 'react'
import axios from 'axios';
import { apiURL } from './constants';
export const ChallengeContext = createContext();

function ChallengeContextProvider(props) {
    const [challenges, setChallenge] = useState([]);
    const create = async (infor) => {
        try {
            const res = await axios.post(`${apiURL}/post/create`, infor);
            return res;
        } catch (error) {
            return error;
        }
    }
    useEffect(async () => {
        try {
            await axios.get(`${apiURL}/post/index`)
                .then((response) => { setChallenge(response.data.post) })
                .catch((error) => { return error })
        } catch (error) {
            return error;
        }
    }, [setChallenge]);

    const ChallengeContextData = {
        create,
        challenges,
    }

    return (
        <ChallengeContext.Provider value={ChallengeContextData}>
            {props.children}
        </ChallengeContext.Provider>
    )
}
export default ChallengeContextProvider;