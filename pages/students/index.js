import MyTable from "../../components/Table";
import {Box} from "@mui/material";
import useMediaQuery from "@mui/material/useMediaQuery";
import {useTheme} from '@mui/material/styles';

function createData(sclass, male, female, total, comment) {
    return { sclass, male, female , total, comment };
}


const rows = [
    createData('প্রথম', '১৩', '১২', '২৫', ''),
    createData('দ্বিতীয়', '০৯', '০৪', '১৩', ''),
    createData('তৃতীয়', '০৩', '০৪', '০৭', ''),
    createData('চতুর্থ', '০৫', '০৫', '১০', ''),
    createData('পঞ্চম', '১৪', '১৩', '২৭', ''),
    createData('মোট (প্রথম থেকে পঞ্চম)', '৪৪', '৩৮', '৮২', ''),
    createData('ষষ্ঠ', '২৫', '৩৯', '৬৪', ''),
    createData('সপ্তম', '২৭', '৩৪', '৬১', ''),
    createData('অষ্টম', '১৬', '৪৭', '৬৩', ''),
    createData('নবম', '৩১', '৩৩', '৬৪', ''),
    createData('দশম', '২৯', '৩৬', '৬৫', ''),
    createData('ষষ্ঠ থেকে দশম', '১২৮', '১৮৯', '৩১৭', ''),
    createData('মোট', '১৭২', '২২৭', '৩৯৯', ''),
];
const heading=[
    {id:'sclass',name:"শ্রেণি"},
    {id:'male',name:"ছাত্র"},
    {id:'female',name:"ছাত্রী"},
    {id:'total',name:"মোট"},
    {id:'comment',name:"মন্তব্য"},
]
const Students = () => {
    const theme = useTheme();
    const matches = useMediaQuery(theme.breakpoints.up('sm'));

    return (

            <Box width={!matches?"100%":"75%"} sx = {{margin:"2rem auto"}}>
                <MyTable heading={heading} rows = {rows}/>
            </Box>
    )
}
export default Students;