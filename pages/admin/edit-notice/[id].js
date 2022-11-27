import {
    Box,
    Button,
    CircularProgress,
    FormControl,
    FormControlLabel,
    FormLabel,
    Radio,
    RadioGroup,
    TextField
} from "@mui/material";
import {useState, useEffect} from "react";
import {deleteObject, getDownloadURL, ref, uploadBytesResumable} from "firebase/storage";
import {db, storage} from "../../../firebaseConfig";
import { doc, updateDoc} from "firebase/firestore";
import {useRouter} from "next/router";

const EditNotice = () => {
    const router = useRouter()
    const {id} = router.query
    const [title, setTitle] = useState("")
    const [slug, setSlug] = useState("")
    const [description, setDescription] = useState("")
    const [file, setFile] = useState([]);
    const [fileName, setFileName] = useState(null);
    const [progresspercent, setProgresspercent] = useState(0);
    const [isPdf,setIsPdf] = useState(true);
    const [loading, setLoading] = useState(false);
    const uploadFiles = async (file) => {
        if (!file) return;
        const storageRef = ref(storage, `files/${file.name}`);
        const uploadTask = uploadBytesResumable(storageRef, file);
        uploadTask.on(
            "state_changed",
            (snapshot) => {
                const prog = Math.round(
                    (snapshot.bytesTransferred / snapshot.totalBytes) * 100
                );
                setProgresspercent(prog);
            },
            (error) => console.log(error)
        );
        await uploadTask; // 👈 uploadTask is a promise itself, so you can await it
        return await getDownloadURL(uploadTask.snapshot.ref);
        // 👆 getDownloadURL returns a promise too, so... yay more await

    };
    const updatePost = async (id,title, slug, description, isPdf,downloadURL=null) => {
        try {
            const docRef = await doc(db, "notice", id);
            let data = {
                title: title,
                slug: slug,
                description: description,
                isPdf:isPdf
            };
            if (downloadURL) {
                data = {
                    ...data, url: downloadURL,
                    fileName: `files/${file.name}`
                }
            }
            await updateDoc(docRef, data)
            return docRef.id
        } catch (e) {
            console.error("Error adding document: ", e);
        }

    }
    useEffect(() => {
        if (id !== undefined) {
            fetch('/api/single-notice/' + id).then((res) => res.json()).then((res) => {
                setTitle(res.title);
                setSlug(res.slug);
                setDescription(res.description);
                setFileName(res.fileName)
                setIsPdf(res.isPdf)
            });
        }
        return () => {
        }
    }, [id]);
    const addTodo = async (e, title, slug, description, file=null,fileName=null) => {
        setLoading(true);
        e.preventDefault();
        let notice;
        if (file.name && file.name.length) {
            const desertRef = ref(storage, fileName);
            let delFile = await deleteObject(desertRef);
            let downloadURL = await uploadFiles(file);
             notice = await updatePost(id,title, slug, description, isPdf,downloadURL);
        }
        else{
             notice = await updatePost(id,title, slug, isPdf,description);
        }
        if (notice) {
            // setTitle("");
            // setFile(null)
            // setDescription("")
            // setSlug("")
            // setLoading(false);
            window.location.assign("/admin/all-notice")
        }

    }
    return (
        <>
            {loading ?
                <Box sx={{height: "7rem", display: 'flex', justifyContent: "center", alignItems: "center"}}>
                    <CircularProgress/>
                </Box> :
                <Box
                    component="form"
                    sx={{
                        '& .MuiTextField-root': {m: 1, width: '25ch'},
                        marginTop: "1rem"
                    }}
                    noValidate
                    autoComplete="off"
                >
                    <div style={{
                        display: 'flex',
                        flexDirection: "column",
                        justifyContent: 'center',
                        alignItems: 'center'
                    }}>
                        <TextField
                            style={{width: '80%'}}
                            required
                            id="title"
                            label="Title"
                            value={title}
                            onChange={(e) => {
                                setTitle(e.target.value);
                            }}
                        />
                        <TextField
                            style={{width: '80%'}}
                            required
                            id="slug"
                            label="Slug"
                            value={slug}
                            onChange={(e) => {
                                setSlug(e.target.value);
                            }}/>
                        <TextField
                            style={{width: '80%'}}
                            required
                            id="description"
                            label="Description"
                            multiline
                            value={description}
                            rows={4}
                            onChange={(e) => {
                                setDescription(e.target.value);
                            }}
                        />

                        <FormControl>
                            <FormLabel id="demo-controlled-radio-buttons-group">Document</FormLabel>
                            <RadioGroup
                                row
                                aria-labelledby="demo-controlled-radio-buttons-group"
                                name="controlled-radio-buttons-group"
                                value={isPdf}
                                onChange={(event)=>{
                                    setIsPdf(event.target.value);
                                }}
                            >
                                <FormControlLabel value={true} control={<Radio />} label="PDF" />
                                <FormControlLabel value={false} control={<Radio />} label="IMAGE" />
                            </RadioGroup>
                        </FormControl>
                        <Button
                            variant="contained"
                            component="label"
                        >
                            Upload File
                            <input
                                id="button-file"
                                type="file"
                                name="file"
                                // hidden
                                onChange={(e) => {
                                    setFile(e.target.files[0]);
                                }}
                            />
                        </Button>
                        <Button type="submit" onClick={(e) => {
                            e.preventDefault();
                            addTodo(e, title, slug, description, file, fileName);
                        }}>Submit</Button>
                    </div>
                </Box>
            }
        </>
    )
}
export default EditNotice;