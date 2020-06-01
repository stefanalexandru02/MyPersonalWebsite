import React from "react";
import Typewriter from 'typewriter-effect';
import { Container } from 'reactstrap';

export default function HomeSection() {
    return (
        <div className="home_section">
            <div className="vertical-center">
                <h1 className="text-center">
                    <Typewriter
                        onInit={(typewriter) => {
                            typewriter.typeString('Hi, I\'m Stefan.')
                                .pauseFor(500)
                                .deleteChars(7)
                                .typeString('a C# / .NET developer.')
                                .pauseFor(100)
                                .deleteChars(20)
                                .typeString('full stack web developer.')
                                .pauseFor(100)
                                .deleteChars(25)
                                .typeString('mobile developer.')
                                .pauseFor(100)
                                .start()
                        }}
                        options={{
                            loop: true
                        }}
                    />
                </h1>
                <div style={{ textAlign: "center", marginTop: '50px' }}>
                    <button className="btn btn-outline-primary no-outline">
                        <span>View my work</span>
                        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="feather feather-arrow-right"><line x1="5" y1="12" x2="19" y2="12"></line><polyline points="12 5 19 12 12 19"></polyline></svg>
                    </button>
                </div>
            </div>
        </div>
    );
}