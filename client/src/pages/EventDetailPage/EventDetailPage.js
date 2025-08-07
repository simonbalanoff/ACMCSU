import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { parse, format } from 'date-fns';
import { MDBContainer, MDBCard, MDBCardBody, MDBCardTitle, MDBCardText, MDBBtn } from 'mdb-react-ui-kit';

export default function EventDetailPage() {
  const { id } = useParams();
  const [event, setEvent] = useState(null);

  useEffect(() => {
    fetch('/api/events')
      .then(res => res.json())
      .then(data => {
        const e = data[+id];
        if (!e) return;
        
        const dateTimeString = `${e.date} ${e.time}`;
        const start = parse(dateTimeString, 'M/d/yyyy h a', new Date());
        setEvent({ ...e, start });
      })
      .catch(console.error);
  }, [id]);

  if (!event) {
    return <MDBContainer className="py-5"><p>Loading…</p></MDBContainer>;
  }

  return (
      <MDBContainer className="py-5">
          <MDBCard className="mx-auto" style={{ maxWidth: 600 }}>
              <MDBCardBody>
                  <MDBCardTitle>{event.title}</MDBCardTitle>
                  {!!event.start.toJSON() && (
                      <MDBCardText>
                          <strong>When:</strong> {format(event.start, "PPpp")}
                      </MDBCardText>
                  )}
                  <MDBCardText style={{ whiteSpace: "pre-wrap" }}>
                      {event.text}
                  </MDBCardText>
                  {event.link && (
                      <MDBBtn
                          color="secondary"
                          href={event.link}
                      >
                          Learn More
                      </MDBBtn>
                  )}
              </MDBCardBody>
          </MDBCard>
      </MDBContainer>
  );
}
