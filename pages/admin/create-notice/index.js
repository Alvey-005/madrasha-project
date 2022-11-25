import {Box, Button, CircularProgress, TextField} from "@mui/material";
import {useState} from "react";
import {db, storage} from "../../../firebaseConfig";
import {addDoc, collection} from "firebase/firestore";
import {ref, getDownloadURL, uploadBytesResumable} from "firebase/storage";
const CreateNotice = () => {
    const [title, setTitle] = useState("")
    const [slug, setSlug] = useState("")
    const [description, setDescription] = useState("")
    const [file, setFile] = useState([]);
    const [progresspercent, setProgresspercent] = useState(0);
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
    const createPost = async (title, slug, description, downloadURL) => {
        try {
            const docRef = await addDoc(collection(db, "notice"), {
                title: title,
                slug: slug,
                description: description,
                url: downloadURL,
                fileName: `files/${file.name}`
            });
            // console.log("Document written with ID: ", docRef.id);
            return docRef.id
        } catch (e) {
            console.error("Error adding document: ", e);
        }

    }
    const addTodo = async (e, title, slug, description, file) => {
        setLoading(true);
        e.preventDefault();
        let downloadURL = await uploadFiles(file);
        console.log(downloadURL);
        let notice = await createPost(title, slug, description, downloadURL);
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
                <Box sx={{height:"7rem" ,display:'flex',justifyContent:"center",alignItems:"center"}}>
                    <CircularProgress />
                </Box> :
                <>
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
                                    // console.log(e.target.files[0]);
                                    setFile(e.target.files[0]);
                                }}
                            />
                        </Button>
                        <Button type="submit" onClick={(e) => {
                            e.preventDefault();
                             addTodo(e, title, slug, description, file);
                        }}>Submit</Button>
                    </div>
                </Box></>
            }

        </>
    )
}
export default CreateNotice;