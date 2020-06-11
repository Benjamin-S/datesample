import React, { useState, useEffect } from "react";
import "./Home.css";
import ReactDatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import { Form, Row, Col, Button } from "react-bootstrap";
import { add, sub, isBefore } from 'date-fns';

export default function Home() {

    const [startDate, setStartDate] = useState(sub(new Date(), { years: 1 }));
    const [endDate, setEndDate] = useState(new Date());
    const [minDate, setMinDate] = useState(add(startDate, { months: 6 }));

    // On Date Change, reset minDate and make sure that the end date doesn't fall within that period
    useEffect(() => {
        var tempMin = add(startDate, { months: 6 })
        setMinDate(tempMin);

        if (isBefore(endDate, tempMin)) {
            setEndDate(tempMin);
        }
    }, [startDate, endDate]);

    function handleStart(event) {

    }

    return (
        <div className="Home container">
            <Row>
                <Col>
                    <h1>Date Sample</h1>
                </Col>
            </Row>
            <Button onClick={handleStart}>
                Start
            </Button>
            <Row xs={1} sm={1} md={1} lg={3} className="datePickers">
                <Col>
                    <h4>Start Date</h4>
                    <ReactDatePicker selected={startDate} onChange={date => setStartDate(date)} dateFormat="dd/MM/yyyy" />
                </Col>
                <Col>
                    <Form className="mx-auto">
                        <Form.Check
                            type="checkbox"
                            id="inlineExclWkends"
                            label="Exclude Weekends"
                        />
                        <Form.Check
                            type="checkbox"
                            id="inlineExclUK"
                            label="Exclude UK Public Holidays"
                        />
                        <Form.Check
                            type="checkbox"
                            id="inlineExclUS"
                            label="Exclude US Public Holidays"
                        />
                    </Form>
                </Col>
                <Col>
                    <h4>End Date</h4>
                    <ReactDatePicker selected={endDate} onChange={date => setEndDate(date)} dateFormat="dd/MM/yyyy" minDate={minDate} />
                </Col>
            </Row>

            <Row className="my-3 mx-1 mx-lg-0">
                    <Form.Label>
                        Output Options
                </Form.Label>
                    <Form.Control as="select">
                        <option>Default: 40, 25, 15, 8, 5, 3, 2</option>
                    </Form.Control>
            </Row>

            {/* <Row className="options">
                <Col className="options">
                    <Form.Switch
                        label="Exclude Weekends"
                        id="exclWkends" />
                    <Form.Switch
                        label="Exclude UK Public Holidays"
                        id="exclUK"
                    />
                    <Form.Switch
                        label="Exclude US Public Holidays"
                        id="exclUS"
                    />
                </Col>
            </Row> */}
        </div>
    );
}