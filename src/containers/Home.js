import React, { useState } from "react";
import "./Home.css";
import ReactDatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";

export default function Home() {

    const [startDate, setStartDate] = useState(new Date());


    return (
        <div className="Home">
            <div className="lander">
                <h1>Date Sample</h1>
            </div>
            <div>
                <ReactDatePicker selected={startDate} onChange={date => setStartDate(date)} />
            </div>
        </div>
    );
}