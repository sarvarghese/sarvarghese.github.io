import styled from "@emotion/styled";
import { Grid } from "@material-ui/core";
// import SUD from '../../images/miniSUD.png'
import Data from './data.json';

function Work() {
    let data = Data as any;
    let title = window.location.pathname.split('/')[1].toString().replace(/-/g, ' ');
    title = title.toLowerCase().replace(/\b(\w)/g, s => s.toUpperCase());
    let acron: any = title.split(/\s/).reduce((response, word) => response += word.slice(0, 1), '')

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
                        <h1 style={{ marginBottom: 0, textAlign: 'center', textTransform: 'capitalize' }}>{data[acron].title}</h1>
                        <h4 style={{ marginTop: 5, textAlign: 'center' }}>{data[acron].dates}</h4>
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
                        <h3 style={{ textDecoration: 'underline', margin: '10px 0px 5px' }}>Tech Used:</h3>
                        <Grid container style={{ justifyContent: 'center' }}>
                            {data[acron].tech.map((item: string) => { return <h4 style={{ margin: '0px 10px' }}>{item} </h4> })}
                        </Grid>
                    </Grid>

                    <Grid container style={{ justifyContent: 'center', padding: '0px 30px 30px' }}>
                        <Grid item xs={10} style={{ marginTop: 20, textAlign: 'center' }}>
                            {data[acron].info.map((item: string) => { return <p style={{ margin: '10px 0px 5px' }}>{item}</p> })}
                        </Grid>
                        {/* <Grid item style={{ marginTop: 20, textAlign: 'center' }}>
                            <img src={SUD} alt='' />
                        </Grid> */}
                    </Grid>

                </Grid>
            </CardStyles>
        </Grid >
    );
}
export default Work;
