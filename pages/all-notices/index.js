import {Typography} from "@mui/material";
import React,{useEffect,useState} from "react";
import Link from "next/link";

const AllNotices = () => {
    const [notices, setNotices] = useState([]);
    useEffect(() => {
        fetch('/api/all-notices').then((res) => res.json()).then((res)=>setNotices(res));
    },[])
    const data = {
        title: "All all-notices"
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
            {notices?.map(notice=>(
                <li key={notice.id}><Link  href={'notice/'+notice.id}><a style={{color: 'red', margin: "0 1rem"}}> {notice.title}</a></Link></li>
                ))}
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