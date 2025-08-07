import React, { useState, useEffect } from 'react';
import {
  MDBCarousel,
  MDBCarouselItem,
  MDBCard,
  MDBCardBody,
  MDBCardTitle,
  MDBBtn
} from 'mdb-react-ui-kit';
import './EventsScroller.css';
import EventText from './EventText';

export default function EventsScroller() {
  const [events, setEvents] = useState([]);

  useEffect(() => {
    fetch('/api/events')
      .then(res => res.json())
      .then(data => setEvents(data.slice(0, 5)))
      .catch(console.error);
  }, []);

  if (!events.length) return null;

  return (
      <div>
          <div className="text-center mb-4 pt-5">
              <h2>Latest News & Events</h2>
          </div>
          <MDBCarousel
              className="my-carousel"
              showControls={events.length > 1}
              showIndicators={events.length > 1}
              interval={5000}
              keyboard
          >
              {events.map((e, idx) => (
                  <MDBCarouselItem key={idx} itemId={idx + 1}>
                      <div className="slide-content">
                          <MDBCard className="event-card d-flex flex-column">
                              <MDBCardBody className="d-flex flex-column p-3">
                                  <MDBCardTitle>{e.title}</MDBCardTitle>
                                  <div className="event-text flex-grow-1">
                                      <EventText text={e.text} />
                                  </div>
                                  <MDBBtn
                                      className="mt-3 align-self-start"
                                      style={{
                                          backgroundColor: "#c6f0c8",
                                          color: "#2e7d32",
                                          border: "none",
                                          boxShadow:
                                              "0 2px 6px rgba(46, 125, 50, 0.3)",
                                      }}
                                      size="sm"
                                      href={`/event/${idx}`}
                                  >
                                      Learn More
                                  </MDBBtn>
                              </MDBCardBody>
                          </MDBCard>
                      </div>
                  </MDBCarouselItem>
              ))}
          </MDBCarousel>
      </div>
  );
}
