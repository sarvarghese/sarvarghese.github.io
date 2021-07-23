import React from "react";
import Home from "./pages/home";
import About from "./pages/about";
import Title from "./images/title.png";
import { Grid } from "@material-ui/core";
import Sparkles from "./images/sparkles4.gif";
import { BrowserRouter, Switch, Route, NavLink } from "react-router-dom";

function App() {
    return (
        <BrowserRouter>
            <Grid
                style={{
                    textAlign: "center",
                    backgroundColor: "#E3E4FF",
                    backgroundRepeat: "repeat",
                    backgroundSize: "200px 200px",
                    backgroundBlendMode: "difference",
                    backgroundImage: `url(${Sparkles})`,
                    width: "100%",
                    height: "100%",
                }}
            >
                <Grid
                    item
                    xs={12}
                    style={{
                        height: 100,
                        background: "linear-gradient(180deg, rgba(161,228,250,1) 0%, rgba(161,228,250,1) 20%, rgba(0,212,255,0) 80%)",
                    }}
                >
                    <img src={Title} alt="SARAH" style={{ height: 100 }} />
                </Grid>

                <Grid container style={{ justifyContent: "center" }}>
                    <Grid item xs={2}>
                        <NavLink to="/">
                            <h2 style={{ margin: 0 }}>work</h2>
                        </NavLink>
                    </Grid>
                    <Grid item xs={2}>
                        <NavLink to="/about">
                            <h2 style={{ margin: 0 }}>about</h2>
                        </NavLink>
                    </Grid>
                </Grid>

                <Grid item xs={12}>
                    <h1 style={{ fontSize: 25, fontStyle: "italic", color: "#D5FFFD", textShadow: "2px 2px gray" }}> developer and designer </h1>
                </Grid>

                <Switch>
                    <Route exact path="/about" component={About} />
                    <Route exact path="/" component={Home} />
                </Switch>
            </Grid>
        </BrowserRouter>
    );
}

export default App;
