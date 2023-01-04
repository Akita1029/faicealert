import React from "react";

export default function CameraGroup(props){

    return(
        <div className="border rounded mt-2 pt-3 ps-3 pb-3 d-flex flex-row justify-content-start">
            <div className="d-flex flex-column pt-2">
                <span style={{fontSize:"0.9em"}}>GROUP OF 6 CAMERAS</span>
                <h4>Entrance 1</h4>
            </div>
            <div className="d-flex flex-row justify-content-center align-items-center">
                <span className="badge rounded-pill" style={{
                            background: 'red'
                }}>2</span>
                <button className="border rounded p-2 ms-2 me-2" style={{backgroundColor:"#fff"}}><i className="bi bi-gear"></i></button>
            </div>
            <div className="w-25 p-2">
                <img src="/camera_view.png" style={{width:"100%", borderRadius:10}}/>
                <div className="mt-2">
                    <span className="badge rounded-pill  ms-4 me-2" style={{
                            background: 'linear-gradient(180deg, #08B395 0%, #0C977F 100%)',
                    }}><i className="bi bi-caret-right" style={{color:"white"}}></i></span>
                    <span>OPERATIONAL</span>
                </div>
            </div>
            <div className="w-25 p-2">
                <img src="/camera_view.png" style={{width:"100%", borderRadius:10}}/>
                <div className="mt-2">
                    <span className="badge rounded-pill  ms-4 me-2" style={{
                            background: 'linear-gradient(180deg, #FE6969 0%, #F43C3C 100%)',
                    }}><i className="bi bi-caret-right" style={{color:"white"}}></i></span>
                    <span>OPERATIONAL</span>
                </div>
            </div>
            <div className="w-25 p-2">
                <img src="/camera_view.png" style={{width:"100%", borderRadius:10}}/>
                <div className="mt-2">
                    <span className="badge rounded-pill  ms-4 me-2" style={{
                            background: 'linear-gradient(180deg, #08B395 0%, #0C977F 100%)',
                    }}><i className="bi bi-caret-right" style={{color:"white"}}></i></span>
                    <span>OPERATIONAL</span>
                </div>
            </div>
        </div>
    )

}