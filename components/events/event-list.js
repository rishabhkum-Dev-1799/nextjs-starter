import React from 'react'
import EventItems from './event-items'
import classes from './event-list.module.css';

export default function EventList(props) {
    const { items } = props
    return (
        <div className={classes.list}>
            {items.map((event) => {
                return (
                    <EventItems key={event.id} event={event} />
                )
            })}
        </div>
    )
}
