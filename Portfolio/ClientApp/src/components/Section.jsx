import React from "react";
import { Container } from 'reactstrap';

export default function Section({ title, subtitle, dark, id }) {
    return (
        <div className={"section" + (dark ? " section-dark" : "")}>
            <Container id={id}>
                <h1>{title}</h1>
                <p>{subtitle}</p>
            </Container>
        </div>
    );
}