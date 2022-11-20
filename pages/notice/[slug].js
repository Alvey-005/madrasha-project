import {useRouter} from 'next/router'
import {useEffect, useState} from "react";
import {Typography} from "@mui/material";
import React from "react";

const Notice = () => {
    const router = useRouter()
    const {slug} = router.query
    console.log(slug);
    const [notice, setNotice] = useState({});
    useEffect(() => {
        return () => {
            fetch('/api/single-notice/' + slug)
                .then((res) => res.json()).then((res) => setNotice(res))
        };
    }, [notice,slug]);

    return (<>
        {notice?<>
            <Typography gutterBottom variant='h3' style={{
                textAlign: 'center', backgroundColor: '#023020', color: 'white', paddingTop: '1rem'
            }}>
                {notice?.title}
            </Typography>
        {notice.isPdf?"":<>
            <img src={`./public/uploads/${notice?.fileName}`}/></>
        }
        </>:""}
        </>)
}
export default Notice;