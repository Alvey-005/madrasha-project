import Head from "next/head";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import SimpleSlider from "../components/slider";
import HomeCard from "../components/HomeCard";
import {Box, Grid, Typography} from "@mui/material";
import Calender from "../components/Calender";
import PhotoGallery from "../components/PhotoGallery";
// import  ABUL_KALAM_HUJUR from "../assets/img/ABUL_KALAM_HUJUR.webp"
import ABUL_KALAM_HUJUR from "../public/images/ABUL KALAM HUJUR.jpg"
import Dobir from "../public/images/dobir_uddin.jpeg";
import ferdushi_arif from "../public/images/ferdushi_arif-2.png";
import mujib from "../public/images/Mujib_100_Logo.png";
import NoticeSlider from "../components/NoticeSlider";


export default function Home() {
    return (<>
            <Head>
                <title>Home</title>
                <link rel="shortcut icon"
                      href="/static/favicon-16x16.png"/>
            </Head>

            <main>
                <Box>
                    <SimpleSlider/>
                </Box>

                <Box margin='2rem'>
                    <Grid container spacing={2}>
                        <Grid item xs={12} md={4}
                              style={{textAlign: 'center', display: 'flex', justifyContent: 'center'}}>
                            <HomeCard
                                imageSrc={ferdushi_arif}
                                name='বেগম ফেরদৌসী আরিফ' position='সভাপতি' shortDescription="সভাপতি, ম্যানেজিং কমিটি"
                            />
                        </Grid>
                        <Grid item xs={12} md={4} sm={6}
                              style={{textAlign: 'center', display: 'flex', justifyContent: 'center'}}>
                            <HomeCard
                                imageSrc={ABUL_KALAM_HUJUR}
                                name="মো: আবুল কালাম আজাদ" position='সুপার'
                                shortDescription={"সুপার" + "\n" + "আবু তাহের দাখেলিয়া মাদ্রাসা"}
                                // shortDescription="<p>সুপার <br>আবু তাহের দাখেলিয়া মাদ্রাস</p>"
                                // shortDescription="অধ্যক্ষ\n "ও\n" . "সদস্য সচিব, গভর্নিং বডি"

                            />
                        </Grid>
                        <Grid item xs={12} md={4} sm={6}
                              style={{textAlign: 'center', display: 'flex', justifyContent: 'center'}}>
                            <HomeCard imageSrc={mujib}
                                // name='মো: দবির উদ্দিন আকন'
                                      position='মুজিববর্ষ'
                                      name="শিক্ষা নিয়ে গড়ব দেশ শেখ হাসিনার বাংলাদেশ"
                            />
                        </Grid>
                    </Grid>
                </Box>
                <Box sx={{margin: '2rem'}}>

                    <Grid container spacing={3}>
                        <Grid item xs={12} md={8} style={{
                            // background: '#eaeaea'
                            background: 'white'
                        }}>
                            <Typography variant='h3' style={{
                                textAlign: 'center', backgroundColor: '#023020', color: 'white'
                            }}>Academic Calender</Typography>
                            <Box>
                                <Calender/>
                            </Box>
                        </Grid>
                        <Grid item xs={12} md={4}>
                            <Typography variant='h3' style={{
                                textAlign: 'center', backgroundColor: '#023020', color: 'white'
                            }}>Notice Board</Typography>
                            <Box sx={{height:500 ,width:"100%"}}>
                                <NoticeSlider />
                            </Box>
                        </Grid>
                    </Grid>

                </Box>
                <Box>
                    <Grid container>
                        <Grid item xs={12} md={12}>
                            <Typography variant='h3' style={{
                                textAlign: 'center', backgroundColor: '#023020', color: 'white'
                            }}>Gallery</Typography>
                        </Grid>
                        <Grid item>
                            <PhotoGallery/>
                        </Grid>
                    </Grid>
                </Box>
                {/*<Box >*/}
                {/*    <Map location={location}/>*/}
                {/*</Box>*/}

            </main>
        </>);
}