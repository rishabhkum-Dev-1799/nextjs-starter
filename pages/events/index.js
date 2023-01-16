import React from 'react'
import EventList from '../../components/events/event-list';
import EventSearch from '../../components/events/event-search';
import { getAllEvents } from '../../dummydata'
import { Router, useRouter } from 'next/router';

export default function EventsPage() {
    const events = getAllEvents();
    const router = useRouter();
    const filterHandler = (selectedYear, selectedMonth) => {
        const pathName = `/events/${selectedYear}/${selectedMonth}`;
        router.push(pathName);
    }
    return (
        <>
            <EventSearch onSearch={filterHandler} />
            <EventList items={events} />
        </>
    )
}
