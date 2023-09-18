import React from "react";
import { Footer, Hero, Navbar, Section1 } from "../components";
import "../App.css";

const Homepage = () => {
    return (
        <>
            {/* Komponen Navbar */}
            <Navbar />

            {/* Komponen Hero */}
            <Hero />

            <Section1 />

            {/* Komponen Footer */}
            <Footer />
        </>
    );
};

export default Homepage;
