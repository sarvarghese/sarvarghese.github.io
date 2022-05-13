import Home from "./pages/home";
import About from "./pages/about";
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
                <NavLink to="/" style={{textDecoration: 'none', color: 'white'}}>
                    <Grid
                        item
                        xs={12}
                        style={{
                            background: "linear-gradient(180deg, rgba(161,228,250,1) 0%,  rgba(0,212,255,0) 80%)",
                        }}
                    >
                        <h1 style={{ fontSize: 40, margin: 0, paddingTop: 20, textShadow: "black 2px 2px 2px"}}>
                            sarah varghese
                        </h1>
                    </Grid>
                </NavLink>

                <Switch>
                    <Route exact path="/" component={Home} />
                    {/* <Route exact path="/about" component={About} /> */}
                </Switch>
            </Grid>
        </BrowserRouter>
    );
}

export default App;
