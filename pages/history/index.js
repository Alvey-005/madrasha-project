import {Box, Typography} from "@mui/material";
import Image from "next/image";
import Profile from "../../public/images/creator.jpeg";

const History = () => {
    const data = {
        title: "আবু তাহের দাখিল মাদ্রাসার ইতিহাস",
        description:"মাদারীপুর জেলাধীন শিবচর উপজেলার শিবচর মাদারীপুর রাস্তা সংলগ্ন চর গজারিয়া গ্রামে মনোরম পরিবেশে আবু তাহের দাখিল মাদ্রাসাটির অগ্রযাত্রা শুর হয় ১৯৮৫ সাল হতে " +
            "। ১৯৮৪ সালে অত্র এলাকার বিশিষ্ট সমাজ সেবক ও শিক্ষানুরাগী আব্দুল মালেক চৌধুরী সাহেব অত্র প্রতিষ্ঠানে জমি দান করেন।" +
            " সর্বদাই তিনি মাতাপিতার সম্মান ও শ্রদ্ধা করতেন। সেখান থেকেই তাঁর পিতার নামে মাদ্রাসাটির নামকরণ করা হয়। অবশেষে তাঁর সিদ্ধান্তক্রমে  অত্র মাদ্রাসার নামকরণ করা হয়- \"আবু তাহের দাখিল মাদ্রাসা \"।" +
            " অত্র মাদ্রাসাটি ১৯৮৫ সালে শিক্ষামন্ত্রণালয় কর্তৃক প্রথম শ্রেণি থেকে দশম (দাখিল) শ্রেণি পর্যন্ত স্বীকৃতি লাভ করে এবং একই বছর প্রতিষ্ঠানটি এম.পি.ও ভুক্ত হয় প্রতিষ্ঠালগ্ন থেকে অত্র মাদ্রাসাটি অত্যন্ত" +
            " সুনামের সহিত চলে আসছে। প্রতিষ্ঠানের ফলাফল," +
            " কো-কারিকুলাম কার্যাবলী, পাঠদান পদ্ধতি ও প্রশাসনিক কার্যাবলী প্রশংসনীয়। ফলাফলের দিক দিয়ে উপজেলা ও জেলায় পর্যায়ে ১ম সারির স্থান দখল করে আছে । অত্র প্রতিষ্ঠান হতে প্রতিবছর অনেক গুণগ্রাহী ছাত্র-ছাত্রী সুনাম এর সহিত কৃতকার্য হয়ে দেশের" +
            " বিভিন্ন নাম করা কলেজ বিশ্ববিদ্যালয়ে ভর্তির সুযোগ গ্রহণ করেছে। সর্বোপরি, অত্র মাদ্রাসাটি জাতীয় পর্যায়ে শ্রেষ্ঠত্ব ও কৃতিত্ব অর্জন করার প্রত্যাশা রাখে ।"
    }
    return (
        <Box sx={{display: 'flex', justifyContent: "center", textAlign: 'center', flexDirection: 'column'}}>
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
            <Typography gutterBottom variant="h6">
                প্রতিষ্ঠাতা: আলহাজ্ব আবদুল মালেক চৌধুরী
            </Typography>
            <Typography gutterBottom variant="h6" style={{fontSize:18}}>
                ( ১৯৪০ - ২০০৭ )
            </Typography>
            <article style={{marginBottom:"2rem" ,textAlign:"center"}}>
                {data.description}
            </article>

        </Box>
    )
}
export default History;