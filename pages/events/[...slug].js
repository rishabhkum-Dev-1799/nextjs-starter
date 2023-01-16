import React, { Fragment } from 'react'
import { useRouter } from 'next/router'
import { getFilteredEvents } from '../../dummydata';
import EventList from '../../components/events/event-list';
import ResultsTitle from '../../components/events/results-title';
import ErrorAlert from '../../components/ui/error-alert';
import Button from '../../components/ui/button';

export default function FilteredEventsPage() {
    const router = useRouter();
    const filterData = router.query.slug;
    if (!filterData) {
        return (
            <div>
                <h3>Loading.....</h3>
            </div>
        )
    }
    const filteryear = filterData[0];
    const filtermonth = filterData[1];
    const eventYear = +filteryear;
    const eventMonth = +filtermonth;
    if (isNaN(eventYear) || isNaN(eventMonth) || eventYear > 2030 || eventYear < 2021 || eventMonth > 12 || eventMonth < 1) {
        return (
            <>
                <ErrorAlert>Invalid Filter Selection . Please Select the valid year and Month</ErrorAlert>
                <div className='center'>
                    <Button link="/events">Browse All Events</Button>
                </div>
            </>
        )
    }
    const filteredEvents = getFilteredEvents({
        year: eventYear,
        month: eventMonth
    })
    if (!filteredEvents || filteredEvents.length == 0) {
        return (
            <>
                <ErrorAlert>No Events Found for Selected Year and Month</ErrorAlert>
                <div className='center'>
                    <Button link="/events">Browse All Events</Button>
                </div>
            </>
        )
    }
    const date = new Date(eventYear, eventMonth - 1);
    return (
        <Fragment>
            <ResultsTitle date={date} />
            <EventList items={filteredEvents} />
        </Fragment>
    )
}
