import React from 'react';
import {
  MDBContainer,
  MDBRow,
  MDBCol,
  MDBCard,
  MDBCardImage,
  MDBCardBody,
  MDBCardTitle,
  MDBCardText,
  MDBBtn
} from 'mdb-react-ui-kit';
import AnimatedSection from '../../components/AnimatedSection/AnimatedSection';

const officers = [
    {
      name: 'Simon Balanoff',
      role: 'President',
      img: '/images/officers/simon.jpg',
      bio: 'Sophomore Computer Science major focusing on AI research.',
      email: 'simon.balanoff@colostate.edu'
    },
    {
      name: 'Liam Sagal',
      role: 'Vice President',
      img: '/images/officers/_l.jpg',
      bio: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
      email: 'name.here@colostate.edu'
    },
    {
      name: 'Name Here',
      role: 'Financial Officer',
      img: '/images/officers/_.jpg',
      bio: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
      email: 'name.here@colostate.edu'
    },
    {
      name: 'Name Here',
      role: 'Event Coordinator',
      img: '/images/officers/_.jpg',
      bio: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
      email: 'name.here@colostate.edu'
    }
  ];

export default function OfficersPage() {
    return (
        <AnimatedSection>
            <MDBContainer className="py-5">
                {" "}
                <h2 className="text-center mb-4">Our Officers</h2>
                <MDBRow className="g-4">
                    {" "}
                    {officers.map((officer, idx) => (
                        <MDBCol md="6" lg="3" key={idx}>
                            <MDBCard className="h-100 text-center">
                                {officer.img && (
                                    <MDBCardImage
                                        src={officer.img}
                                        alt={officer.name}
                                        position="top"
                                        style={{
                                            objectFit: "cover",
                                            height: "200px",
                                        }}
                                    />
                                )}
                                <MDBCardBody>
                                    <MDBCardTitle>{officer.name}</MDBCardTitle>{" "}
                                    <MDBCardText>
                                        <strong>{officer.role}</strong>
                                    </MDBCardText>
                                    <MDBCardText>{officer.bio}</MDBCardText>
                                    <MDBBtn
                                        style={{
                                            backgroundColor: "#2e7d32",
                                            color: "white",
                                            border: "none",
                                            boxShadow:
                                                "0 2px 6px rgba(46, 125, 50, 0.3)",
                                        }}
                                        size="sm"
                                        href={`mailto:${officer.email}`}
                                    >
                                        Contact
                                    </MDBBtn>
                                </MDBCardBody>
                            </MDBCard>
                        </MDBCol>
                    ))}
                </MDBRow>
            </MDBContainer>
        </AnimatedSection>
    );
}