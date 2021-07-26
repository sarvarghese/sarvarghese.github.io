import styled from "@emotion/styled";
import { Grid } from "@material-ui/core";
import SUD from '../../images/miniSUD.png'

function Work() {
    let tech = ['React', 'Typescript', 'Material UI', 'GraphQL', 'Node', 'Figma', 'Sketch', 'Adobe XD']
    const CardStyles = styled((props: any) => (
        <Grid item xs={7} {...props}>
            {props.children}
        </Grid>
    ))`
        margin: 50px;
        max-width: 700px;
        text-align: left;
        min-height: 400px;
        border-radius: 15px;
        border: 5px solid white;
        background-size: contain;
        box-shadow: 2px 2px 3px #222;
        background-color: rgb(110, 214, 230, 0.27)
    `;

    return (
        <Grid container style={{ justifyContent: "center" }}>
            <CardStyles>
                <Grid container style={{ justifyContent: 'center' }}>
                    <Grid>
                        <h1 style={{ marginBottom: 0, textAlign: 'center' }}>Server Utilization Dashboard</h1>
                        <h4 style={{ marginTop: 5, textAlign: 'center' }}>January 2019 - Present</h4>
                    </Grid>
                    <Grid
                        style={{
                            height: 5,
                            width: "80%",
                            borderRadius: 25,
                            backgroundColor: "white",
                        }}
                    />
                    <Grid item xs={7} style={{ marginTop: 10, textAlign: 'center' }}>
                        <h3 style={{ textDecoration: 'underline', margin: '0px 0px 5px' }}>Roles:</h3>
                        <h4 style={{ margin: 0 }}>Frontend Developer</h4>
                        <h4 style={{ margin: 0 }}>UI Designer </h4>
                    </Grid>
                    <Grid item xs={7} style={{ marginTop: 10, textAlign: 'center' }}>
                        <h3 style={{ textDecoration: 'underline', margin: '10px 0px 5px' }}>Tech Stack:</h3>
                        <Grid container style={{ justifyContent: 'center' }}>
                            {tech.map((item: string) => { return <h4 style={{ margin: '0px 10px' }}>{item} </h4> })}
                        </Grid>
                    </Grid>

                    <Grid container style={{ justifyContent: 'center', padding: 30 }}>
                        <Grid item xs={10} style={{ marginTop: 20, textAlign: 'center' }}>
                            <p style={{ margin: '10px 0px 5px' }}>
                                This project’s goal is to give insight into the servers on premise. It grouped the servers by organization, data center, and environment, allowing the user to see both high level summary information and drill down to the server detail view.
                            </p>
                            <p style={{ margin: '10px 0px 5px' }}>
                                I started on the project as a frontend developer and code over 30+ screens and 20+ components, several of which were optimized for reuse in the dashboard.
                            </p>
                            <p style={{ margin: '10px 0px 5px' }}>
                                I took over for a previous designer who had designed the screens in both Adobe XD and Sketch, which I then converted to Figma to make it easier for the team to access and colloborate on.
                            </p>
                        </Grid>
                        <Grid item style={{ marginTop: 20, textAlign: 'center' }}>
                            <img src={SUD} alt='' />
                        </Grid>
                    </Grid>

                </Grid>
            </CardStyles>
        </Grid >
    );
}
export default Work;
