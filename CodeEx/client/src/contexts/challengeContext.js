import React, { createContext, useState, useEffect } from 'react'
import axios from 'axios';
import { apiURL } from './constants';
export const ChallengeContext = createContext();

function ChallengeContextProvider(props) {
    const [detail, setDetail] = useState();
    const [challenges, setChallenge] = useState([]);
    const [waiting, setWaiting] = useState([]);
    const [mychallenges, setMyChallenges] = useState([]);
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
            await axios.get(`${apiURL}/post/mine/${localStorage.getItem('userId')}`)
                .then((response) => { setMyChallenges(response.data.post) })
                .catch((error) => { return error })
        } catch (error) {
            return error;
        }
    }, [setMyChallenges]);



    useEffect(async () => {
        try {
            await axios.get(`${apiURL}/post/index`)
                .then((response) => { setChallenge(response.data.post.reverse()) })
                .catch((error) => { return error })
        } catch (error) {
            return error;
        }
    }, [setChallenge]);

    useEffect(async () => {
        try {

            await axios.get(`${apiURL}/post/waiting`)
                .then((response) => { setWaiting(response.data.post) })
                .catch((error) => { return error })
        } catch (error) {
            return error;
        }

    }, [setWaiting]);

    const ChallengeContextData = {
        create,
        challenges,
        detail,
        setDetail,
        mychallenges,
        waiting
    }

    return (
        <ChallengeContext.Provider value={ChallengeContextData}>
            {props.children}
        </ChallengeContext.Provider>
    )
}
export default ChallengeContextProvider;