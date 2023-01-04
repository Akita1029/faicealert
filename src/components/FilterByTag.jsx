import React from "react";

export default function FilterByTag(props){

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
                    <i className="bi bi-hash"/>
                    <span className="ms-3 flex-grow-1">VerbalAbuse</span>
                    <span className="badge rounded-pill" style={{
                            background: 'rgba(252, 165, 73, 0.64)'
                        }}>12</span>
                </li>
                <li className="nav-item mb-3 ms-2" style={{
                    display: 'flex',
                    flexDirection: 'row',
                    justifyContent: 'flex-start',
                    alignItems: 'center',
                    cursor: 'pointer'
                }}>
                    <i className="bi bi-hash"/>
                    <span className="ms-3 flex-grow-1">Violent</span>
                    <span className="badge rounded-pill" style={{
                            background: 'rgba(244, 60, 60, 0.64)'
                        }}>12</span>
                </li>
                <li className="nav-item mb-3 ms-2" style={{
                    display: 'flex',
                    flexDirection: 'row',
                    justifyContent: 'flex-start',
                    alignItems: 'center',
                    cursor: 'pointer'
                }}>
                    <i className="bi bi-hash"/>
                    <span className="ms-3 flex-grow-1">Knife</span>
                    <span className="badge rounded-pill" style={{
                            background: 'rgba(7, 162, 135, 0.64)'
                        }}>12</span>
                </li>
                <li className="nav-item mb-3 ms-2" style={{
                    display: 'flex',
                    flexDirection: 'row',
                    justifyContent: 'flex-start',
                    alignItems: 'center',
                    cursor: 'pointer'
                }}>
                    <i className="bi bi-hash"/>
                    <span className="ms-3 flex-grow-1">Theft</span>
                    <span className="badge rounded-pill" style={{
                            background: 'rgba(85, 82, 217, 0.64)'
                        }}>12</span>
                </li>
            </div>
        </div>
    )

}