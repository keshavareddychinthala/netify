import React from "react";
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Carousel } from 'react-responsive-carousel';
import fullstackimg from "../../assets/images/computer-internet.png";
import cybersecurityimg from "../../assets/images/cyber-security.png";
import ecommerceimg from "../../assets/images/database.png";
import "./Home.css"
export const Home = () => {
    return (
        <>
            <div >
                <Carousel>
                    <div>
                        <img src={fullstackimg} className="img-width" style={{ "height": "350px", "width": "350px" }} />
                        <p className="legend mt-10">
                            Having 3.5years of experience in development of applications using react, MERN(Node.js
                            Express application framework) and MEAN(node js, express frame work and
                            angular)technologies
                        </p>
                    </div>
                    <div>
                        <img src={cybersecurityimg} className="img-width" style={{ "height": "350px", "width": "350px" }} />
                        <p className="legend mt-10">
                            pace is a web and mobile based application through which is about the cyber security. It
                            provider a platform to the security team to detect the alerts such as(phishing mails etc.) and helps to
                            redeem those alerts.
                        </p>
                    </div>
                    <div>
                        <img src={ecommerceimg} className="img-width" style={{ "height": "350px", "width": "350px" }} />
                        <p className="legend mt-10">Legend 3</p>
                    </div>
                </Carousel>
            </div>
        </>
    )
}