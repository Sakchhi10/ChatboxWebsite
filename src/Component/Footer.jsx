import React from "react";
import { Link } from "react-router-dom";
import "./Footer.css";
import Chatbox from "./Chatbox";

const Footer = () => {
    const listf = { color: "black", fontSize: "1.0em", textDecoration: "none" };

    return (
        <div>
            <footer className="page-footer font-small bg bg-dark  text-white ">
                <div className="container-fluid ">
                    <div className="row">
                        <div className="col-lg-3 mt-4 mob-align">
                            <h5 className="my-4 text-white " >Design and Developed by : Sakchhi Choudhary

                            </h5>
                        </div>

                        <hr className="clearfix w-100 d-md-none pb-0" />

                        <div className="col-lg-3 mob-align mb-md-0 mb-3 mt-4">
                            <h5 className="text-uppercase" style={{ textAlign: "justify" }}>
                                Quick Links
                            </h5>
                            <ul className="list-unstyled" style={{ textAlign: "justify" }}>
                                <li>
                                    <Link to="/" style={{ textDecoration: "none", color: "white" }}>
                                        Features
                                    </Link>
                                </li>

                                <li>
                                    <Link to="/" style={{ textDecoration: "none", color: "white" }}>
                                        Pricing
                                    </Link>
                                </li>
                                <li>
                                    <Link to="/" style={{ textDecoration: "none", color: "white" }}>
                                        About
                                    </Link>
                                </li>
                                <li>
                                    <Link to="/" style={{ textDecoration: "none", color: "white" }}>
                                        Reviews
                                    </Link>
                                </li>

                                <li></li>
                            </ul>
                        </div>

                        <div className="col-lg-3 mb-md-0 mob-align mb-3 mt-4">
                            <h5
                                className="text-uppercase"
                                style={{ textDecoration: "none", textAlign: "justify" }}
                            >
                                Support
                            </h5>
                            <ul
                                className="list-unstyled"
                                style={{ textDecoration: "none", textAlign: "justify" }}
                            >
                                <li>
                                    <Link to="/" style={{ textDecoration: "none", color: "white" }}>
                                        {" "}
                                        Help Desk
                                    </Link>
                                </li>

                                <li>
                                    {" "}
                                    <Link to="/" style={{ textDecoration: "none", color: "white" }}>
                                        {" "}
                                        Roadmap
                                    </Link>
                                </li>
                                <li>
                                    <Link to="/" style={{ textDecoration: "none", color: "white" }}>
                                        Facebook Group
                                    </Link>{" "}
                                </li>

                            </ul>
                        </div>

                        <div className="col-lg-2 mob-align mb-md-0 mb-4 mt-4">
                            <h5 className="text-uppercase" style={{ textAlign: "justify" }}>
                                Company
                            </h5>

                            <ul
                                className="list-unstyled"
                                style={{ textDecoration: "none", textAlign: "justify" }}
                            >
                                <li>
                                    <Link to="/" style={{ textDecoration: "none", color: "white" }}>
                                        {" "}
                                        Contact Us
                                    </Link>
                                </li>

                                <li>
                                    {" "}
                                    <Link to="/" style={{ textDecoration: "none", color: "white" }}>
                                        {" "}
                                        Terms
                                    </Link>
                                </li>
                                <li>
                                    <Link to="/" style={{ textDecoration: "none", color: "white" }}>
                                       Privacy
                                    </Link>{" "}
                                </li>
                                {/* <li>
                                    <Link to="./Spacesaving" style={{ textDecoration: "none", color: "white" }}>
                                        Privacy Center
                                    </Link>{" "}
                                </li>
                                <li>
                                    <Link to="./Spacesaving" style={{ textDecoration: "none", color: "white" }}>
                                        Cookie Declaration
                                    </Link>{" "}
                                </li> */}

                            </ul>

                        </div>
                    </div>
                </div>
            </footer>

            <div className="sticky-chatbox">
                <Chatbox />
            </div>

        </div>
    );
};

export default Footer;
