import React from 'react';
import { MDBFooter, MDBContainer, MDBRow, MDBCol } from 'mdb-react-ui-kit';

export default function Footer() {
    return (
        <MDBFooter
            bgColor="light"
            className="text-center text-lg-start text-muted"
        >
            <section className="pt-2">
                <MDBContainer className="text-center text-md-start mt-5">
                    <MDBRow className="mt-3">
                        <MDBCol md="3" lg="4" xl="3" className="mx-auto mb-4">
                            <h6 className="text-uppercase fw-bold mb-4">
                                ACM CSU
                            </h6>
                            <p>
                                Advancing computing for students through
                                workshops and hackathons.
                            </p>
                        </MDBCol>
                        <MDBCol md="2" lg="2" xl="2" className="mx-auto mb-4">
                            <h6 className="text-uppercase fw-bold mb-4">
                                Offices
                            </h6>
                            <p>
                                <a href="/officers" className="text-reset">
                                    Our Team
                                </a>
                            </p>
                            <p>
                                <a href="/contact" className="text-reset">
                                    Contact Us
                                </a>
                            </p>
                        </MDBCol>
                        <MDBCol
                            md="4"
                            lg="3"
                            xl="3"
                            className="mx-auto mb-md-0 mb-4"
                        >
                            <h6 className="text-uppercase fw-bold mb-4">
                                Contact
                            </h6>
                            <p>ACM CSU Chapter</p>
                            <p>acs@colostate.edu</p>
                        </MDBCol>
                    </MDBRow>
                </MDBContainer>
            </section>
            <div
                className="text-center p-4"
                style={{ backgroundColor: "rgba(0, 0, 0, 0.05)" }}
            >
                © {new Date().getFullYear()} ACM Colorado State University
            </div>
        </MDBFooter>
    );
}