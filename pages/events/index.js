import React from 'react'
import EventList from '../../components/events/event-list';
import { getAllEvents } from '../../dummydata'

export default function EventsPage() {
    const events = getAllEvents();
    return (
        <>
            <EventList items={events} />
        </>
    )
}
