import Marquee from "react-easy-marquee";
import {useEffect, useState} from "react";
import Link from "next/link";
import {Box, Button, CardActions, Typography} from "@mui/material";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
const NoticeSlider = () => {
    useEffect(() => {
        fetch('/api/all-notices')
            .then((res) => res.json())
            .then((data) => {
                setNotices(data);
            })
    }, [])
    const [notices, setNotices] = useState([]);
    return <>
        <Box sx={{
            height: '100%',

        }}>
            <Marquee   duration={20000}
                       height="100%"
                       // width="100%"
                       axis="Y"
                       pauseOnHover={true}
            >
                {
                    notices?.map(notice => (
                        <Card sx={{ minWidth: 175,maxWidth:"100%"  ,
                            margin:"1rem" ,backgroundColor:"#023020"
                        }} key={notice.id}>
                            <CardContent>
                                <Typography sx={{ fontSize: 28 }} color="white" gutterBottom>
                                    {notice.title}
                                </Typography>
                                {/*<Typography sx={{ mb: 1.5 }} color="text.secondary">*/}
                                {/*    adjective*/}
                                {/*</Typography>*/}
                                <Typography variant="body2" style={{color:"white"}}>
                                    {notice.description.substring(0,30)}
                                </Typography>
                            </CardContent>
                            <CardActions>
                                <Button size="small">
                                    <Link key={notice.id} href={'/notice/' + notice.id}><a
                                    style={{color: 'white', margin: "0 1rem"}}>বিস্তারিত দেখতে ক্লিক করুন </a></Link></Button>
                            </CardActions>
                        </Card>


                    ))
                }

            </Marquee>
        </Box>
           </>
}
export default NoticeSlider;