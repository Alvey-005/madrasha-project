import HomeCard from "../../components/HomeCard";
import {Box, Grid, Typography} from "@mui/material";
import Header from "../../components/Header";
import Footer from "../../components/Footer";
import styles from "../../styles/Home.module.css";
import {GoverningData,mainOne} from './data'
const governData = GoverningData;

const GoverningBody = () => {
    console.log(mainOne);
    return (
        <div className={styles.container}>
            <Header/>
            <Box sx={{padding:'1rem'}}>
                <Typography variant='h3' style={{
                    textAlign: 'center',
                    backgroundColor: '#023020',
                    color: 'white',
                    paddingTop:'1rem'
                }}>গভর্নিং বডির মাননীয় সদস্যবৃন্দ (২০২১-২০২৩)</Typography>

                <div style={{margin: '4rem', display: "flex", justifyContent: "center"}}>
                    <HomeCard imageSrc={mainOne.imageSrc} name={mainOne.name} position={mainOne.position} shortDescription={mainOne.shortDescription}/>
                </div>
                <div >
                    <Grid container spacing={3}>
                        {governData?.map(pitem=>(
                            <Grid key={pitem.id} item sm={6} xs={12} md={6} lg={4}>
                                <HomeCard imageSrc={pitem.imageSrc} name={pitem.name} position={pitem.position} shortDescription={pitem.shortDescription}/>
                            </Grid>
                        ))}



                    </Grid>
                </div>
            </Box>
            <Footer/>
        </div>
    )
}
export default GoverningBody;