import React from "react";
import "../assets/styles/footer.css";

const Footer = () => {
    return (
        <>
            <div className="footer2-mz2">
                <div className="footer-card">
                    <div>
                        <h1 data-aos="fade-up" className="aos-init aos-animate">
                            Work Together with Kreasi Digital
                        </h1>
                        <p data-aos="fade-up" className="aos-init aos-animate">
                            Our company is a very professional company, with
                            friendly service, modern homes and interest-free
                            payments
                        </p>
                    </div>
                    <button>Registrasi</button>
                </div>
                <div className="footer-body-mz2">
                    <div className="footer-body-desc-mz2">
                        <h1 data-aos="fade-up" className="aos-init">
                            Kreasi Digital
                        </h1>
                        <p data-aos="fade-up" className="aos-init">
                            Provider of designs and features from various web
                            and mobile programming languages.
                        </p>
                        <div className="footer-body-icon-mz2">
                            <img
                                data-aos="fade-up"
                                src="https://images-builder.vercel.app/img/instagram_footermz1.svg"
                                alt="icon-fb"
                                className="aos-init"
                            />{" "}
                            <img
                                data-aos="fade-up"
                                src="https://images-builder.vercel.app/img/wa_footermz1.svg"
                                alt="icon-fb"
                                className="aos-init"
                            />
                            <img
                                data-aos="fade-up"
                                src="https://images-builder.vercel.app/img/youtube_footermz1.svg"
                                alt="icon-fb"
                                className="aos-init"
                            />
                            <img
                                data-aos="fade-up"
                                src="https://images-builder.vercel.app/img/linkedin_footermz1.svg"
                                alt="icon-fb"
                                className="aos-init"
                            />
                            <img
                                data-aos="fade-up"
                                src="https://images-builder.vercel.app/img/twiter_footermz1.svg"
                                alt="icon-fb"
                                className="aos-init"
                            />
                        </div>
                    </div>
                    <div className="footer-body-list-mz2">
                        <ul>
                            <li>Home</li>
                            <li>Beranda</li>
                            <li>Program Keahlian</li>
                            <li>Gallery</li>
                            <li>Our News</li>
                        </ul>
                        <ul>
                            <li>About</li>
                            <li>About Us</li>
                            <li>Help center</li>
                            <li>Privacy policy</li>
                            <li>Privacy policy</li>
                        </ul>
                        <ul>
                            <li>Contact</li>
                            <li>
                                <div className="fotter-contact">
                                    <img
                                        data-aos="fade-up"
                                        src="https://images-builder.vercel.app/img/Frame1_footermz1.svg"
                                        alt="tel"
                                        className="aos-init"
                                    />
                                    <p data-aos="fade-up" className="aos-init">
                                        (406) 555-0120
                                    </p>
                                </div>
                            </li>
                            <li>
                                <div className="fotter-contact">
                                    <img
                                        data-aos="fade-up"
                                        src="https://images-builder.vercel.app/img/dashicons_footermz1.svg"
                                        alt="tel"
                                        className="aos-init"
                                    />
                                    <p data-aos="fade-up" className="aos-init">
                                        kreasi.digital@gmail.com
                                    </p>
                                </div>
                            </li>
                            <li>
                                <div className="fotter-contact">
                                    <img
                                        data-aos="fade-up"
                                        src="https://images-builder.vercel.app/img/Frame3_footermz1.svg"
                                        alt="tel"
                                        className="aos-init"
                                    />
                                    <p data-aos="fade-up" className="aos-init">
                                        2972 Westheimer Rd. Santa Ana, Illinois
                                        85486
                                    </p>
                                </div>
                            </li>
                        </ul>
                    </div>
                </div>
            </div>
        </>
    );
};

export default Footer;
