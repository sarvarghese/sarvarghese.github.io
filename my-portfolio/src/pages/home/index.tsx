import React from "react";
import Card from "./card";
import { Grid } from "@material-ui/core";
import MiniSUD from "../../images/miniSUD.png";
import MiniPAM from "../../images/miniPAM.png";
import CI from "../../images/ci.png";

function Home() {
    return (
        <Grid container style={{ justifyContent: "center" }}>
            <Card
                image={MiniSUD}
                title={"Server Utilization Dashboard"}
                date={"2019 - present"}
                brief={
                    "Dashboard used to give insights into the server usage. Consolidated data by different criteria and gave algorithmic recommendations"
                }
                role={["Frontend Developer", "UI Designer"]}
                tech={["React", "Typescript", "Material UI", "Figma", "Sketch", "Adobe XD", "GraphQL", "Node"]}
            />
            <Card
                image={CI}
                title={"Career Insights"}
                date={"2020"}
                brief={
                    "Website used for event details, both upcoming and previous. Also included a section for users to list themselves as mentors for the community"
                }
                role={["Frontend Developer", "UI Designer"]}
                tech={["React", "Typescript", "Material UI", "Sketch"]}
            />
            <Card
                image={MiniPAM}
                title={"Product to Application Map and Match"}
                date={"2019 - present"}
                brief={"Dashboard used for cost savings analysis, & product retirement with recommendations given by big data analysis"}
                role={["Frontend Developer", "UI Designer"]}
                tech={["React", "Typescript", "Material UI", "Figma", "Sketch", "Adobe XD", "GraphQL", "Node"]}
            />
        </Grid>
    );
}
export default Home;
