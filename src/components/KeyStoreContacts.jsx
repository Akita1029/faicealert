import React from "react";
import StoreContactInfo from "./StoreContactInfo";

export default function KeyStoreContacts(props){

    return(
        <div>
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
            <StoreContactInfo />
            <StoreContactInfo />
            <StoreContactInfo />
        </div>
    )

}