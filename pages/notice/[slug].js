import {useRouter} from 'next/router'
import {useEffect, useState} from "react";
import {Box, Typography} from "@mui/material";
import React from "react";
import ShowPdf from "../../components/ShowPdf";

const Notice = () => {
    const router = useRouter()
    const {slug} = router.query
    const [notice, setNotice] = useState({});
    useEffect(() => {
        if (slug !== undefined) {
            fetch('/api/single-notice/' + slug).then((res) => res.json()).then((res) => setNotice(res));
        }
        return () => {
            setNotice(null)
        }
    }, [slug]);

    return (<Box sx={{marginBottom:"2rem"}}>
        {notice ? <>
            <Typography gutterBottom variant='h3' style={{
                textAlign: 'center', backgroundColor: '#023020', color: 'white', paddingTop: '1rem'
            }}>
                {notice?.title}
            </Typography>
            <Box sx={{textAlign:"center"}}> <Typography gutterBottom variant='p' style={{
                textAlign: 'center', color: 'black', paddingTop: '1rem', marginBottom: "2rem",fontSize:"2rem"
            }}>
                {notice?.description}
            </Typography></Box>

            {
                notice && notice.isPdf ==='false' ? <>
                        <Box
                            sx={{
                                border : "1rem solid black",
                                display: 'flex',
                                justifyContent: "center",
                                // marginLeft: 'auto',
                                // marginRight: 'auto',
                                objectFit: "contain"
                            }}
                        ><img style={{objectFit: "contain", width: "80%", margin: "0 auto",}} src={notice.url}
                              alt={notice.title}/></Box>

                    </> :
                    <ShowPdf file={notice.url}/>
            }
        </> : ""}
    </Box>)
}
export default Notice;