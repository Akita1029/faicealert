import React from "react";
import { useNavigate } from "react-router-dom";

const NavItem = (props) => {
    
    return (
        <li className="nav-item mb-3" style={{
            display: 'flex',
            flexDirection: 'row',
            justifyContent: 'flex-start',
            alignItems: 'center',
            cursor: 'pointer',
        }} onClick={props.onClick}>
            <i className={props.iconName} style={{fontSize: '1.2rem'}}/>
            <span className="ms-3 flex-grow-1" style={{fontSize: '1.2rem'}}>{props.label}</span>
            {props.badge ? (
                <span className="badge rounded-pill" style={{
                    background: 'linear-gradient(180deg, #6989FE 0%, #3C64F4 100%)'
                }}>{props.badge}</span>
            ) : (
                <i className="bi bi-list" style={{fontSize: '1.4rem', color: '#aaa'}}/>
            )}
        </li>
    );
};

export default function MenuPop(props){
    
    const navigate = new useNavigate();
    const handleMenu = (data) => {
        navigate(`/${data}`);
    };


    const [MenuStatus, setMenuStatus] = React.useState(Boolean, false);

    return(
            <div>
                <div className="p-2 ms-2 rounded" style={{
                    display: 'flex',
                    flexDirection: 'row',
                    justifyContent: 'flex-start',
                    alignItems: 'center',
                    cursor: 'pointer',
                    backgroundColor: "#fff"
                }}>
                    <i className="bi bi-house ms-2" style={{fontSize: '1.2rem'}}></i>
                    <span className="ms-3 flex-grow-1" style={{fontSize: '1.2rem'}}>Dashboard</span>
                    <i className="bi bi-list" style={{fontSize: '1.4rem', color:"#aaa", point:"cursor"}} onClick={() => setMenuStatus(!MenuStatus)}></i>
                </div>
                { MenuStatus===true && (
                    <div className="mt-2">
                        <div className="p-2 ms-2 rounded" style={{
                            backgroundColor:"#fff"
                        }}>
                            <div className="mt-4 mb-2 ms-2 me-2">
                                <ul className="nav flex-column">
                                    <NavItem label="Dashboard" iconName="bi bi-house" onClick={() => handleMenu('dashboard')}/>
                                    <NavItem label="Stores" iconName="bi bi-cart" badge={5} onClick={() => handleMenu('stores')}/>
                                    <NavItem label="Person of Interest" iconName="bi bi-person" badge={10} onClick={() => handleMenu('poi')}/>
                                    <NavItem label="My Reports" iconName="bi bi-file-text" onClick={() => handleMenu('reports')}/>
                                    <NavItem label="Manage Users" iconName="bi bi-exclamation-triangle" onClick={() => handleMenu('users')}/>
                                    <NavItem label="Configuration" iconName="bi bi-gear" onClick={() => handleMenu('settings')}/>
                                </ul>
                            </div>
                        </div>
                    </div>
                )}
            </div>
            
    );
}