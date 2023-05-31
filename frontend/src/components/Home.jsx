import React, { useEffect } from 'react'
import { useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import MainWrapper from './MainWrapper';

const Home = () => {
    const state = useSelector(s => s);
    const navigate = useNavigate();

    useEffect(() => {
        if (!state.user.user) {
            navigate('/login')
        }
    })
    return (
        <div>
            <MainWrapper />
        </div>
    );
}

export default Home;
