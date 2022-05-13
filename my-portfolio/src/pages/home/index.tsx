import UTA from '../../images/uta.png';
import { Grid } from "@material-ui/core";
import Fid from '../../images/fidgreen.png';
import Globe from '../../images/globeblue.png';
import Udacity from '../../images/udacity.png';
import Linkedin from '../../images/linkedin.png';

function Home() {

    const Titles = (props:any) => {
        return <Grid item xs={12} style={{ marginTop: 10 }}>
            <h1 style={{ fontSize: 20, color: "black", textShadow: "white 2px 2px 2px", margin: 0 }}>
                {props.title}
            </h1>
            <h1 style={{ fontSize: 15, color: "grey", margin: 0 }}>
                {props.date}
            </h1>
        </Grid>
    }

    const Divider = () => {
        return <hr style={{margin: '30px 0px', border: '4px solid #90c4ee', borderRadius: 4}}/> 
    }

    return (
        <Grid container style={{ justifyContent: "center" }}>
            <Grid item xs={12}>
                <h1 style={{ fontSize: 25, fontStyle: "italic", color: "white", textShadow: "grey 2px 2px 2px " }}> developer and designer </h1>
            </Grid>
            <Grid item xs={7}>
                <h3 style={{ textAlign: 'center', color: '#2e3138' }}>
                    Sarah Varghese is a software engineer, specializing in frontend development & UI design.
                    <br />
                    She has over 3 years of experience in the telecom industry, developing websites using React, Typescript, Node, GraphQL, and designing using Figma.
                </h3>
            </Grid>
            

            <Grid item xs={8} style={{ textAlign: 'center', paddingBottom: 50 }}>
            <Divider/>
                <h1 style={{ fontSize: 25, color: "black", textShadow: "white 2px 2px 2px " }}>
                    WORK EXPERIENCE
                </h1>

                <Grid container style={{ alignItems: 'center' }}>  
                    <Grid container style={{justifyContent: 'center'}}>
                        <img alt="" src={Globe} style={{ height: 40 }} />
                        <Grid item>
                            <h1 style={{ fontSize: 25, textAlign: 'left', color: "white", textShadow: "#00A8E0 2px 2px 2px", margin: 0 }}>
                                AT&T
                            </h1>
                            <h1 style={{ fontSize: 15, color: "grey", margin: 0 }}>
                                June 2018 - Present
                            </h1>
                        </Grid>
                    </Grid> 
                    <Titles title='Professional - Big Data Software Engineer' date='Sept 2021 - Present'/>
                    <Titles title='Senior Specialist - Software Engineer' date='Jan 2021 - Aug 2021'/>
                    <Titles title='FlexForce Engineer II' date='Sept 2020 - Dec 2020'/>
                    <Titles title='Technology Development Engineer II' date='Oct 2019 - Aug 2020'/>
                    <Titles title='Technology Development Engineer I' date='Jan 2019 - Sept 2019'/>
                    <Titles title='Associate Software Engineer' date='June 2018 - Dec 2018'/>
                </Grid>

                <Grid container style={{ alignItems: 'center', marginTop: 30 }}>
                    <Grid container style={{justifyContent: 'center'}}>
                        <img alt="" src={Fid} style={{ height: 40 }} />
                        <Grid item style={{ marginLeft: 10 }}>
                            <h1 style={{ fontSize: 25, textAlign: 'left', color: "white", textShadow: "#76A923 2px 2px 2px", margin: 0 }}>
                                Fidelity
                            </h1>
                            <h1 style={{ fontSize: 15, color: "grey", margin: 0 }}>
                                May 2017 - Aug 2017
                            </h1>
                        </Grid>
                    </Grid> 
                    <Titles title='Technical Intern' date='May 2017 - August 2017'/>
                </Grid>
                
               <Divider/>

                <h1 style={{ fontSize: 25, color: "black", textShadow: "white 2px 2px 2px" }}>
                    CERTIFICATIONS
                </h1>
                <Grid container style={{justifyContent: 'center'}}>
                    <img alt="" src={Udacity} style={{ height: 40 }} />
                    <Grid item>
                        <h1 style={{ fontSize: 25, textAlign: 'left', color: "white", textShadow: "#02B3E4 2px 2px 2px", margin: 0 }}>
                            Udacity
                        </h1>
                        <h1 style={{ fontSize: 15, color: "grey", margin: 0 }}>
                            Aug 2020 - Dec 2020
                        </h1> 
                    </Grid>
                    <Titles title='User Experience Nanodegree' date=''/>
                </Grid> 

                <Divider/>            

                <h1 style={{ fontSize: 25, color: "black", textShadow: "white 2px 2px 2px" }}>
                    EDUCATION
                </h1>
                <Grid container style={{justifyContent: 'center'}}>
                    <img alt="" src={UTA} style={{ height: 35, marginRight: 10 }} />
                    <Grid item>
                        <h1 style={{ fontSize: 25, textAlign: 'left', color: "white", textShadow: "#0064B1 2px 2px 2px", margin: 0 }}>
                            UTA
                        </h1>
                        <h1 style={{ fontSize: 15, color: "grey", margin: 0, textAlign: 'left' }}>
                            Aug 2014 - Dec 2017
                        </h1> 
                    </Grid>
                    <Titles title='Bachelor of Science, Software Engineering' date=''/>
                </Grid> 

                <Divider/>

                <h1 style={{ fontSize: 25, color: "black", textShadow: "white 2px 2px 2px" }}>
                    CONTACT
                </h1>
                <Grid container style={{justifyContent: 'center'}}>
                    <img alt="" src={Linkedin} style={{ height: 35, marginRight: 10 }} />
                    <Grid item>
                    <a href="https://www.linkedin.com/in/sarah-varghese/">      
                        <h1 style={{ fontSize: 25, textAlign: 'left', color: "white", textShadow: "#0072b1 2px 2px 2px", margin: 0 }}>
                            Linkedin
                        </h1>
                    </a>
                    </Grid>
                </Grid>
            </Grid>
        </Grid>
    );
}
export default Home;
