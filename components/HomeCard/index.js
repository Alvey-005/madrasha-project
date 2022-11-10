import * as React from 'react';
import {useTheme} from '@mui/material/styles';
import Box from '@mui/material/Box';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import {Button, CardActionArea, CardActions} from "@mui/material";

const HomeCard = ({imageSrc,name,position,shortDescription,link,linkName}) => {
    imageSrc = imageSrc?imageSrc:"https://images.unsplash.com/photo-1570295999919-56ceb5ecca61?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=580&q=80"
    const theme = useTheme();
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
                    alt="green iguana"
                    sx={{objectFit:"contain"}}
                />
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