import React from 'react'
import Button from '../ui/button';
import classes from './event-search.module.css';
import { useRef } from 'react';

export default function EventSearch(props) {
    const yearRefernce = useRef();
    const monthRefernce = useRef();

    const submitHandler = (event) => {
        event.preventDefault()
        const selectedYear = yearRefernce.current.value;
        const selectedMonth = monthRefernce.current.value;
        props.onSearch(selectedYear, selectedMonth);

    }
    return (
        <form className={classes.form} onSubmit={submitHandler}>
            <div className={classes.controls}>
                <div className={classes.control}>
                    <label htmlFor='year'>Years</label>
                    <select id="year" ref={yearRefernce}>
                        <option value="2022">2022</option>
                        <option value="2023">2023</option>
                    </select>
                </div>
                <div className={classes.control}>
                    <label htmlFor='month'>Months</label>
                    <select id="month" ref={monthRefernce}>
                        <option value="1">Janurary</option>
                        <option value="2">Feburary</option>
                        <option value="3">March</option>
                        <option value="4">April</option>
                        <option value="5">May</option>
                        <option value="6">June</option>
                        <option value="7">July</option>
                        <option value="8">August</option>
                        <option value="9">September</option>
                        <option value="10">October</option>
                        <option value="11">November</option>
                        <option value="12">December</option>
                    </select>
                </div>
            </div>
            <Button>Find Event</Button>
        </form>
    )
}
