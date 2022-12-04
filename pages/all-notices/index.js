import {Box, Typography} from "@mui/material";
import React,{useEffect,useState} from "react";
import Link from "next/link";

const AllNotices = () => {
    const [notices, setNotices] = useState([]);
    useEffect(() => {
        fetch('/api/all-notices').then((res) => res.json()).then((res)=>setNotices(res));
    },[])
    const data = {
        title: "নোটিশ"
    }
    return (
        // <div className={styles.container}>
        //     <Header/>
        // <ShowPdf />
        // <Footer />
        // </div>
        <>
            <Typography gutterBottom variant='h3' style={{
                textAlign: 'center', backgroundColor: '#023020', color: 'white', paddingTop: '1rem'
            }}>{data.title}</Typography>
            <Box sx={{margin:"2rem"}}>
            {notices?.map(notice=>(
                <li key={notice.id}><Link  href={'notice/'+notice.id}><a style={{color: '#023020', margin: "0 1rem" ,fontSize:20}}> {notice.title}</a></Link></li>
                ))}
            </Box>
        </>

    )
}
// export async function getStaticProps() {
//     // Call an external API endpoint to get posts.
//     // You can use any data fetching library
//     const res = await fetch('/api/notice')
//     const posts = await res.json()
//     console.log(posts);
//
//     // By returning { props: { posts } }, the Blog component
//     // will receive `posts` as a prop at build time
//     return {
//         props: {
//             posts,
//         },
//     }
// }
export default AllNotices;