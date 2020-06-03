import React from "react";
import Typewriter from 'typewriter-effect';
import { Link } from "react-scroll";

import bkgVideo from '../../videos/background_video.mp4';

export default function HomeSection() {

    const duration = 1000;
    const offset = -275;
    return (
        <div className="home_section">

            <video autoPlay="autoplay" loop="loop" muted >
                <source src={bkgVideo} type="video/mp4" />
                Your browser does not support the video tag.
            </video>
            <div className="colorOverlay">
                <div className="vertical-center">
                    <h1 className="text-center">
                        <Typewriter
                            onInit={(typewriter) => {
                                typewriter.typeString('Hi, I\'m Stefan.')
                                    .pauseFor(500)
                                    .deleteChars(7)
                                    .typeString('a C# / .NET / Full Stack developer.')
                                    .pauseFor(500)
                                    .deleteChars(33)
                                    .start()
                            }}
                            options={{
                                loop: true
                            }}
                        />
                    </h1>
                    <div style={{ textAlign: "center", marginTop: '50px' }}
                        data-aos='flip-left'
                        data-aos-delay='500'
                        data-aos-duration='1000'>
                        <Link
                            className="btn btn-outline-primary no-outline btn_rotate_svg"
                            to="about_section"
                            spy={true}
                            smooth={true}
                            offset={offset}
                            duration={duration}
                        >
                            <span>View my work</span>
                            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="feather feather-arrow-right"><line x1="5" y1="12" x2="19" y2="12"></line><polyline points="12 5 19 12 12 19"></polyline></svg>
                        </Link>
                    </div>
                </div>
            </div>

            {/* <div className="vertical-center">
                <h1 className="text-center">
                    <Typewriter
                        onInit={(typewriter) => {
                            typewriter.typeString('Hi, I\'m Stefan.')
                                .pauseFor(500)
                                .deleteChars(7)
                                .typeString('a C# / .NET / Full Stack developer.')
                                .pauseFor(500)
                                .deleteChars(33)
                                .start()
                        }}
                        options={{
                            loop: true
                        }}
                    />
                </h1>
                <div style={{ textAlign: "center", marginTop: '50px' }}
                    data-aos='flip-left'
                    data-aos-delay='500'
                    data-aos-duration='1000'>
                    <Link
                        className="btn btn-outline-primary no-outline btn_rotate_svg"
                        to="about_section"
                        spy={true}
                        smooth={true}
                        offset={offset}
                        duration={duration}
                    >
                        <span>View my work</span>
                        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="feather feather-arrow-right"><line x1="5" y1="12" x2="19" y2="12"></line><polyline points="12 5 19 12 12 19"></polyline></svg>
                    </Link>
                </div>
            </div> */}
            {/* <div className="home_section_urls">
                <a href="https://github.com/stefanalexandru02" className="btn btn-outline-primary no-outline hvr-pulse btn_full_transparent" style={{border: 'none'}}>
                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="feather feather-github"><path d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 0 0 9 18.13V22"></path></svg>
                </a>
                <a href="https://www.linkedin.com/in/stefan-alexandru-virna-73096a18a/" className="btn btn-outline-primary no-outline hvr-pulse btn_full_transparent" style={{border: 'none'}}>
                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="feather feather-linkedin"><path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"></path><rect x="2" y="9" width="4" height="12"></rect><circle cx="4" cy="4" r="2"></circle></svg>
                </a>               
            </div> */}
        </div>
    );
}