import Link from 'next/link';
import React from 'react'
import AddressIcon from '../icons/address-icon';
import ArrowRightIcon from '../icons/arrow-right-icon';
import DateIcon from '../icons/date-icon';
import Button from '../ui/button';
import classes from './event-items.module.css';

export default function EventItems(props) {
    const { event } = props;
    const humanreadableDate = new Date(event.date).toLocaleDateString('en-US', {
        day: 'numeric',
        month: 'long',
        year: 'numeric'
    });

    const formattedAddress = event.location.replace(', ', '\n');
    const exploreEventLink = `/events/${event.id}`

    return (
        <li className={classes.item}>
            <img src={'/' + event.image} alt={event.title} />
            <div className={classes.content}>
                <div className={classes.summary}>
                    <h2>{event.title}</h2>
                </div>
                <div className={classes.date}>
                    <DateIcon />
                    {humanreadableDate}
                </div>
                <div className={classes.address}>
                    <AddressIcon />
                    <address>{formattedAddress}</address>
                </div>
                <div className={classes.actions}>
                    <Button link={exploreEventLink}>
                        <span>Explore Event</span>
                        <span className={classes.icon}><ArrowRightIcon /></span>

                    </Button>
                </div>
            </div>

        </li>
    )
}
