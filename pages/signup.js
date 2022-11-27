import React, {useState} from 'react'
import {useAuth} from '../context/AuthContext'
import {Button, TextField} from "@mui/material";

const Signup = () => {
    const {user, signup} = useAuth()
    console.log(user)
    const [data, setData] = useState({
        email: '', password: '',
    })

    const handleSignup = async (e) => {
        e.preventDefault()

        try {
            await signup(data.email, data.password)
        } catch (err) {
            console.log(err)
        }

        console.log(data)
    }

    return (<div
        style={{
            width: '40%', margin: 'auto', display: "flex", flexDirection: "column", flexWrap: 'wrap', gap: '2rem'

        }}
    >
        <h1 className="text-center my-3 ">Signup</h1>
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
        {/*</form>*/}
    </div>)
}

export default Signup