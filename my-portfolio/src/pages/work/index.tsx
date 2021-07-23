import React from "react";
import { Grid } from "@material-ui/core";

function Work() {
    return (
        <Grid container style={{ justifyContent: "center" }}>
            <Grid
                item
                xs={6}
                style={{
                    borderRadius: 5,
                    textAlign: "left",
                    padding: "20px 10px",
                    border: "2px solid gray",
                    backgroundColor: "rgb(255,255,255,.5)",
                }}
            >
                <Grid container style={{ justifyContent: "space-between", alignItems: "baseline" }}>
                    <h2 style={{ margin: 0 }}> AT&T Dashboards</h2>
                    <h3 style={{ margin: 0, fontStyle: "italic" }}> 2019 - present</h3>
                </Grid>
                <hr />
            </Grid>
        </Grid>
    );
}
export default Work;
