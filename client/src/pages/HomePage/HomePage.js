import { MDBContainer } from "mdb-react-ui-kit";

import Hero from "../../components/Hero/Hero";
import Features from "../../components/Features/Features";
import EventsScroller from "../../components/EventsScroller/EventsScroller";

export default function HomePage() {
    return (
        <MDBContainer fluid className="p-0">
            <Hero />
            <EventsScroller />
            <Features />
        </MDBContainer>
    );
}
