import React, { useEffect, useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { Link, useNavigate } from 'react-router-dom';
import { setUser } from '../features/user/userSlice';
import axios from 'axios';

export default function Login() {

    const state = useSelector(s => s);
    const dispatch = useDispatch();
    const navigate = useNavigate();

    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const [isLoading, setIsLoading] = useState(false);

    const getUserData = async (username, password) => {
        try {
            console.log(username, password);
            var data = JSON.stringify({
                "username": username,
                "password": password
            });

            var config = {
                method: 'post',
                url: '/sql/login',
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
            alert("Please enter correct user details");
        }
    };

    useEffect(() => {
        if (state.user.user) {
            navigate('/');
        }
    }, []);
    

    const checkPassword = (str) => {
        // const re = /^(?=.*\d)(?=.*[!@#$%^&*])(?=.*[a-z])(?=.*[A-Z]).{3,}$/;
        // return re.test(str);
        return true;
    }

    const onSignInhandler = async () => {
        if (username.trim() != "" && checkPassword(password)) {
            setIsLoading(true);
            await getUserData(username, password);
            setIsLoading(false);
        } else {
            setIsLoading(false);
            alert('Username should not be empty and password must contain atleast 1 uppercase, 1 lowercase, I number, 1 special character and minimum length of 8')
        }
    }
    
    return (
        <div className='login-page container mt-4'>
            <form>
                <div className="form-outline mb-4">
                    <input type="username" id="username" className="form-control" onChange={(e) => setUsername(e.target.value)} />
                    <label className="form-label" htmlFor="username">Username</label>
                </div>

                <div className="form-outline mb-4">
                    <input type="password" id="password" className="form-control" onChange={(e) => setPassword(e.target.value)} />
                    <label className="form-label" htmlFor="password">Password</label>
                </div>


                <button type="button" className="btn btn-primary btn-block mb-4" onClick={onSignInhandler}> {!isLoading ? <span className="mx-auto"> Sign in </span> : <span className="mx-auto">Trying to Login ...</span> } </button>
            </form>
            <Link to='/signup'>New user? Sign up instead</Link>
        </div>
    )
}
