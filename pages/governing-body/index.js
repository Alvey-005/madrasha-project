import HomeCard from "../../components/HomeCard";
import {Box, Grid, Typography} from "@mui/material";
import Header from "../../components/Header";
import Footer from "../../components/Footer";
import styles from "../../styles/Home.module.css";


const governData = [
    {id:2,imageSrc:"https://d3or5urpu0oqw6.cloudfront.net/images/message_images/CfETDltAMpqQBEljH5KcRsLsndsmZifugpprelDs.jpeg",name:"ফাওজিয়া রাশেদী",position:"অধ্যক্ষ",shortDescription:"অধ্যক্ষ\n" +
            "ও\n" +
            "সদস্য সচিব, গভর্নিং বডি"},
    {id:3,imageSrc:"https://d3or5urpu0oqw6.cloudfront.net/images/governing_body_images/WyY1kc84KulXATrjIQxa2WbjyI2vzd0ZTiBUN7Zm.jpg",name:"মোঃ শহিদুল ইসলাম ",position:"বিদ্যোৎসাহী সদস্য",shortDescription:"জেলা প্রশাসক, ঢাকা জেলা"},
    {id:4,imageSrc:"https://d3or5urpu0oqw6.cloudfront.net/images/governing_body_images/ZJQxOlh3N7jnIh8FV1VX6uaYYD7eKD3iazuVt3TC.jpg",name:"মাকসুদা আক্তার",position:"শিক্ষক প্রতিনিধি",shortDescription:"শিক্ষক"},
    {id:5,imageSrc:"https://d3or5urpu0oqw6.cloudfront.net/images/governing_body_images/C5tmVq3vjN5JcaY0e5FqSx9gVF5vN8wvii89ELOi.jpg",name:"মোঃ অধ্যাপক আমজাদ হোসেন",position:"অভিভাবক সদস্য(মাধ্যমিক)",shortDescription:"অধ্যাপক"},
    {id:6,imageSrc:"https://d3or5urpu0oqw6.cloudfront.net/images/governing_body_images/9hwTa4MoPZLufAoVQBpcbzhBPrPAkwtjfPZBqYOK.jpg",name:"মোঃ শাহাদাৎ ঢালী",position:"অভিভাবক সদস্য( প্রাথমিক)",shortDescription:""},
    {id:7,imageSrc:"https://d3or5urpu0oqw6.cloudfront.net/images/governing_body_images/1UrGPF3Zh4PrCvSVPsKY4pRTgQxuBxNNZsX7xccp.jpg",name:"খন্দকার মুশতাক আহমেদ",position:"দাতা সদস্য",shortDescription:""},
]
 const mainOne = {id:1,imageSrc:"https://d3or5urpu0oqw6.cloudfront.net/images/governing_body_images/wFQagj9fPKTLtV8QgCmRjw1OhfK3LWd2zZ98UMz5.jpg",name:"আবু হেনা মোরশেদ জামান",position:"সভাপতি",shortDescription:"সচিব \n" +
        "বাস্তবায়ন পরিবীক্ষণ ও মূল্যায়ন বিভাগ (আইএমইডি), পরিকল্পনা মন্ত্রণালয়।"};
const GoverningBody = () => {
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