import React, { useEffect, useState } from "react";
import "./ShopShirt.css";
import logo from "../../assets/Logo.png";
import {Card} from 'primereact/card/card.esm.js'
import { Button } from 'primereact/button/button.esm.js';
import { Badge } from 'primereact/badge/badge.esm.js'
import { Link} from "react-router-dom"
import {  Dialog, DialogTitle, DialogContent, DialogContentText, DialogActions} from "@mui/material";

function DialogBox({message, open, handleCloseDiag, handleBuy}){
    if(message){
      return(
        <Dialog open={open} onClose={handleCloseDiag}>
          <DialogContent>
            <DialogContentText>
              {message}
            </DialogContentText>
          </DialogContent>
        </Dialog>
      )
    }else{
      return(
      <Dialog open={open} onClose={handleCloseDiag}>
        <DialogTitle>{"Ajouter un article dans le panier"}</DialogTitle>
        <DialogContent>
            <DialogContentText>
                  Voulez vous valider vos achats?
            </DialogContentText>
        </DialogContent>
        <DialogActions>
            <Button onClick={handleCloseDiag} >
                Non
            </Button>
            <Button onClick={handleBuy}  color="secondary" >
                Oui
            </Button>
        </DialogActions>
      </Dialog>
      )
    }
  }

function CardItem({data, handleDeleteItem}){
    
    return(
        <>
        {
        data
         && 
         data.map((item, index)=>{
            return(
                <Card key={item.id}>
                    <div className="main">
                        <div className="produit">
                            <div className="article">
                                <h2>{item.nom}</h2>
                                <span>{item.prix}€</span>
                            </div>
                        </div>
                        
                        <figure>
                            <img src={item.image} alt="tee shirt blanc à vendre" />
                            <svg onClick={()=>{handleDeleteItem(item.id)}} className="svg-icon" viewBox="0 0 20 20">
                                    <path fill="#ff0000" d="M11.469,10l7.08-7.08c0.406-0.406,0.406-1.064,0-1.469c-0.406-0.406-1.063-0.406-1.469,0L10,8.53l-7.081-7.08
                                    c-0.406-0.406-1.064-0.406-1.469,0c-0.406,0.406-0.406,1.063,0,1.469L8.531,10L1.45,17.081c-0.406,0.406-0.406,1.064,0,1.469
                                    c0.203,0.203,0.469,0.304,0.735,0.304c0.266,0,0.531-0.101,0.735-0.304L10,11.469l7.08,7.081c0.203,0.203,0.469,0.304,0.735,0.304
                                    c0.267,0,0.532-0.101,0.735-0.304c0.406-0.406,0.406-1.064,0-1.469L11.469,10z"></path>
                            </svg>
                        </figure>
                    </div>
                </Card>
            )
         })
         }
        </>
    )
}

function ShopShirt(){
    const [open, setOpen] = useState(false)
    const [data, setData] = useState([])
    const [message, setMessage] = useState("")
    
    useEffect(()=>{
        const dataReceived = JSON.parse(sessionStorage.getItem("data"))
        console.log(data)
        setData(dataReceived)
    }, [sessionStorage.getItem("data")])

    const handleEmpty = ()=>{
        setData([])
        sessionStorage.removeItem("data")
        sessionStorage.removeItem("item")
    }

    const handleDeleteItem = (id) =>{
        const dataCopy = data.filter(item => item.id !== id);
        sessionStorage.setItem("data", JSON.stringify(dataCopy));
        sessionStorage.setItem("item", dataCopy.length)
        setData(dataCopy);
    }

    const handleCloseDiag = () => {
        setOpen(false)
    }

    const handleBuy = () =>{
        setMessage("Achat validé")
        sessionStorage.removeItem("data")
        sessionStorage.removeItem("item")
        setTimeout(()=>{
            setOpen(false)
        }, 1500)
    }

    const handleOpenDiag = (e) =>{
        setOpen(true)
    }

    return(
        <div className="shopShirt">
            <header>
                <Link to="/"><Button severity="secondary" label="Back to main page" text /></Link>
                <h1>
                    
                    <img src={logo} alt="logo de la boutique" />
                </h1>
                <span>
                    <svg role="acceder à la boutique si on est connecté ou aller à la page de connexion si on ne l'est pas" className="svg-icon" viewBox="0 0 20 20">
                                    <path fill="black" d="M17.671,13.945l0.003,0.002l1.708-7.687l-0.008-0.002c0.008-0.033,0.021-0.065,0.021-0.102c0-0.236-0.191-0.428-0.427-0.428H5.276L4.67,3.472L4.665,3.473c-0.053-0.175-0.21-0.306-0.403-0.306H1.032c-0.236,0-0.427,0.191-0.427,0.427c0,0.236,0.191,0.428,0.427,0.428h2.902l2.667,9.945l0,0c0.037,0.119,0.125,0.217,0.239,0.268c-0.16,0.26-0.257,0.562-0.257,0.891c0,0.943,0.765,1.707,1.708,1.707S10,16.068,10,15.125c0-0.312-0.09-0.602-0.237-0.855h4.744c-0.146,0.254-0.237,0.543-0.237,0.855c0,0.943,0.766,1.707,1.708,1.707c0.944,0,1.709-0.764,1.709-1.707c0-0.328-0.097-0.631-0.257-0.891C17.55,14.182,17.639,14.074,17.671,13.945 M15.934,6.583h2.502l-0.38,1.709h-2.312L15.934,6.583zM5.505,6.583h2.832l0.189,1.709H5.963L5.505,6.583z M6.65,10.854L6.192,9.146h2.429l0.19,1.708H6.65z M6.879,11.707h2.027l0.189,1.709H7.338L6.879,11.707z M8.292,15.979c-0.472,0-0.854-0.383-0.854-0.854c0-0.473,0.382-0.855,0.854-0.855s0.854,0.383,0.854,0.855C9.146,15.596,8.763,15.979,8.292,15.979 M11.708,13.416H9.955l-0.189-1.709h1.943V13.416z M11.708,10.854H9.67L9.48,9.146h2.228V10.854z M11.708,8.292H9.386l-0.19-1.709h2.512V8.292z M14.315,13.416h-1.753v-1.709h1.942L14.315,13.416zM14.6,10.854h-2.037V9.146h2.227L14.6,10.854z M14.884,8.292h-2.321V6.583h2.512L14.884,8.292z M15.978,15.979c-0.471,0-0.854-0.383-0.854-0.854c0-0.473,0.383-0.855,0.854-0.855c0.473,0,0.854,0.383,0.854,0.855C16.832,15.596,16.45,15.979,15.978,15.979 M16.917,13.416h-1.743l0.189-1.709h1.934L16.917,13.416z M15.458,10.854l0.19-1.708h2.218l-0.38,1.708H15.458z"></path>
                    </svg>
                    <Badge value={data && data.length} ></Badge>
                </span>
               
            </header>
            <CardItem data={data} handleDeleteItem={handleDeleteItem} />
            {
            data
            && 
            data.length !== 0
             && 
            <div className="control">
                <Button severity="danger" onClick={handleEmpty}  label="Vider le panier" />
                <Button severity="success" onClick={handleOpenDiag} label="Acheter" />
            </div>
            }
            <DialogBox message={message} open={open} handleCloseDiag={handleCloseDiag} handleBuy={handleBuy} />
        </div>
    )
}

export default ShopShirt;
