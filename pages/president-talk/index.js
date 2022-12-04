import {Box, Grid, Typography} from "@mui/material";
import Header from "../../components/Header";
import Footer from "../../components/Footer";
import styles from "../../styles/Home.module.css";
import Image from 'next/image'
import Profile from '../../public/images/ABUL KALAM HUJUR.webp';

const PrincipalLecture = () => {
    const data = {
        title: "প্রতিষ্ঠান প্রধানের বাণী",
        name: "মাওলানা মোঃ আবুল কালাম আজাদ",
        position: "সুপার, আবু তাহের দাখিল মাদ্রাসা, শিবচর, মাদারীপুর।",
        lineOne: "বিসমিল্লাহির রাহমানির রাহিম",
        text:"প্রশংসা জ্ঞাপন করছি মহান আল্লাহ" +
            " তাআলার দরবারে যিনি আমাদেরকে ঐশী শিক্ষা সম্প্রসারনে আধুনিক প্রযুক্তির মহাসড়কে সম্পৃক্ত হওয়ার তৌফিক দিয়েছেন। দুরদ ও সালাম পেশ করছি মানবতার শেষ্ঠ শিক্ষক হযরত মুহাম্মদ (সা) এর উপরে। মাদ্রাসার প্রতিষ্ঠাতা মরহুম আব্দুল মালেক চৌধুরী, তার ভাইদের ও তাদের পরিবারবর্গের প্রতি কৃতজ্ঞতা প্রকাশ করছি। " +
            "। অত্র প্রতিষ্ঠানের শিক্ষাকদের প্রতি যাদের অক্লান্ত পরিশ্রমে এম.পি.ও ভুক্ত এ দ্বীনি মাদ্রাসাটি বর্তমানে ইসলাম ও সাধারণ জ্ঞানের শ্রেষ্ঠতম প্রতিষ্ঠান হিসেবে পরিচিতি লাভ করেছে।\n" +
            "\n" +
            "এ মাদ্রাসায়" +
            " রয়েছে এক দক্ষ, কর্মতৎপর ও বিদ্যানুরাগী ম্যানেজিং কমিটি, অভিজ্ঞ শিক্ষক মন্ডলী ও আধুনিক শিক্ষার সকল সুযোগ সুবিধা। সারা পৃথিবী তাই ইসলামী শিক্ষা পদ্ধতি শ্রেষ্ঠতম পদ্ধতি বলে স্বীকৃতি পাচ্ছে।  আধুনিক প্রযুক্তির অংশ হিসেবে আবু তাহের দাখিল মাদ্রাসার এ ওয়েব সাইটটির আত্মপ্রকাশ।\n" +
            "\n" +
            "বাংলাদেশে ইসলামি শিক্ষাব্যবস্থার আধুনিকায়নে শিক্ষাবান্ধব সরকারের আহ্বানে সাড়া দিয়ে যে সকল শিক্ষা প্রতিষ্ঠান ইতোমধ্যে যুগ উপযোগী শিক্ষাব্যবস্থা গ্রহণ করেছে “আবু তাহের দাখিল মাদ্রাসা” তাদের অন্যতম।"
    }
    return (<Box sx={{display: 'flex', justifyContent: "center", textAlign: 'center', flexDirection: 'column'}}>
            <Typography gutterBottom={2} variant='h3' style={{
                textAlign: 'center', backgroundColor: '#023020', color: 'white', paddingTop: '1rem'
            }}>{data.title}</Typography>
            <Image
                src={Profile}
                alt="Picture of the author"
                width={200}
                height={200}
                objectFit='contain'
            />
            <Box sx={{padding: '2rem', margin: "0 2rem"}}>
                <Typography component='h1' gutterBottom style={{fontSize: 28}}>{data.name}</Typography>
                <Typography gutterBottom>{data.position}</Typography>
                <Typography gutterBottom component='h3'>{data.lineOne}</Typography>
                <Typography gutterBottom component="p">{data.text}</Typography>
                {/*<Typography gutterBottom>বাস্তবায়ন পরিবীক্ষণ ও মূল্যায়ন বিভাগ (আইএমইডি), পরিকল্পনা মন্ত্রণালয়।</Typography>*/}
            </Box>

        </Box>)
}
export default PrincipalLecture;