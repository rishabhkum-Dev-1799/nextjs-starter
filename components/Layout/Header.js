import React from 'react'
import classes from './mainheader.module.css'
import Link from 'next/link'

export default function MainHeader() {
    return (
        <div className={classes.header}>
            <div className={classes.logo}>
                <Link href="/">Next's Event</Link>
            </div>
            <nav className={classes.navigation}>
                <ul>
                    <li>
                        <Link href="/events"> Browse All Events </Link>
                    </li>
                </ul>
            </nav>
        </div>
    )
}
