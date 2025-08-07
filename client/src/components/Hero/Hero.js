import React from "react";
import { MDBBtn } from "mdb-react-ui-kit";

export default function Hero() {
    return (
        <div
            className="bg-image"
            style={{
                backgroundImage: "url('/images/csu-campus2.jpg')",
                backgroundSize: "cover",
                height: "80vh",
            }}
        >
            <div
                className="mask"
                style={{ backgroundColor: "rgba(0, 0, 0, 0.6)" }}
            >
                <div className="d-flex justify-content-center align-items-center h-100">
                    <div className="text-white text-center px-3">
                        <h1 className="mb-3 display-3">Welcome to ACM CSU</h1>
                        <h4 className="mb-4">
                            Advancing computing for students through workshops,
                            hackathons, and more.
                        </h4>
                        <MDBBtn
                            style={{
                                backgroundColor: "#2e7d32",
                                boxShadow: "none",
                                border: "none",
                            }}
                            size="lg"
                            href="/events"
                        >
                            See Upcoming Events
                        </MDBBtn>
                    </div>
                </div>
            </div>
        </div>
    );
}
