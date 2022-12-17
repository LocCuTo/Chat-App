import React, { useState } from 'react';
import { useNavigate, Link } from 'react-router-dom';
import { signInWithEmailAndPassword } from 'firebase/auth';
import { auth } from '../firebase';

const Login = () => {
    const navigate = useNavigate();
    const [error, setError] = useState(false);
    const handleSubmit = async (e) => {
        e.preventDefault();
        const email = e.target[0].value;
        const password = e.target[1].value;

        try {
            await signInWithEmailAndPassword(auth, email, password);
            navigate('/');
        } catch (error) {
            setError(true);
            console.log(error);
        }
    };

    return (
        <div className="formContainer">
            <div className="formWrapper">
                <span className="logo">WTF chat</span>
                <span className="title">Login</span>
                <form onSubmit={handleSubmit}>
                    <input type="email" placeholder="email" autoComplete="username" />
                    <input type="password" placeholder="password" autoComplete="current-password" />
                    <button>Sign in</button>
                    {error && <span>Something went wrong!!!</span>}
                </form>
                <p>
                    You don't have an account ? <Link to="/register">Register</Link>
                </p>
            </div>
        </div>
    );
};

export default Login;
