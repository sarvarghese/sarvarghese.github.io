import React from "react";
import Work from "./pages/work";
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
                    width: "100%",
                    height: "100%",
                    minWidth: "100vw",
                    minHeight: "100vh",
                    textAlign: "center",
                    backgroundColor: "#E3E4FF",
                    backgroundRepeat: "repeat",
                    backgroundSize: "200px 200px",
                    backgroundBlendMode: "difference",
                    backgroundImage: `url(${Sparkles})`,
                }}
            >
                <NavLink to="/">
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
                </NavLink>

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

                <Switch>
                    <Route exact path="/" component={Home} />
                    <Route exact path="/about" component={About} />
                    <Route exact path="/:work" component={Work} />
                </Switch>
            </Grid>
        </BrowserRouter>
    );
}

export default App;
