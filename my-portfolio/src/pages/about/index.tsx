import React from "react";
import { Grid } from "@material-ui/core";
import styled from "@emotion/styled";

function About() {
    const Card = styled((props: any) => (
        <Grid item xs={7} {...props}>
            {props.children}
        </Grid>
    ))`
        margin: 50px;
        max-width: 700px;
        text-align: left;
        border-radius: 5px;
        min-height: 400px;
        border: 5px solid white;
        background-size: contain;
        box-shadow: 2px 2px 3px #222;
        background-color: rgb(110, 214, 230, 0.27)
    `;

    return (
        <Grid container style={{ justifyContent: "center", }}>
            <Card>
                <Grid container style={{ justifyContent: "center", padding: 30 }}>
                    <h3 style={{ textAlign: 'center' }}>
                        Sarah Varghese is a software engineer, with 3+ years in the telcom industry. She has specialized in frontend development & UI design.
                        <br />
                        She's looking to expand both her UI development and designing capabilities
                    </h3>
                    <h3 style={{ textAlign: 'center' }}>
                        Get in touch:
                        <br />
                        <a href="https://www.linkedin.com/in/sarah-varghese/">
                            LinkedIn
                        </a>
                        <br />
                        <a href='https://drive.google.com/file/d/1UQiGUHNCiwALFYCmOcWb_bwPzi1XICWk/view?usp=sharing'>Resume</a>
                        <br />
                        <a href="mailto:sarah.m.varghese@gmail.com">Email</a>
                    </h3>
                </Grid >
            </Card>
        </Grid >
    );
}
export default About;
