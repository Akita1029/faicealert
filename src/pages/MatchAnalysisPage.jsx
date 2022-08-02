import React from "react";

import MenuPop from "../components/MenuPop";
import StoreContact from "../components/StoreContact";

import theme from "../lib/theme";

import './Pages.css';



export default function MatchAnalysisPage(props){

    const [tabIndex, setTabIndex] = React.useState(1);

    return (
        <div style={{color:"#666"}}>
            <div className="row">
                {/* Navigation Bar Start*/}
                <div className="col-3 p-4" style={{
                    backgroundColor:theme.gray,
                }}>
                    <MenuPop />
                    <div className="mt-3 rounded p-3 ms-2" style={{backgroundColor:"rgba(255, 255, 255, 0.64)"}}>
                        <div className="d-flex flex-row justify-content-start align-items-center">
                            <img src="/store_avatar.png" style={{width:40, height:40}}/>
                            <div className="d-flex flex-column ms-3">
                                <span style={{fontWeight:"bold", fontSize:"0.8rem"}}>Store systems status</span>
                                <span style={{fontSize:"0.8rem", marginTop:"3px"}}>Last updated 1 minute ago</span>
                            </div>
                        </div>
                        <div className="mt-1">
                            <span style={{fontSize:"1.1rem", color:"#4E73F8"}}>FAICEALERT</span>
                            <span className="ms-1">server</span>
                            <span className="ms-2"><i className="bi bi-star-fill"></i></span>
                            <span className="ms-2">Online</span>
                        </div>
                        <div className="mt-1 d-flex flex-row justiy-content-start align-items-center">
                            <span style={{
                                fontSize:"1.2rem", 
                                backgroundColor:"rgba(78, 115, 248, 0.2)",
                                padding:4,
                                borderRadius:"5px"
                            }}>-Router online</span>
                            <span style={{ 
                                backgroundColor:"rgba(7, 162, 135, 0.08)",
                                padding:4,
                                marginLeft:10,
                                borderRadius:"5px"
                            }}>-UPS offline</span>
                        </div>
                        <div className="mt-2 d-flex flex-column justify-center-start" style={{
                                fontSize:"0.8rem"}}>
                            <span>Lorem ipsum dolor sit amet,</span>
                            <span>consecteur adipiscing edit Aliquam</span>
                            <span>sit amet veneatis sapien.</span>
                        </div>
                    </div>
                    <div className="mt-4">
                        <div className="d-flex flex-row justify-content-start align-itmes-center">
                            <p className="flex-grow-1 ms-3">KEY STORE CONTACTS</p>
                            <div className="d-flex flex-row justify-center-start align-itmes-center mt-2 me-2">
                                <span className="array-dot"></span>
                                <span className="array-dot"></span>
                                <span className="array-dot"></span>
                            </div>
                        </div>
                    </div>
                    <StoreContact />
                    <StoreContact />
                    <StoreContact />
                </div>
                {/* Navigation Bar End */}
                <div className="col-9 ps-0">
                    {/* Header Bar Start */}
                    <div className="p-4">
                        <div className="d-flex flex-row justify-content-between mt-3">
                            <h3>Match</h3>
                            <div className="input-group flex-nowrap ms-5" style={{flex: 1}}>
                                <span className="input-group-text"  style={{backgroundColor:"#fff"}}><i className="bi bi-search"/></span>
                                <input className="form-control" style={{borderLeft: 'none'}} placeholder="Search for stores and people..."/>
                            </div>
                        </div>
                        <div className="d-flex flex-row justify-content-between mt-4">
                            <div className="btn-group mx-4" style={{
                                background: '#eee',
                                padding: 3,
                                width:"300px"
                            }}>
                                <button className="btn" style={{
                                    background: tabIndex === 1 ? '#fff' : 'transparent',
                                    border: 'none',
                                    borderRadius:5
                                }} onClick={() => setTabIndex(1)}>Analysis</button>
                                <button className="btn" style={{
                                    background: tabIndex === 2 ? '#fff' : 'transparent',
                                    border: 'none',
                                    borderRadius:5
                                }} onClick={() => setTabIndex(2)}>Manage</button>
                                <button className="btn" style={{
                                    background: tabIndex === 3 ? '#fff' : 'transparent',
                                    border: 'none',
                                    borderRadius:5
                                }} onClick={() => setTabIndex(3)}>Second</button>
                            </div>
                            <div className="d-flex flex-row align-items-center">
                                <button style={{
                                    fontSize: 14,
                                    padding: '12px 40px',
                                    background: '#FFFFFF',
                                    color: 'green',
                                }} className="btn btn-primary">
                                    Share
                                </button>
                                <button style={{
                                    fontSize: 14,
                                    padding: '12px 40px',
                                    background: 'linear-gradient(180deg, #08B395 0%, #0C977F 100%)'
                                }} className="btn btn-primary ms-3">
                                    Acknowledge
                                </button>
                            </div>
                        </div>
                    </div>
                    {/* Header Bar End */}
                    <hr className="mt-0"></hr>
                </div>
            </div>
        </div>
    );
}