import React, { useState, useEffect } from "react";
import TextField from "@mui/material/TextField/TextField.js";
import Button from "@mui/material/Button/Button.js"
import Avatar from "@mui/material/Avatar/Avatar.js"
import "./Forms.css";
import auth from "../../Api/Auth/auth-helper.js";
import { signin } from "../../Api/Auth/api-auth.js";
import { createClient } from "../../Api/Client/api-clients.js"
import Typography from "@mui/material/Typography/Typography.js";
import { useNavigate } from "react-router-dom"
import {Card} from 'primereact/card/card.esm.js'
import { ToggleButton } from 'primereact/togglebutton/togglebutton.esm.js'




const css = {
    avatar: {
        width: "100px",
        height: "100px",
        backgroundColor: "#1976d2",
        color: "white"
    }
}




function Form({title, form, handleSubmit, handleChange, handleChecked, switchTitle}){

    return(
            <div className="pageForm">
                <div>
                <ToggleButton onChange={handleChecked}   offLabel={switchTitle} className="w-9rem" />
                </div>
                <Card>
                    <form className="form" onSubmit={(e) => {handleSubmit(e, form)}} method="POST"> 
                        <div className="avatar">
                            <Avatar style={css.avatar}>{title}</Avatar>
                        </div>

                        <div className="email">
                            <TextField label="email"  id="email" name="email" type="email" value={form.email} onChange={handleChange("email")}/>
                        </div>

                        <div className="password">
                            <TextField label="password" id="password" name="password" type="password" value={form.password} onChange={handleChange("password")}/>
                        </div>

                        {form.error && (<div><Typography color="error">{form.error}</Typography></div>)}

                        <div className="button">
                            <Button variant="contained"  type="submit">Submit</Button>
                        </div>
                    </form>
                </Card>
            </div>
    )
}

function Login(){
    const [login, setLogin] = useState({
        email: "",
        password: "",
        error: "",
        redirectToHome : false
    })

    const [checked, setChecked] = useState(false)

    const navigate = useNavigate()

    useEffect(() =>{
        if(login.redirectToHome){
            navigate("/")
        }
        if(checked){
            navigate("/signup")
            setChecked(false)
        }
    }, [login.redirectToHome, checked])

    const handleChecked = () => {
        setChecked(!checked)
       
    }

    const handleChange = name => event => {
        setLogin({
            ...login,
            [name]: event.target.value
        })
    }

    const handleSubmit = (e, login) => {
        e.preventDefault();
        
        const client = {
            email: login.email || undefined,
            password: login.password || undefined
        }

        signin(client).then((data) => {
            if(data.error){
                setLogin({
                    ...login,
                    error: data.error
                });
                setTimeout(()=>{
                    setLogin({
                        ...login,
                        email:"",
                        password: "",
                        error: ""
                    });
                }, 1600)
            }else{
                auth.authenticate(data, () =>{
                    setLogin({
                        ...login,
                        redirectToHome: true
                    })
                })
            }
        })
    }

    return(
        <Form switchTitle="Inscription" handleChecked={handleChecked} title="connexion" form={login} handleChange={handleChange} handleSubmit={handleSubmit} />
    )
}

function Signup(){
    const [signup, setSignup] = useState({
        email: "",
        password: "",
        error: "",
        redirectToLogin : false
    })

    const [checked, setChecked] = useState(false)
    const navigate = useNavigate();

    useEffect(() =>{
        if(signup.redirectToLogin || checked){
            navigate("/login")
            setChecked(false);
        }
    }, [signup.redirectToLogin, checked])

    const handleChecked = () => {
        setChecked(!checked)
    }

    const handleChange = name => event => {
        setSignup({
            ...signup,
            [name]: event.target.value
        })
    }

    const handleSubmit = (e, login) => {
        e.preventDefault();
        
        const client = {
            email: login.email || undefined,
            password: login.password || undefined
        }

        createClient(client).then((data) => {
            if(data.error){
                setSignup({
                    ...signup,
                    error: data.error
                });
                setTimeout(()=>{
                    setSignup({
                        ...signup,
                        email:"",
                        password: "",
                        error: ""
                    });
                }, 1600)
            }else{
                setSignup({
                    ...signup,
                    redirectToLogin: true
                })
            }
        })
    }

    return(
        <Form switchTitle="Connexion" handleChecked={handleChecked}  title="Inscription" form={signup} handleChange={handleChange} handleSubmit={handleSubmit} />
    )
}

export  { Signup, Login }