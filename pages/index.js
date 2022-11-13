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
import Map from '../components/Map';
import {useEffect} from "react";
const location = {
    address: '1600 Amphitheatre Parkway, Mountain View, california.',
    lat: 38.8951,
    lng: -77.0364,
}
// export const getStaticProps = async () => {
//
//     // Fetching data from jsonplaceholder.
//     const res = await fetch(
//         '/api/notice');
//     let allAlbums = await res.json();
//
//     // Sending fetched data to the page component via props.
//     return {
//         props: {
//             allAlbums: allAlbums.map((album) => album.title)
//         }
//     }
// }

export default function Home() {
    return (
        <div className={styles.container}>
            <Head>
                <title>Create Next App</title>
                <link rel="icon" href="/favicon.ico"/>
            </Head>

            <main>
                <Header/>
                <Box>
                    <SimpleSlider/>
                </Box>

                <Box margin='2rem'>
                    <Grid container spacing={2}>
                        <Grid item xs={12} md={4}
                              style={{textAlign: 'center', display: 'flex', justifyContent: 'center'}}>
                            <HomeCard imageSrc="https://d3or5urpu0oqw6.cloudfront.net/images/message_images/y8K0bkDf9kFXNdMmIRDOavMRxAaAGXfrOfKXNKJn.jpeg"
                            name='আবু হেনা মোরশেদ জামান' position='সভাপতি' shortDescription="সভাপতি, গভর্নিং বডি
ও
 সচিব
বাস্তবায়ন পরিবীক্ষণ ও মূল্যায়ন বিভাগ (আইএমইডি), পরিকল্পনা মন্ত্রণালয়।"
                            />
                        </Grid>
                        <Grid item xs={12} md={4}
                              style={{textAlign: 'center', display: 'flex', justifyContent: 'center'}}>
                            <HomeCard imageSrc="https://d3or5urpu0oqw6.cloudfront.net/images/message_images/9pz6Bcnurp2NSuE3JFe4mFySky959ildj88XYNRv.jpeg"
                            name="ফাওজিয়া রাশেদী" position='অধ্যক্ষ' shortDescription='অধ্যক্ষ
আইডিয়াল স্কুল অ্যান্ড কলেজ'
                            />
                        </Grid>
                        <Grid item xs={12} md={4}
                              style={{textAlign: 'center', display: 'flex', justifyContent: 'center'}}>
                            <HomeCard imageSrc='https://iscm.edu.bd/images/mujibborso.png' name='' position='মুজিববর্ষ' shortDescription="শিক্ষা নিয়ে গড়ব দেশ
শেখ হাসিনার বাংলাদেশ"/>
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

                        <Grid item xs={12} md={8} style={{background: '#eaeaea'
                        }}>
                            <Calender/>
                        </Grid>
                    </Grid>

                </Box>
                <Box>
                    <PhotoGallery />
                </Box>
                {/*<Box >*/}
                {/*    <Map location={location}/>*/}
                {/*</Box>*/}
                <Footer/>

            </main>
        </div>
    );
}