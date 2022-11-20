import MyTable from "../../components/Table";
import {Box} from "@mui/material";
import useMediaQuery from "@mui/material/useMediaQuery";
import {useTheme} from '@mui/material/styles';

function createData(serial, name, position , contact, comment) {
    return { serial, name, position , contact, comment };
}


const rows = [
    createData('০১','মো: আবুল কালাম আজাদ','সুপার' ,'০১৭১৪৮৯৫৩০৪',''),
    createData('০২','মো: জহিরুল হক ','সহকারি সুপার','০১৭১৪৫৬৩২৮০',''),
    createData('০৩', 'মু: ইমাম হোসাইন','সহকারি মৌলভী' ,'০১৭২৮৫৫৮৫৭৫',''),
    createData('০৪','মো: মোতালেব সরদার','সহকারি শিক্ষক (শারীরিক শিক্ষা)','০১৭৩৪৫৫০৮৭৯',''),
    createData('০৫', 'মো: মাহমুদুল হাসান', 'সহকারি শিক্ষক (গণিত)', '০১৭২৭০০৮৭১১',''),
    createData('০৬' ,'মো: মাসুউদুজ্জামান', 'সহকারি মৌলভী', '০১৭২৪৪১৪৩৮২',''),
    createData('০৭', 'আ: ছালাম মিয়া', 'সহকারি শিক্ষক (সমাজ বিজ্ঞান)','০১৭৩২১২৫২৯৭',''),
    createData('০৮', 'আ: রহমান', 'ইবতেদায়ি প্রধান', '০১৭৩২০১২০১৯',''),
    createData('০৯', 'মো: খেজের হাসান', 'সহকারি মৌলভী', '০১৭১৮৭৭১৫৯১',''),
    createData('১০', 'মো: মাহি উদ্দিন', 'সহকারি শিক্ষক (ইংরেজি)', '০১৭১২৩৪৯৮৪৪',''),
    createData('১১',' রোকেয়া পারভীন',' সহকারি শিক্ষক (কৃষি)', '০১৩১৫৪৭৪৯১৫',''),
    createData('১২', 'মোসা: শাহানাজ পারভীন', 'সহকারি শিক্ষক (বাংলা)', '০১৭৬২৩৪৯৮৩০',''),
    createData('১৩', 'মো: দেলোয়ার হোসেন', 'অফিস সহকারি', '০১৭৮৩৩০৩৮৪৭',''),
    createData('১৪', 'আ: কাদের', 'ইবতেদায়ি শিক্ষক' ,'০১৭২৩৬৬৭৩৮৯',''),
    createData('১৫', 'মো: ফখরুল ইসলাম', 'ইবতেদায়ি মৌলভী', '০১৭৪৪৯০৮২৩৩',''),
    createData('১৬', 'জাফর আকন' ,'নৈশ প্রহরী', '০১৭২৭১৯৮১৪৩',''),
    createData('১৭', 'মোহাম্মদ আলী', 'দপ্তরী', '০১৭৫৮১০০৩৯৮',''),
    createData('১৮', 'মোসা: মুন্নি আক্তার', 'আয়া', '০১৭১০৯৯৬৯১১',''),
    createData('১৯', 'শামীম মিয়া','নিরাপত্তা কর্মী', '০১৭৮৮৯১৪২২৩',''),
];
const heading=[
    {id:'serial',name:"ক্র. নং"},
    {id:'name',name:"শিক্ষক ও কর্মচারিদের নাম"},
    {id:'position',name:"পদবী ও বিষয়"},
    {id:'contact',name:"যোগাযোগ"},
    {id:'comment',name:"মন্তব্য"},
]
const Teachers = () => {
    const theme = useTheme();
    const matches = useMediaQuery(theme.breakpoints.up('sm'));

    return (

        <Box width={!matches?"100%":"75%"} sx = {{margin:"2rem auto"}}>
            <MyTable heading={heading} rows = {rows}/>
        </Box>
    )
}
export default Teachers;