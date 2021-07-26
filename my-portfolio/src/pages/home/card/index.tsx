import styled from "@emotion/styled";
import { Grid } from "@material-ui/core";
import { NavLink } from "react-router-dom";

function Card(props: any) {
    const CardStyles = styled((props: any) => (
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
        transition: all .1s ease-in;
        filter: drop-shadow(5px 5px 5px #222);
        background-image: linear-gradient(rgba(15, 15, 15, 0.5), rgba(15, 15, 15, 0.5)), url(${props.image});

        &:hover {
            transition: all .1s ease-out;
            border: 5px solid cornflowerblue;
            background-image: linear-gradient(rgba(15, 15, 15, 0.7), rgba(15, 15, 15, 0.7)), url(${props.image});
        }
    `;

    return (
        <Grid container style={{ justifyContent: "center" }}>
            <CardStyles>
                <Grid container style={{ justifyContent: "space-between" }}>
                    {props.stickers.map((item: any, index: number) => {
                        return <Grid item>
                            <img
                                alt=""
                                src={item}
                                style={{
                                    height: 100,
                                    zIndex: 1,
                                    position: "absolute",
                                    transform: index === 2 && props.title !== 'Career Insights' ? "rotate(30deg)" : "rotate(-15deg)",
                                    margin: index === 2 && props.title !== 'Career Insights' ? "-30px 0px 0px -150px" : "-50px 0px 0px -50px",
                                }}
                            />
                        </Grid>
                    })}
                </Grid>
                <NavLink to={`/${props.title.replace(/\s+/g, "-").toLowerCase()}`} style={{ textDecoration: "none" }}>
                    <Grid container style={{ padding: 30, justifyContent: "center", alignContent: 'center', minHeight: 400 }}>
                        <Grid item xs={12}>
                            <h1 style={{ textAlign: "center", margin: 0, color: "white", textShadow: "blue 3px 2px 3px", fontWeight: "bolder" }}>
                                {props.title}
                            </h1>
                            <h3
                                style={{
                                    color: "white",
                                    textAlign: "center",
                                    fontStyle: "italic",
                                    margin: "10px 0px 0px 0px",
                                    textShadow: "blue 3px 2px 3px",
                                }}
                            >
                                {props.date}
                            </h3>
                        </Grid>
                        <Grid
                            style={{
                                height: 5,
                                width: "100%",
                                borderRadius: 25,
                                margin: "30px 0px",
                                backgroundColor: "#CDEBF3",
                                boxShadow: "0px 3px 10px 3px blue",
                            }}
                        />
                        <Grid item xs={10} style={{ paddingTop: 20 }}>
                            <h3 style={{ textAlign: "center", textShadow: "black 1px 2px 2px", color: "white", margin: "0px 10px 0px" }}>
                                {props.brief}
                            </h3>
                        </Grid>
                    </Grid>
                </NavLink>
            </CardStyles>
        </Grid>
    );
}

export default Card;
