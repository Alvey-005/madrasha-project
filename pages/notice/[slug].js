import {useRouter} from 'next/router'
import {useEffect, useState} from "react";
import {Typography} from "@mui/material";
import React from "react";
import ShowPdf from "../../components/ShowPdf";

const Notice = () => {
    const router = useRouter()
    const {slug} = router.query
    const [notice, setNotice] = useState({});
    useEffect(() => {
        if(slug!== undefined){
            fetch('/api/single-notice/' + slug).then((res) => res.json()).then((res)=>setNotice(res));
        }
        return ()=>{
            setNotice(null)
        }
    },[slug]);

    return (<>
        {notice?<>
            <Typography gutterBottom variant='h3' style={{
                textAlign: 'center', backgroundColor: '#023020', color: 'white', paddingTop: '1rem'
            }}>
                {notice?.title}
            </Typography>
            <Typography gutterBottom variant='p' style={{
                textAlign: 'center', color: 'black', paddingTop: '1rem',marginBottom:"2rem"
            }}>
                {notice?.description}
            </Typography>
            {
                 notice?.isPdf?<>
                     <img src={notice.url} alt={notice.title}/>
                     </>:
                <ShowPdf file={notice.url}/>
            }
        </>:""}
        </>)
}
export default Notice;