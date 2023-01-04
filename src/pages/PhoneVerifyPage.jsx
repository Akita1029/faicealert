import React from "react";
import { useNavigate } from "react-router-dom";

import logo from "../assets/logo-large.png";

export default function PhoneVerifyPage(props) {

    const navigate = useNavigate();
    
    const handleLogin = () => {
        navigate('/dashboard', {
            replace: true
        });
    };

    return (
        <div
            style={{
                backgroundColor: '#E1E3E6',
                width: '100%',
                height: '100vh',
                display: 'flex',
                flexDirection: 'column',
                justifyContent: 'center',
                alignItems: 'center'
            }}
        >
            <div style={{
                width: 400,
                display: 'flex',
                flexDirection: 'column',
                justifyContent: 'flex-start',
                alignItems: 'center'
            }}>
                <img src={logo} style={{width: '90%'}} />
                <span>A One Time Passcode has been sent to the mobile</span>
                <span>number ending in 7049</span>
                <span>Enter it below within 2 minutes</span>
                <div className="form w-100  row justify-content-center, align-items-center, mt-3">
                    <input className="form-control col ms-3" />
                    <input className="form-control col ms-3" />
                    <input className="form-control col ms-3" />
                    <input className="form-control col ms-3" />
                    <input className="form-control col ms-3" />
                    <input className="form-control col ms-3" />
                    <input className="form-control col ms-3" />
                </div>
                <button style={{
                    fontSize: 18,
                    padding: '12px 50px',
                    background: 'linear-gradient(180deg, #08B395 0%, #0C977F 100%)'
                }} className="btn btn-primary mt-4" onClick={handleLogin}>
                    Log In
                </button>
            </div>
        </div>
    );
}