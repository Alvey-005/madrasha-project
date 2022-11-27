import TableContainer from "@mui/material/TableContainer";
import Table from "@mui/material/Table";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import {Box, Button, TableCell, Typography} from "@mui/material";
import Paper from "@mui/material/Paper";
import TableBody from "@mui/material/TableBody";
import {useEffect, useState} from "react";
import Link from "next/link";
import {deleteDoc, doc} from "firebase/firestore";
import {auth, db, storage} from "../../../firebaseConfig";
import {ref, deleteObject} from "firebase/storage";
import {useAuth} from "../../../context/AuthContext";
import {signOut} from "firebase/auth";
import router from "next/router";

const AllNotice = () => {
    const {user} = useAuth();
    const handleSignOut = async () => {
        signOut(auth).then(() => {
            router.push('/');
        }).catch((error) => {
            console.log(error);
        });
    }
    const handleDelete = async (id, fileName) => {
        const desertRef = ref(storage, fileName);
        let delFile = await deleteObject(desertRef);
        let del = await deleteDoc(doc(db, "notice", id));
        window.location.reload();
    }
    const [notices, setNotices] = useState([]);
    useEffect(() => {
        fetch('/api/all-notices').then((res) => res.json()).then((res) => setNotices(res));
    }, [])

    return (
        <Box>
            <Typography gutterBottom variant='h3' style={{
                textAlign: 'center', backgroundColor: '#023020', color: 'white', paddingTop: '1rem'
            }}>All Notice</Typography>
            {
                user?<Button variant='contained' onClick={handleSignOut}>Signout</Button>:null

            }
            <TableContainer component={Paper} style={{width: "80%", margin: "1rem auto"}}>
                {!notices.length ? <Link href={'/admin/create-notice'}><a
                        style={{display: "flex", justifyContent: "center", alignContent: 'center'}}>No notice found,add
                        notice</a></Link> :
                    <Box><Table sx={{minWidth: 650}} aria-label="simple table">
                        <TableHead>
                            <TableRow>
                                <TableCell>Title</TableCell>
                                <TableCell>Edit</TableCell>
                                <TableCell>Delete</TableCell>
                            </TableRow>
                        </TableHead>
                        <TableBody>
                            {
                                notices?.map((notice) => (
                                    <TableRow key={notice.id}>
                                        <TableCell><Link href={'/notice/' + notice.id}><a
                                            style={{
                                                color: 'red',
                                                margin: "0 1rem"
                                            }}> {notice.title}</a></Link></TableCell>
                                        <TableCell>
                                            <Link href={`/admin/edit-notice/${notice.id}`}><Button variant="contained">Edit</Button></Link></TableCell>
                                        <TableCell><Button variant="contained" style={{background: "red"}}
                                                           onClick={() => handleDelete(notice.id, notice.fileName)}
                                        >
                                            Delete</Button>
                                        </TableCell>
                                    </TableRow>
                                ))
                            }

                        </TableBody>

                    </Table>
                        <Link href={'/admin/create-notice'}><a
                            style={{display: "flex", justifyContent: "center", alignContent: 'center'}}>add
                            notice</a></Link>
                    </Box>
                }
            </TableContainer>
        </Box>
    )
}
export default AllNotice;