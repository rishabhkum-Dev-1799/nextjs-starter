import React from 'react'
import EventList from '../components/events/event-list';
import { getFeaturedEvents } from '../dummydata'

export default function Homepage() {
    const featuredEvents = getFeaturedEvents();

    return (
        <div>
            <EventList items={featuredEvents} />
        </div>
    )
}
