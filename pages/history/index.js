import {Box, Typography} from "@mui/material";
import Image from "next/image";
import Profile from "../../public/images/img_avatar.png";

const History = () => {
    const data = {
        title: "আবু তাহের দাখিল মাদ্রাসার ইতিহাস",
        description: 'মাদারীপুর জেলাধীন শিবচর উপজেলার শিবচর মাদারীপুর রাস্তা সংলগ্ন চর গজারিয়া গ্রামে মনোরম পরিবেশে আবু তাহের দাখিল মাদ্রাসাটির অগ্রযাত্রা শুর হয় ১৯৮৫ সাল হতে । ১৯৮৪ সালে অত্র এলাকার বিশিষ্ট সমাজ সেবক ও শিক্ষানুরাগী আব্দুল মালেক চৌধুরী সাহেব অত্র প্রতিষ্ঠানে জমি দান করেন। এলাকাবাসী তার মরহুম পিতা আবু তাহের সাহেবের নামে মাদ্রাসার নামকরণ করার প্রস্তাব করেন। সর্বসম্মতিক্রমে অত্র মাদ্রাসার নামকরণ করা হয়- "আৰু তাহের দাখিল মাদ্রাসা। অত্র মাদ্রাসাটি ১৯৮৫ সালে শিক্ষামন্ত্রণালয় কর্তৃক প্রথম শ্রেণি থেকে দশম (দাখিল) শ্রেণি পর্যনত্ম স্বীকৃতি লাভ করে এবং একই বছর প্রতিষ্ঠানটি এম.পি.ও ভুক্ত হয় প্রতিষ্ঠালগ্ন থেকে অত্র মাদ্রাসাটি অত্যনত্ম সুনামের সহিত চলে আসছে প্রতিষ্ঠানের ফলাফল, কো-কারিকুলাম কার্যাবলী, পাঠদান পদ্ধতি ও প্রশাসনিক কার্যাবলী প্রশংসনীয়। ফলাফলের দিক দিয়ে উপজেলা ও জেলায় পর্যায়ে ১ম সারির স্থান দখল করে আছে । অত্র প্রতিষ্ঠান হতে প্রতিবছর অনেক গুণগ্রাহী ছাত্র-ছাত্রী সুনাম এর সহিত কৃতকার্য হয়ে দেশের বিভিন্ন নাম করা কলেজ বিশ্ববিদ্যালয়ে ভর্তির সুযোগ গ্রহণ করেছে। সর্বোপরি, অত্র মাদ্রাসাটি জাতীয় পর্যায়ে শ্রেষ্ঠত্ব ও কৃতিত্ব অর্জন করার প্রত্যাশা রাখে ।'
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
            <article style={{marginBottom:"2rem" ,textAlign:"center"}}>
                {data.description}
            </article>

        </Box>
    )
}
export default History;