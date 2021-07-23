import { Grid } from "@material-ui/core";
import { NavLink } from "react-router-dom";

function Card(props: any) {
    return (
        <Grid
            item
            xs={7}
            style={{
                margin: 50,
                height: 400,
                maxWidth: 700,
                borderRadius: 5,
                textAlign: "left",
                backgroundSize: 250,
                border: "5px solid white",
                backgroundRepeat: "repeat",
                filter: "drop-shadow(5px 5px 5px #222)",
                backgroundImage: `linear-gradient(rgba(15,15,15, 0.5), rgba(15,15,15, 0.5)), url(${props.image})`,
            }}
        >
            <Grid container style={{ padding: 30 }}>
                <Grid item xs={12}>
                    <Grid container style={{ justifyContent: "space-between", alignItems: "baseline" }}>
                        <NavLink to="/about" style={{ textDecoration: "none" }}>
                            <h2 style={{ margin: 0, color: "white", textShadow: "blue 3px 2px 3px", fontWeight: "bolder" }}>{props.title}</h2>
                        </NavLink>
                        <h3 style={{ margin: 0, fontStyle: "italic", color: "white", textShadow: "blue 3px 2px 3px" }}>{props.date}</h3>
                    </Grid>
                    <div
                        style={{
                            height: 5,
                            width: "100%",
                            borderRadius: 25,
                            margin: "10px 0px",
                            backgroundColor: "#CDEBF3",
                            boxShadow: "0px 3px 10px 3px blue",
                        }}
                    />
                </Grid>

                <Grid container>
                    <Grid item xs={12}>
                        <Grid container style={{ justifyContent: "center" }}>
                            <Grid item xs={12} style={{ textAlign: "center" }}>
                                <h2 style={{ color: "white", margin: "0px 10px 0px", textDecoration: "underline" }}>Project Brief:</h2>
                            </Grid>
                            <Grid item xs={12}>
                                <h3 style={{ textAlign: "center", color: "white", margin: "0px 10px 0px" }}>{props.brief}</h3>
                            </Grid>
                        </Grid>
                    </Grid>

                    <Grid item xs={12} style={{ paddingTop: 10 }}>
                        <Grid container style={{ justifyContent: "center" }}>
                            <Grid item xs={12} style={{ textAlign: "center" }}>
                                <h2 style={{ color: "white", margin: "0px 10px 0px", textDecoration: "underline" }}>Role:</h2>
                            </Grid>
                            <Grid item xs={12} style={{ justifyContent: "center", display: "inline-flex" }}>
                                {props.role.map((item: string) => {
                                    return <h2 style={{ color: "white", margin: "0px 10px 0px" }}>{item}</h2>;
                                })}
                            </Grid>
                        </Grid>
                    </Grid>

                    <Grid item xs={12} style={{ paddingTop: 10 }}>
                        <Grid container style={{ justifyContent: "center" }}>
                            <Grid item xs={12} style={{ textAlign: "center" }}>
                                <h2 style={{ color: "white", margin: "0px 10px 0px", textDecoration: "underline" }}>Tech Used:</h2>
                            </Grid>
                            <Grid item xs={12} style={{ display: "inline-flex" }}>
                                <Grid container style={{ justifyContent: "center" }}>
                                    {props.tech.map((item: string) => {
                                        return <h2 style={{ color: "white", margin: "0px 10px 0px" }}>{item}</h2>;
                                    })}
                                </Grid>
                            </Grid>
                        </Grid>
                    </Grid>
                </Grid>
            </Grid>
        </Grid>
    );
}

export default Card;
