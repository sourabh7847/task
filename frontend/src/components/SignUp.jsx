import React, { useEffect, useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { setUser } from '../features/user/userSlice';
import axios from 'axios';

export default function Signup() {
    const state = useSelector(s => s);
    const dispatch = useDispatch();
    const navigate = useNavigate();

    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const [confirmPassword, setConfirmPassword] = useState('');
    const [isLoading, setIsLoading] = useState(false);

    const setUserData = async (username, password) => {
        try {
            console.log(username, password);
            var data = JSON.stringify({
                "username": username,
                "password": password
            });

            var config = {
                method: 'post',
                url: '/sql/signup',
                headers: { 
                  'Content-Type': 'application/json'
                },
                data : data
            };
            const response  = await axios(config);
            console.log(response);
            dispatch(setUser({ username }));
            navigate('/');
        }
        catch(err) {
            console.log(err);
            alert("Username already exists");
        }
    };

    useEffect(() => {
        if (state.user.user) {
            navigate('/');
        }
    }, []);

    const checkPassword = (str) => {
        const re = /^(?=.*\d)(?=.*[!@#$%^&*])(?=.*[a-z])(?=.*[A-Z]).{8,}$/;
        return re.test(str);
    }

    const onSignUpHandler = async () => {
        if (username.trim() != "" && checkPassword(password) && password === confirmPassword) {
            setIsLoading(true);
            await setUserData(username, password);
            setIsLoading(false);
        } else {
            alert('Username should not be empty and password must contain atleast 1 uppercase, 1 lowercase, 1 number, 1 special character and minimum length of 8')
        }
    }

    return (
        <div className='logout-page container mt-4'>
            <form>
                <div className="form-outline mb-4">
                    <input type="username" id="username" className="form-control" onChange={(e) => setUsername(e.target.value)} />
                    <label className="form-label" htmlFor="username">Username</label>
                </div>

                <div className="form-outline mb-4">
                    <input type="password" id="password" className="form-control" onChange={(e) => setPassword(e.target.value)} />
                    <label className="form-label" htmlFor="password">Password</label>
                </div>

                <div class="form-outline mb-4">
                    <input type="password" id="confirm-password" class="form-control" onChange={(e) => setConfirmPassword(e.target.value)} />
                    <label class="form-label" for="confirm-password">Confirm password</label>
                </div>

                <button type="button" class="btn btn-primary btn-block mb-4" onClick={onSignUpHandler}> {!isLoading ? <span className="mx-auto"> Sign up </span> : <span className="mx-auto">  Signing you up </span> } </button>
            </form>
        </div>
    )
}
