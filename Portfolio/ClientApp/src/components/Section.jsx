import React from "react";
import { Container } from 'reactstrap';

export default function Section({ title, subtitle, dark, id, children }) {
    if (children === undefined)
        return (
            <div className={"section" + (dark ? " section-dark" : "")} data-aos='fade-up'>
                <Container id={id}>
                    <h1 className="text-center">{title}</h1>
                    <p>{subtitle}</p>
                </Container>
            </div>
        );
    else {
        return (
            <div className={"section" + (dark ? " section-dark" : "")} data-aos='fade-up'>
                <Container id={id}>
                    {children}
                </Container>
            </div>
        );
    }
}