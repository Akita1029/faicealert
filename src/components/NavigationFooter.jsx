import React from "react";
import { useNavigate } from "react-router-dom";

export default function NavigationFooter(props){

    const navigate = useNavigate();
    const logout = ()=>{
        navigate ('/login');
    }

    return(
        <div style={{marginTop:50}} className="p-3">
            <div className="d-flex flex-row justify-content-start align-items-center" style={{cursor:"pointer"}}>
                <i className="bi bi-chat-dots ms-2 me-3"></i>
                <span>Support</span>
            </div>
            <div className="d-flex flex-row justify-content-start align-items-center mt-3" style={{cursor:"pointer"}} onClick={()=>logout()}>
                <i className="bi bi-box-arrow-right ms-2 me-3 "></i>
                <span>Log out</span>
            </div>
        </div>
    )

}