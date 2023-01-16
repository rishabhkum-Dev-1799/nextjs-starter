import Link from 'next/link'
import React from 'react'
import classes from './button.module.css';

export default function Button(props) {
    if (props.link) {
        return (
            <Link href={props.link} className={classes.btn}>
                {props.children}
            </Link>
        )
    }
    return (
        <button className={classes.btn} onClick={props.onClick}>{props.children}</button>
    )




}
