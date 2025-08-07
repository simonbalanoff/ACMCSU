import React from 'react';

import {
    MDBCardText
} from 'mdb-react-ui-kit'

export default function EventText({ text }) {
    return (
        <MDBCardText>
          {text.split('\n').map((line, idx) => (
            <React.Fragment key={idx}>
              {line}
              {idx < text.split('\n').length - 1 && <br />}
            </React.Fragment>
          ))}
        </MDBCardText>
      );
}