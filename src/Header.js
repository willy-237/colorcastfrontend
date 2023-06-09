import React, {useState, useEffect, useContext} from "react";
import "./Header.css";
import { Link, useNavigate  } from "react-router-dom"
import cover from "./assets/Aya-nakamura-cover-2.png"
import auth from "./Api/Auth/auth-helper.js"
import { Badge } from 'primereact/badge/badge.esm.js'
import { Button, Dialog, DialogTitle, DialogContent, DialogContentText, DialogActions} from "@mui/material";
import { signout } from "./Api/Auth/api-auth.js"



function Header({item}){
    
    const navigate = useNavigate();
    const [connexion, setConnexion] = useState("danger")
    const [open, setOpen] = useState(false)
    const badge = sessionStorage.getItem("item");

    useEffect(()=>{
        if(auth.isAuthenticated()){
            setConnexion("success")
        }
        
    }, [])

    const handleConnexion = () =>{
        if(auth.isAuthenticated()){
            setOpen(true)
        }else{
            navigate("/login")
        }
    }

    const handleCloseDiag = () => {
        setOpen(false)
    }

    const handleDeconnexion = () =>{
        signout()
        setOpen(false);
        setConnexion("danger");
        sessionStorage.removeItem("jwt");
        
    }

    return(
        <>
            <div className="headerComponent">
                    <header>
                        <h1>Aya Nakamura site evenementiel</h1>
                        <input className="checkbox" type="checkbox" name="" id="" />
                        <nav data-aos="fade-down" data-aos-duration="1000"  >
                            <div className="hamburger-lines">
                                <span className="line line1"></span>
                                <span className="line line2"></span>
                                <span className="line line3"></span>
                            </div> 
                            <ul className="main-nav menu-items">
                                <li><a href="#pack">ALBUM</a></li>
                                <li><a href="#concerts">CONCERTS</a></li>
                                <li><a href="#featuring">FEATURING</a></li>
                                <li><a href="#shop">SHOP</a></li>
                                <li><Link to="/article">ARTICLE</Link></li>
                                <li><Link to="/quiestelle">QUI EST&ndash;ELLE </Link></li>
                            </ul>
                            <ul className="other-nav">
                                <li>
                                    <svg onClick={handleConnexion} role="se connecter ou s'inscrire ou se deconnecter"  className="svg-icon" viewBox="0 0 20 20">
                                        <path fill="#F1EEEB" d="M10,10.9c2.373,0,4.303-1.932,4.303-4.306c0-2.372-1.93-4.302-4.303-4.302S5.696,4.223,5.696,6.594C5.696,8.969,7.627,10.9,10,10.9z M10,3.331c1.801,0,3.266,1.463,3.266,3.263c0,1.802-1.465,3.267-3.266,3.267c-1.8,0-3.265-1.465-3.265-3.267C6.735,4.794,8.2,3.331,10,3.331z"></path>
                                        <path fill="#F1EEEB" d="M10,12.503c-4.418,0-7.878,2.058-7.878,4.685c0,0.288,0.231,0.52,0.52,0.52c0.287,0,0.519-0.231,0.519-0.52c0-1.976,3.132-3.646,6.84-3.646c3.707,0,6.838,1.671,6.838,3.646c0,0.288,0.234,0.52,0.521,0.52s0.52-0.231,0.52-0.52C17.879,14.561,14.418,12.503,10,12.503z"></path>
                                    </svg>
                                    <Badge severity={connexion} ></Badge>
                                </li>
                                <li>
                                    <Link to="/shopshirt" ><svg role="acceder à la boutique si on est connecté ou aller à la page de connexion si on ne l'est pas" className="svg-icon" viewBox="0 0 20 20">
                                        <path fill="#F1EEEB" d="M17.671,13.945l0.003,0.002l1.708-7.687l-0.008-0.002c0.008-0.033,0.021-0.065,0.021-0.102c0-0.236-0.191-0.428-0.427-0.428H5.276L4.67,3.472L4.665,3.473c-0.053-0.175-0.21-0.306-0.403-0.306H1.032c-0.236,0-0.427,0.191-0.427,0.427c0,0.236,0.191,0.428,0.427,0.428h2.902l2.667,9.945l0,0c0.037,0.119,0.125,0.217,0.239,0.268c-0.16,0.26-0.257,0.562-0.257,0.891c0,0.943,0.765,1.707,1.708,1.707S10,16.068,10,15.125c0-0.312-0.09-0.602-0.237-0.855h4.744c-0.146,0.254-0.237,0.543-0.237,0.855c0,0.943,0.766,1.707,1.708,1.707c0.944,0,1.709-0.764,1.709-1.707c0-0.328-0.097-0.631-0.257-0.891C17.55,14.182,17.639,14.074,17.671,13.945 M15.934,6.583h2.502l-0.38,1.709h-2.312L15.934,6.583zM5.505,6.583h2.832l0.189,1.709H5.963L5.505,6.583z M6.65,10.854L6.192,9.146h2.429l0.19,1.708H6.65z M6.879,11.707h2.027l0.189,1.709H7.338L6.879,11.707z M8.292,15.979c-0.472,0-0.854-0.383-0.854-0.854c0-0.473,0.382-0.855,0.854-0.855s0.854,0.383,0.854,0.855C9.146,15.596,8.763,15.979,8.292,15.979 M11.708,13.416H9.955l-0.189-1.709h1.943V13.416z M11.708,10.854H9.67L9.48,9.146h2.228V10.854z M11.708,8.292H9.386l-0.19-1.709h2.512V8.292z M14.315,13.416h-1.753v-1.709h1.942L14.315,13.416zM14.6,10.854h-2.037V9.146h2.227L14.6,10.854z M14.884,8.292h-2.321V6.583h2.512L14.884,8.292z M15.978,15.979c-0.471,0-0.854-0.383-0.854-0.854c0-0.473,0.383-0.855,0.854-0.855c0.473,0,0.854,0.383,0.854,0.855C16.832,15.596,16.45,15.979,15.978,15.979 M16.917,13.416h-1.743l0.189-1.709h1.934L16.917,13.416z M15.458,10.854l0.19-1.708h2.218l-0.38,1.708H15.458z"></path>
                                    </svg></Link>
                                    <Badge value={badge} ></Badge>
                                </li>
                            </ul>
                        </nav>
                        
                        <div className="nav-musique">
                            <figure data-aos="fade-right" data-aos-duration="1000" data-aos-delay="1000">
                                <img src={cover} alt="aya nakamura en fond" />
                            </figure>
                            <div data-aos="fade-left" data-aos-duration="1000" data-aos-delay="2000" className="link-musique">
                                <h2>NOUVEL ALBUM DISPONIBLE</h2>
                                <Link to="/musique">Ecouter</Link>
                            </div>
                        </div>
                    
                    </header>
            </div>
            <Dialog open={open}>
                <DialogTitle>Deconnexion</DialogTitle>
                <DialogContent>
                    <DialogContentText>
                    Voulez vous vraiment vous deconnecter ?
                    </DialogContentText>
                </DialogContent>
                <DialogActions>
                    <Button onClick={handleCloseDiag} >
                            Non
                    </Button>
                    <Button onClick={handleDeconnexion}  color="secondary">
                            Oui
                    </Button>
                </DialogActions>
            </Dialog>
        </>
)
}

export default Header