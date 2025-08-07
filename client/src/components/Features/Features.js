import {
    MDBContainer,
    MDBRow,
    MDBCol,
    MDBCard,
    MDBCardBody,
    MDBCardTitle,
    MDBCardText,
} from "mdb-react-ui-kit";

import AnimatedSection from '../AnimatedSection/AnimatedSection'

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
    faLaptopCode,
    faTrophy,
    faUsers,
} from "@fortawesome/free-solid-svg-icons";

export default function Features() {
    const features = [
        {
            icon: faLaptopCode,
            title: "Workshops",
            text: "Hands-on coding sessions led by experts.",
        },
        {
            icon: faTrophy,
            title: "Competitions",
            text: "Hackathons, coding challenges, and prizes.",
        },
        {
            icon: faUsers,
            title: "Networking",
            text: "Connect with peers and industry professionals.",
        },
    ];
    return (
        <AnimatedSection>
            <MDBContainer className="py-5">
                <MDBRow className="g-4">
                    {features.map((f, idx) => (
                        <MDBCol md="4" key={idx}>
                            <MDBCard className="h-100 text-center">
                                <div style={{ margin: "20px auto 0" }}>
                                    <FontAwesomeIcon
                                        icon={f.icon}
                                        size="2x"
                                        className="text-secondary"
                                    />
                                </div>
                                <MDBCardBody>
                                    <MDBCardTitle tag="h5">{f.title}</MDBCardTitle>
                                    <MDBCardText>{f.text}</MDBCardText>
                                </MDBCardBody>
                            </MDBCard>
                        </MDBCol>
                    ))}
                </MDBRow>
            </MDBContainer>
        </AnimatedSection>
    );
}
