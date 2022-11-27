import React, {useEffect, useState} from 'react'
import {useAuth} from '../../context/AuthContext'
import {Button, TextField} from "@mui/material";
import router from "next/router";
import toast, { Toaster } from 'react-hot-toast';
import 'react-toastify/dist/ReactToastify.css';

const LogIn = () => {
    const {user, login} = useAuth()
    const [error, setError] = useState(null)
    const [data, setData] = useState({
        email: '', password: '',
    })
    useEffect(() => {
        user?router.push('/admin/all-notice'):router.push('/admin/login')
        return () => {

        };
    }, []);
    const notify = (errorMessage) => toast(errorMessage);


    const handleSignup = async (e) => {
        e.preventDefault()

        try {
           const res = await login(data.email, data.password);
           console.log(res);
            await router.push('/admin/all-notice')
        } catch (err) {
            console.log(err)
            const errorCode = err.code;
            const errorMessage = err.message;
            console.log(errorMessage);
            setError(errorMessage);
            notify(errorMessage);
        }
    }

    return (
        <>
        <div
        style={{
            width: '40%', margin: 'auto', display: "flex", flexDirection: "column", flexWrap: 'wrap', gap: '2rem'

        }}
    >
        <h1 className="text-center my-3 ">LogIn</h1>
        <TextField id="email" label="email" variant="outlined" required onChange={(e) => setData({
            ...data, email: e.target.value,
        })}
                   value={data.email}/>
        <TextField id="password" label="password" variant="outlined" required onChange={(e) => setData({
            ...data, password: e.target.value,
        })}
                   value={data.password}/>
        <Button variant="primary" type="submit" onClick={handleSignup}>
            Signup
        </Button>
    </div>
            <Toaster />

        </>
            )
}

export default LogIn