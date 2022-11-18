import HomeCard from "../../components/HomeCard";
import {Box, Grid, Typography} from "@mui/material";
import {governData, mainOne} from "../../data/governing-body";

const GoverningBody = () => {
    return (

        <Box sx={{padding: '1rem'}}>
            <Typography variant='h3' style={{
                textAlign: 'center', backgroundColor: '#023020', color: 'white', paddingTop: '1rem'
            }}>ম্যানেজিং কমিটির মাননীয় সদস্যবৃন্দ</Typography>

            <Box sx={{margin: '4rem', display: "flex", justifyContent: "center"}}>
                <HomeCard imageSrc={mainOne.imageSrc} name={mainOne.name} position={mainOne.position}
                          shortDescription={mainOne.shortDescription}/>
            </Box>
            <div>
                <Box style={{display:"flex",justifyContent:"center",alignContent:"center",alignItems:"center"}}>
                <Grid container  spacing={1} style={{margin:"0 auto"}}>
                    {governData?.map(pitem => (
                        <Grid key={pitem.id} item sm={6} xs={12} md={6} lg={4}>
                            <HomeCard imageSrc={pitem.imageSrc} name={pitem.name} position={pitem.position}
                                      shortDescription={pitem.shortDescription}/>
                        </Grid>
                    ))}
                </Grid>
                </Box>
            </div>
        </Box>)
}
export default GoverningBody;