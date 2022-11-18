import * as React from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import {Button, CardActionArea, CardActions} from "@mui/material";
import Profile from "../../public/images/img_avatar.png";

const HomeCard = ({imageSrc,name,position,shortDescription,link,linkName}) => {
    imageSrc = imageSrc.src?imageSrc.src:Profile.src;
    return (
        <Card sx={{minWidth: 300}}>
            <CardActionArea>
                <Typography component="h1" variant='h1' sx={{ fontSize: 28,textAlign:'center' ,backgroundColor:"#023020",color:'white',padding:'0.5rem'}} >
                    {position}
                </Typography>
                <CardMedia
                    component="img"
                    height="280"
                    image = {imageSrc}
                    // src={imageSrc}
                    alt="green iguana"
                    sx={{objectFit:"contain"}}
                >
                </CardMedia>
                <CardContent>
                    <Typography gutterBottom variant="h5" component="div" sx={{textAlign:"center"}}>
                        {name}
                    </Typography>
                    {
                        shortDescription?<Typography variant="body2" color="text.secondary" sx={{textAlign:"center"}}>
                            {shortDescription}
                        </Typography>:null
                    }

                </CardContent>
            </CardActionArea>
            <CardActions>
                {link?<Button size="small" color="primary">
                    {linkName}
                </Button>:null}

            </CardActions>
        </Card>);


}
export default HomeCard;