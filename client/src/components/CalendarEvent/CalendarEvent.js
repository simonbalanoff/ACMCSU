import React from 'react';
import { format } from 'date-fns';
import { MDBTooltip } from 'mdb-react-ui-kit';

import './CalendarEvent.css'

export default function CalendarEvent({ event }) {
    const tooltipBody = (
        <div
            style={{
                minWidth: 200,
                maxWidth: 300,
                whiteSpace: "normal",
                paddingRight: 30,
            }}
        >
            <div>
                <strong>{format(event.start, "PPpp")}</strong>
            </div>
            <div style={{ fontWeight: 500 }}>{event.title}</div>
            <div
                style={{
                    marginTop: ".5rem",
                    display: "-webkit-box",
                    WebkitBoxOrient: "vertical",
                    WebkitLineClamp: 3,
                    overflow: "hidden",
                    textOverflow: "ellipsis",
                    whiteSpace: "normal",
                    lineHeight: "1.2em",
                    maxHeight: "3.6em",
                }}
            >
                {event.description}
            </div>
        </div>
    );
    
      return (
          <MDBTooltip tag="div" title={tooltipBody} placement="top" interactive>
              <div
                  className="rbc-event-content d-flex align-items-center"
                  style={{
                      overflow: "hidden",
                      whiteSpace: "nowrap",
                      textOverflow: "ellipsis",
                      backgroundColor: "#2e7d32",
                      border: "none",
                      boxShadow: "none"
                  }}
              >
                  <span style={{ flexShrink: 0, marginRight: "0.25rem" }}>
                      <strong>{format(event.start, "h:mm a")}</strong>
                  </span>
                  <span
                      style={{
                          overflow: "hidden",
                          textOverflow: "ellipsis",
                          whiteSpace: "nowrap",
                          flexGrow: 1,
                      }}
                  >
                      {event.title}
                  </span>
              </div>
          </MDBTooltip>
      );
}