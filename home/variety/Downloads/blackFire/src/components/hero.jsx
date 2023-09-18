import React from "react";
import {
    Firewall1,
    Firewall2,
    Firewall3,
    Firewall4,
    Square,
} from "../assets/images";
import "../assets/styles/hero.css";

const Hero = () => {
    return (
        <>
            <div className="container-section4-section4mz4">
                <img src={Square} alt="square" className="square" />
                <h1
                    data-aos="fade-up"
                    className="section4-title-section4mz4 aos-init aos-animate"
                >
                    Firewall Fortify Your Digital Defense
                </h1>
                <p
                    data-aos="fade-up"
                    className="section4-body-section4mz4 aos-init aos-animate"
                >
                    blackFire Firewall: Your First Line of Defense Against Cyber
                    Threats.
                </p>
                <button
                    className="section4-btn-section4mz4 aos-init aos-animate"
                    data-aos="fade-up"
                >
                    Get Started
                </button>
                <div className="section4-galerry-section4mz4">
                    <div className="galrry-item-section4mz4">
                        <img
                            data-aos="fade-up"
                            src={Firewall1}
                            alt="image1"
                            className="aos-init aos-animate"
                        />
                    </div>
                    <div className="galrry-item-section4mz4">
                        <img
                            data-aos="fade-up"
                            src={Firewall4}
                            alt="image4"
                            className="aos-init aos-animate"
                        />
                    </div>
                    <div className="galrry-item-section4mz4">
                        <img
                            data-aos="fade-up"
                            src={Firewall2}
                            alt="image2"
                            className="aos-init aos-animate"
                        />
                    </div>
                    <div className="galrry-item-section4mz4">
                        <img
                            data-aos="fade-up"
                            src={Firewall3}
                            alt="image3"
                            className="aos-init aos-animate"
                        />
                    </div>
                </div>
            </div>
        </>
    );
};

export default Hero;
