import React, { Fragment } from 'react'
import MainHeader from './Header'

export default function Layout(props) {
    return (
        <Fragment>
            <MainHeader />
            <main>
                {props.children}
            </main>
        </Fragment>
    )
}
