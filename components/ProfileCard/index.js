import React from "react";
import Card from "@mui/material/Card";
import CardMedia from "@mui/material/CardMedia";
import CardContent from "@mui/material/CardContent";
import Divider from "@mui/material/Divider";
import Typography from "@mui/material/Typography";
import {makeStyles} from "@mui/styles";

const styles = makeStyles(() => ({
    card: {
        maxWidth: 300,
        margin: "auto",
        transition: "0.3s",
        boxShadow: "0 8px 40px -12px rgba(0,0,0,0.3)",
        "&:hover": {
            boxShadow: "0 16px 70px -12.125px rgba(0,0,0,0.3)"
        }
    },
    media: {
        paddingTop: "56.25%"
    },
    content: {
        textAlign: "left",
        padding: '30px'
    },
    divider: {
        margin: `30px 0`
    },
    heading: {
        fontWeight: "bold"
    },
    subheading: {
        lineHeight: 1.8,
        textAlign :"center"
    },
    avatar: {
        display: "inline-block",
        border: "2px solid white",
        "&:not(:first-of-type)": {
            marginLeft: '-30px'
        }
    }
}));

const ProfileCard = ({ name,position }) => {
    const classes = styles();
    return (
        <div className="App">
            <Card className={classes.card}>
                <CardMedia
                    className={classes.media}
                    image={
                        "https://image.freepik.com/free-photo/river-foggy-mountains-landscape_1204-511.jpg"
                    }
                />
                <CardContent className={classes.content}>
                    <Typography
                        className={classes.heading}
                        variant={"h6"}
                        gutterBottom
                        style={{textAlign:'center'}}
                    >
                        {name}                    </Typography>
                    <Typography
                        // className={classes.subheading}
                        variant={"caption"}
                        // style={{textAlign:'center'}}
                    >
                        {position}
                    </Typography>
                    {/*<Divider className={classes.divider} light />*/}
                </CardContent>
            </Card>
        </div>
    );
}

export default ProfileCard;