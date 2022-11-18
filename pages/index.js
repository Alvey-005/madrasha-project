import Head from "next/head";
import styles from "../styles/Home.module.css";
import Header from "../components/Header";
import Footer from "../components/Footer";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import SimpleSlider from "../components/slider";
import HomeCard from "../components/HomeCard";
import {Box, Grid, Typography} from "@mui/material";
import Calender from "../components/Calender";
import PhotoGallery from "../components/PhotoGallery";
// import  ABUL_KALAM_HUJUR from "../assets/img/ABUL_KALAM_HUJUR.webp"
import ABUL_KALAM_HUJUR from "../public/images/ABUL KALAM HUJUR.jpg"

export default function Home() {
    return (
        <>
            <Head>
                <title>Home</title>
                <link rel="icon" href="/favicon.ico"/>
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
                                imageSrc="https://d3or5urpu0oqw6.cloudfront.net/images/message_images/y8K0bkDf9kFXNdMmIRDOavMRxAaAGXfrOfKXNKJn.jpeg"
                                name='বেগম ফেরদৌসী আরিফ' position='সভাপতি' shortDescription="সভাপতি, ম্যানেজিং কমিটি"
                            />
                        </Grid>
                        <Grid item xs={12} md={4}
                              style={{textAlign: 'center', display: 'flex', justifyContent: 'center'}}>
                            <HomeCard
                                imageSrc={ABUL_KALAM_HUJUR}
                                name="মো: আবুল কালাম আজাদ" position='সুপার'
                                shortDescription={"সুপার" + "\n" + "আবু তাহের দাখেলিয়া মাদ্রাসা"}
                                // shortDescription="<p>সুপার <br>আবু তাহের দাখেলিয়া মাদ্রাস</p>"
                                // shortDescription="অধ্যক্ষ\n "ও\n" . "সদস্য সচিব, গভর্নিং বডি"

                            />
                        </Grid>
                        <Grid item xs={12} md={4}
                              style={{textAlign: 'center', display: 'flex', justifyContent: 'center'}}>
                            <HomeCard imageSrc='https://iscm.edu.bd/images/mujibborso.png' name='মো: দবির উদ্দিন আকন'
                                      position='অভিভাবক সদস্য'
                                // shortDescription="শিক্ষা নিয়ে গড়ব দেশশেখ হাসিনার বাংলাদেশ"
                            />
                        </Grid>
                    </Grid>
                </Box>
                <Box sx={{margin: '2rem'}}>

                    <Grid container>
                        <Grid item xs={12} md={8}>
                            <Typography variant='h3' style={{
                                textAlign: 'center',
                                backgroundColor: '#023020',
                                color: 'white'
                            }}>Academic Calender</Typography>
                        </Grid>

                        <Grid item xs={12} md={8} style={{
                            background: '#eaeaea'
                        }}>
                            <Calender/>
                        </Grid>
                    </Grid>

                </Box>
                <Box>
                    <PhotoGallery/>
                </Box>
                {/*<Box >*/}
                {/*    <Map location={location}/>*/}
                {/*</Box>*/}

            </main>
        </>
    );
}