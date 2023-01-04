import React from "react";

export default function StoreInfoCard(props){

    return(
        <div className="mt-2 me-3">
            <div className="position-relative">
                <img src="/store.png" style={{
                    borderRadius:10,
                    width:"100%",
                }}/>
                <i style={{
                    position: 'absolute',
                    right: 20,
                    top: 10,
                    background: '#f8f8f8',
                    borderRadius:10,
                    fontSize:25,
                    paddingLeft:5,
                    paddingRight:5.
                }} className="bi bi-postcard"></i>
                <span style={{
                    position: 'absolute',
                    right: 20,
                    bottom: 10,
                    width: 15,
                    height: 15,
                    background: 'linear-gradient(180deg, #08B395 0%, #0C977F 100%)',
                    borderRadius: '50%',
                    border: '2px solid white'
                }}></span>
            </div>
            <p className="fw-bold mt-3 mb-0">Barrowford</p>
            <p>Lancashire</p>
        </div>
    )

}