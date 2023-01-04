import React from "react";

export default function FilterEventFeed(props){

    return(
        <div>
            <div className="mt-5">
                <div className="d-flex flex-row justify-content-start align-itmes-center">
                    <p className="flex-grow-1 ms-3">FILTER EVENT FEED</p>
                    <div className="d-flex flex-row justify-center-start align-itmes-center mt-2 me-2">
                        <span className="array-dot"></span>
                        <span className="array-dot"></span>
                        <span className="array-dot"></span>
                    </div>
                </div>
            </div>
            <div className="p-3">
                <li className="nav-item mb-3 ms-2" style={{
                    display: 'flex',
                    flexDirection: 'row',
                    justifyContent: 'flex-start',
                    alignItems: 'center',
                    cursor: 'pointer'
                }}>
                    <span className="badge rounded-pill" style={{
                            background: 'linear-gradient(180deg, #08B395 0%, #0C977F 100%)'
                        }}>3</span>
                    <span className="ms-3 flex-grow-1">Security</span>
                    <i className="bi bi-list" style={{color: '#aaa'}}/>
                </li>
                <li className="nav-item mb-3 ms-2" style={{
                    display: 'flex',
                    flexDirection: 'row',
                    justifyContent: 'flex-start',
                    alignItems: 'center',
                    cursor: 'pointer'
                }}>
                    <span className="badge rounded-pill" style={{
                            background: '#fff',
                            color:"#4E73F8"
                        }}>8</span>
                    <span className="ms-3 flex-grow-1">Camera setup</span>
                    <i className="bi bi-list" style={{color: '#aaa'}}/>
                </li>
                <li className="nav-item mb-3 ms-2" style={{
                    display: 'flex',
                    flexDirection: 'row',
                    justifyContent: 'flex-start',
                    alignItems: 'center',
                    cursor: 'pointer'
                }}>
                    <span className="badge rounded-pill" style={{
                            background: 'linear-gradient(180deg, #605CF3 0%, #4D4AC8 100%)'
                        }}>6</span>
                    <span className="ms-3 flex-grow-1">Troubleshooting</span>
                    <i className="bi bi-list" style={{color: '#aaa'}}/>
                </li>
                <li className="nav-item mb-3 ms-2" style={{
                    display: 'flex',
                    flexDirection: 'row',
                    justifyContent: 'flex-start',
                    alignItems: 'center',
                    cursor: 'pointer'
                }}>
                    <span className="badge rounded-pill" style={{
                            background: 'linear-gradient(180deg, #FF4B6E 0%, #EC234A 100%)'
                        }}>4</span>
                    <span className="ms-3 flex-grow-1">Other stuff</span>
                    <i className="bi bi-list" style={{color: '#aaa'}}/>
                </li>
            </div>
        </div>
    )

}