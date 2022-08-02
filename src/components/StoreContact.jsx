import React from "react";

export default function StoreContact(props){
    return(
        <div  className="ms-3 mt-3">
            <div style={{
                    display: 'flex',
                    flexDirection: 'row',
                    justifyContent: 'flex-start',
                    alignItems: 'center',
                }}>
                    <div className="position-relative">
                        <img src="/avatar.png" style={{
                            width: 32,
                            height: 32
                        }} className="rounded-pill" />
                        <span style={{
                            position: 'absolute',
                            right: 0,
                            bottom: 0,
                            width: 12,
                            height: 12,
                            background: 'linear-gradient(180deg, #08B395 0%, #0C977F 100%)',
                            borderRadius: '50%',
                            border: '2px solid white'
                        }}></span>
                    </div>
                    
                    <div className="d-flex flex-column ms-3 flex-grow-1">
                        <span style={{fontSize: '1rem'}}>John Smith</span>
                        <span style={{fontSize: '0.8rem'}}>Store Manager</span>
                    </div>
                    <div className="d-flex flex-column ms-3 mt-2">
                        <span style={{fontSize: '0.7rem'}}>On duty</span>
                        <span style={{fontSize: '1.2rem'}}><i className="bi bi-check"></i></span>
                    </div>
            </div>
            <div className="d-flex flex-row justify-content-end align-items-end">
                <div className="rounded ms-32" style={{
                    backgroundColor:"#fff"
                }}>
                    <i className="bi bi-telephone-fill ms-2 me-2" style={{fontSize: '0.8rem'}}></i>
                    <span style={{marginRight:5}}>07756 324567</span>
                </div>
                <div className="rounded ms-2" style={{
                    backgroundColor:"rgba(7, 162, 135, 0.08)"
                }}>
                    <i className="bi bi-briefcase ms-2 me-2" style={{fontSize: '0.8rem', color:"#07A287"}}></i>
                    <span style={{marginRight:5, color:"#07A287"}}>Sender</span>
                </div>  
            </div>
        </div>
    );
}