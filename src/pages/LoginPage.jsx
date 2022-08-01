import React from "react";
import { useNavigate } from "react-router-dom";

import logo from "../assets/logo-large.png";

export default function LoginPage(props) {

    const navigate = useNavigate();
    
    const handleLogin = () => {
        navigate('/phone_verify', {
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
                <img src={logo} style={{width: '100%', marginTop: -50}} />
                <div className="form w-100">
                    <div className="form-group w-100 position-relative">
                        <label style={{
                            position: 'absolute',
                            left: 20,
                            top: 6,
                            color: '#aaa'
                        }}>Username</label>
                        <input className="form-control" style={{
                            paddingTop: 30,
                            paddingLeft: 20,
                            paddingRight: 20,
                            paddingBottom: 8
                        }} />
                    </div>
                    <div className="form-group w-100 position-relative mt-2">
                        <label style={{
                            position: 'absolute',
                            left: 20,
                            top: 6,
                            color: '#aaa'
                        }}>Password</label>
                        <input className="form-control" style={{
                            paddingTop: 30,
                            paddingLeft: 20,
                            paddingRight: 20,
                            paddingBottom: 8
                        }} type="password" />
                    </div>
                </div>
                <button style={{
                    fontSize: 18,
                    padding: '12px 50px',
                    background: 'linear-gradient(180deg, #08B395 0%, #0C977F 100%)'
                }} className="btn btn-primary mt-4" onClick={handleLogin}>
                    Continue
                </button>
            </div>
        </div>
    );
}