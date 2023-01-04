import React, { useState } from "react";
import Calendar from "react-calendar";

import 'react-calendar/dist/Calendar.css';

export default function CalendarComponent(props){

    const [value, onChange] = useState(new Date());

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
            <Calendar onChange={onChange} value={value} className="ms-2"/>
        </div>
    )

}

