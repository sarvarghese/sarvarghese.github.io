import Card from "./card";
import CI from "../../images/ci.png";
import { Grid } from "@material-ui/core";
import Smile from "../../images/smile.png";
import sudBG from "../../images/sudBG.png";
import Flower from "../../images/flower.png";
import MiniPAM from "../../images/miniPAM.png";
import BlueStar from "../../images/bluestar.png";
import PurpleStar from "../../images/purplestar.png";

function Home() {
    return (
        <Grid container style={{ justifyContent: "center" }}>
            <Grid item xs={12}>
                <h1 style={{ fontSize: 25, fontStyle: "italic", color: "white", textShadow: "black 2px 2px 2px " }}> developer and designer </h1>
            </Grid>
            <Card
                image={sudBG}
                stickers={[Flower, "", Flower]}
                title={"Server Utilization Dashboard"}
                date={"2019 - present"}
                brief={
                    "Dashboard used to give insights into the server usage. Consolidated data by different criteria and gave algorithmic recommendations"
                }
                role={["Frontend Developer", "UI Designer"]}
                tech={["React", "Typescript", "Material UI", "Figma", "Sketch", "Adobe XD", "GraphQL", "Node"]}
            />
            <Card
                image={MiniPAM}
                stickers={[ '',  Smile, '']}
                title={"Product to Application Map and Match"}
                date={"2019 - 2021"}
                brief={"Dashboard used for cost savings analysis, & product retirement with recommendations given by big data analysis"}
                role={["Frontend Developer", "UI Designer"]}
                tech={["React", "Typescript", "Material UI", "Figma", "Sketch", "GraphQL", "Node"]}
            />
            <Card
                image={CI}
                stickers={[PurpleStar, '',BlueStar]}
                title={"Career Insights"}
                date={"2020"}
                brief={
                    "Website used for event details, both upcoming and previous. Also included a section for users to list themselves as mentors for the community"
                }
                role={["Frontend Developer", "UI Designer"]}
                tech={["React", "Typescript", "Material UI", "Sketch"]}
            />
        </Grid>
    );
}
export default Home;
