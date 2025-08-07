import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';

import { Calendar, dateFnsLocalizer } from 'react-big-calendar';
import { format, parse, startOfWeek, getDay } from 'date-fns';
import 'react-big-calendar/lib/css/react-big-calendar.css';
import { MDBContainer } from 'mdb-react-ui-kit';
import CalendarEvent from '../../components/CalendarEvent/CalendarEvent';
import AnimatedSection from '../../components/AnimatedSection/AnimatedSection'

const locales = { 'en-US': require('date-fns/locale/en-US') };
const localizer = dateFnsLocalizer({ format, parse: (v, f) => parse(v, f, new Date()), startOfWeek, getDay, locales });

export default function EventsPage() {
    const [events, setEvents] = useState([]);

    useEffect(() => {
        fetch('/api/events')
          .then(res => {
            if (!res.ok) throw new Error(res.statusText);
            return res.json();
          })
          .then(data => {
              const mapped = data.map((e, i) => {
                  const dateTimeString = `${e.date} ${e.time}`;
                  const start = parse(
                      dateTimeString,
                      "M/d/yyyy h:mm a",
                      new Date()
                  );
                  const end = start;

                  return {
                      id: i,
                      title: e.title,
                      start,
                      end,
                      allDay: false,
                      description: e.text,
                  };
              });

              setEvents(mapped);
          })
          .catch(console.error);
      }, []);

      const navigate = useNavigate();

    return (
        <AnimatedSection>
            <MDBContainer className="py-5">
                <h2 className="mb-4 text-center">Events Calendar</h2>
                <Calendar
                    localizer={localizer}
                    events={events}
                    startAccessor="start"
                    endAccessor="end"
                    style={{ height: 600 }}
                    defaultDate={new Date(2019, 8, 12)}
                    components={{event: CalendarEvent}}
                    onSelectEvent={event => navigate(`/event/${event.id}`)}
                />
            </MDBContainer>
        </AnimatedSection>
    );
}