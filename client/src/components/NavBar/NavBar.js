import {
    MDBCollapse,
    MDBContainer,
    MDBIcon,
    MDBNavbar,
    MDBNavbarBrand,
    MDBNavbarItem,
    MDBNavbarLink,
    MDBNavbarNav,
    MDBNavbarToggler,
} from "mdb-react-ui-kit";
import { useState } from "react";

export default function NavBar() {
    const [showNav, setShowNav] = useState(false);

    return (
        <MDBNavbar
            expand="lg"
            light
            sticky
            style={{
                backgroundColor: "rgba(255, 255, 255, 0.85)",
                backdropFilter: "blur(10px)",
                WebkitBackdropFilter: "blur(10px)",
                boxShadow: "0 2px 10px rgba(0,0,0,0.1)",
            }}
        >
            <MDBContainer fluid>
                <MDBNavbarBrand href="/">
                    <img
                        src="/images/acm_logo_tablet_transparent.png"
                        alt="ACM CSU Logo"
                        height="80"
                        className="d-inline-block align-middle"
                        style={{
                            transition: "transform 0.3s ease, filter 0.3s ease",
                        }}
                        onMouseOver={(e) => {
                            e.currentTarget.style.filter = "brightness(1.2)";
                        }}
                        onMouseOut={(e) => {
                            e.currentTarget.style.filter = "brightness(1)";
                        }}
                    />
                </MDBNavbarBrand>
                <MDBNavbarToggler
                    aria-controls="navbarSupportedContent"
                    aria-expanded="false"
                    aria-label="Toggle navigation"
                    onClick={() => setShowNav(!showNav)}
                >
                    <MDBIcon icon="bars" fas />
                </MDBNavbarToggler>
                <MDBCollapse navbar open={showNav}>
                    <MDBNavbarNav>
                        <MDBNavbarItem className="me-5">
                            <MDBNavbarLink href="/" active={window.location.pathname === '/'} style={{
                                fontWeight: window.location.pathname === '/' ? 'bold' : undefined,
                                borderBottom: window.location.pathname === '/' ? '2px solid #2e7d32' : 'none',
                            }}>
                                Home
                            </MDBNavbarLink>
                        </MDBNavbarItem>
                        <MDBNavbarItem className="me-5">
                            <MDBNavbarLink href="/events" active={window.location.pathname === '/events'} style={{
                                fontWeight: window.location.pathname === '/events' ? 'bold' : undefined,
                                borderBottom: window.location.pathname === '/events' ? '2px solid #2e7d32' : 'none',
                            }}>
                                Events
                            </MDBNavbarLink>
                        </MDBNavbarItem>
                        <MDBNavbarItem className="me-5">
                            <MDBNavbarLink href="/officers" active={window.location.pathname === '/officers'} style={{
                                fontWeight: window.location.pathname === '/officers' ? 'bold' : undefined,
                                borderBottom: window.location.pathname === '/officers' ? '2px solid #2e7d32' : 'none',
                            }}>
                                Officers
                            </MDBNavbarLink>
                        </MDBNavbarItem>
                        <MDBNavbarItem className="me-5">
                            <MDBNavbarLink href="/contact" active={window.location.pathname === '/contact'} style={{
                                fontWeight: window.location.pathname === '/contact' ? 'bold' : undefined,
                                borderBottom: window.location.pathname === '/contact' ? '2px solid #2e7d32' : 'none',
                            }}>
                                Contact
                            </MDBNavbarLink>
                        </MDBNavbarItem>
                    </MDBNavbarNav>
                </MDBCollapse>
            </MDBContainer>
        </MDBNavbar>
    );
}
