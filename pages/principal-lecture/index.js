import {Box, Grid, Typography} from "@mui/material";
import Header from "../../components/Header";
import Footer from "../../components/Footer";
import styles from "../../styles/Home.module.css";
import Image from 'next/image'
// import Profile from '../../public/images/profile.avif';
import Profile from '../../public/images/ferdushi_arif-2.png';

const PrincipalLecture = () => {
    const data = {
        title: "সভাপতির বাণী",
        name: "বেগম ফেরদৌসী আরিফ",
        position: "সভাপতি, ম্যানেজিং কমিটি",
        lineOne: "বিসমিল্লাহির রাহমানির রাহিম",
        text: "\n" + "\n" + "“মানুষ হওয়া মানুষের জন্য কঠিন কাজ। আর একজন শিক্ষক হচ্ছেন মানুষ গড়ার কারিগর। যারা এই মহান দায়িত্বটি পালন করছেন তাদের প্রতি রইল সংগ্রামী শুভেচ্ছা। তার সাথে সাথে গভীর শ্রদ্ধা, আত্মরিকতা ও ভালবাসায় স্মরণ করছি আমার পিতা, অত্র প্রতিষ্ঠানের প্রতিষ্ঠাতা মরহুম আব্দুল মালেক চৌধুরী সাহেবকে। আমরা মরহুমের বিদেহী আত্মার মাগফেরাত কামনা করছি।\n" + "\n" + "অপ্রতিরোধ্য অগ্রযাত্রায় যেমন এগিয়ে যাচ্ছে আমাদের সোনার বাংলাদেশ, তেমনি এগিয়ে যাচ্ছে আমাদের শিক্ষা ব্যবস্থা। সেই ধারাবাহিকতারই অংশ আমাদের আৰু তাহের দাখিল মাদ্রাসা। পতিযোগিতামূলক শিক্ষা ব্যবস্থায় এই প্রতিষ্ঠানের বিশেষত্ব হচ্ছে এখানে সাধারণ মানের শিক্ষার্থীরা ভর্তি হয়ে অসাধারণ ফলাফল ও জীবন বিকাশে নিজেকে প্রতিষ্ঠিত করে।\n" + "\n" + "গতানুগতিক পাঠদানের পাশাপাশি জীবনমুখী শিক্ষা কার্যক্রমকে এই প্রতিষ্ঠান উৎসাহিত করে থাকে। ধর্মীয়\n" + "\n" + "মূল্যবোধ, মহান মুক্তিযুদ্ধের চেতনা, সাংস্কৃতিক বিকাশ, প্রগতিশীল চিন্না, শৃঙ্খলা, নিরাপত্তা ও নিরবিচ্ছিন্ন\n" + "\n" + "শালিহার মূল্যবোধকে ধারণ করে শুরম্ন থেকেই এই প্রতিষ্ঠান তার অব্যাহত অগ্রযাত্রা চলমান রেখেছে। আমার\n" + "\n" + "বিশ্বাস অতি শীঘ্রই এই প্রতিষ্ঠান একটি অন্যতম শিক্ষা প্রতিষ্ঠানে পরিণত হবে।\n" + "\n" + "আমাদের এই স্বাপ্নিক যাত্রায় আমি সকল শিক্ষক, শিক্ষার্থী, অভিভাবক, অনীজ্ঞানী ও নেতৃবর্গসহ সংশিল্পষ্ট সকলের ঐকাত্মিক সহযোগিতা প্রত্যাশা করছি।\""
    }
    return (<Box sx={{
        display: 'flex', justifyContent: "center", textAlign: 'center', flexDirection: 'column',
        // marginTop: '2rem'
    }}>
        <Typography gutterBottom={2} variant='h3' style={{
            textAlign: 'center', backgroundColor: '#023020', color: 'white', paddingTop: '1rem'
        }}>{data.title}</Typography> <Image
        src={Profile}
        alt="Picture of the author"
        width={200}
        height={200}
        objectFit='contain'
    />
        <Box sx={{padding: '2rem', margin: "0 2rem"}}>
            <Typography component='h1'  style={{fontSize: 32}}>{data.name}</Typography>
            <Typography gutterBottom style={{fontSize: 20}}>{data.position}</Typography>
            <Typography gutterBottom style={{fontSize: 24}} component='h3'>{data.lineOne}</Typography>
            <Typography gutterBottom component="p">{data.text}</Typography>
            {/*<Typography gutterBottom>বাস্তবায়ন পরিবীক্ষণ ও মূল্যায়ন বিভাগ (আইএমইডি), পরিকল্পনা মন্ত্রণালয়।</Typography>*/}
        </Box>

    </Box>)
}
export default PrincipalLecture;