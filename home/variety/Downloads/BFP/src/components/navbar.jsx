import React from "react";
import "../assets/styles/navbar.css";
import { LogoBF } from "../assets/images";

const Navbar = () => {
    return (
        <>
            <nav className="navbar-mz2">
                <img
                    data-aos="fade-up"
                    src={LogoBF}
                    alt="logo4"
                    className="aos-init aos-animate"
                />
                <ul className="navbar-item-mz2">
                    <li>
                        <a href="#product">Product</a>
                    </li>
                    <li>
                        <a href="#implementation">Implementation</a>
                    </li>
                    <li>
                        <a href="#benefits">Benefits</a>
                    </li>
                    <li>
                        <a href="#contact">Contact Us</a>
                    </li>
                    <li>
                        <a href="#product">
                            <button>Start Now</button>
                        </a>
                    </li>
                    <li>
                        <img
                            data-aos="fade-up"
                            src="https://images-builder.vercel.app/img/humbergernv4.svg"
                            alt="humberger"
                            className="humberger-menu-mz2 aos-init aos-animate"
                        />
                    </li>
                </ul>
            </nav>
        </>
    );
};

export default Navbar;
