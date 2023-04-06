import React, { useEffect, useState } from "react";
import sweat from "../../assets/Sweet.png";
import pull from "../../assets/Pull.png";
import teeShirtBlanc from "../../assets/Tee-shirt-blanc.png";
import teeShirtNoir from "../../assets/Tee-shirt-noir.png";
import sacBlanc from "../../assets/Sac-blanc.png"
import sacNoir from "../../assets/Sac-noir.png"
import rougeALevres from "../../assets/rouge-à-levres-1.png";
import vernis from "../../assets/Vernis.png";
import "./Shop.css";
import { Button, Dialog, DialogTitle, DialogContent, DialogContentText, DialogActions} from "@mui/material";
import {data } from "../../data.js"



function ItemShop({id,handleOpenDiag, image, name, price}){
    return(
        <div id={id} onClick={handleOpenDiag}>
            <img id={id}  src={image} alt="sweet à capuche blanc" />
            <span id={id}>{name}<br/>{price}€</span>
        </div>
    )
}

function DialogBox({message, open, handleCloseDiag, handleAddArticle}){
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
                  Voulez vous ajouter cet article à votre panier?
            </DialogContentText>
        </DialogContent>
        <DialogActions>
            <Button onClick={handleCloseDiag} >
                Non
            </Button>
            <Button onClick={handleAddArticle}  color="secondary" >
                Oui
            </Button>
        </DialogActions>
      </Dialog>
      )
    }
  }

function Shop({count,handleItem}){
    const [message, setMessage] = useState('');
    const [open, setOpen] = useState(false);
    const [cible , setCible] = useState("");
    const [dataSent, setDataSent] = useState([])

    useEffect(()=>{
        const sentData = JSON.stringify(dataSent);
        sessionStorage.setItem("data", sentData);
        
    }, [dataSent, count])
    
    const addData = () =>{
        const dataCopy = [...dataSent];
        switch(cible){
            case "0":
                dataCopy.push(data[0])
                setDataSent(dataCopy)
            break;
            case "1":
                dataCopy.push(data[1])
                setDataSent(dataCopy)
            break;
            case "2":
                dataCopy.push(data[2])
                setDataSent(dataCopy)
            break;
            case "3":
                dataCopy.push(data[3])
                setDataSent(dataCopy)
            break;
            case "4":
                dataCopy.push(data[4])
                setDataSent(dataCopy)
            break;
            case "5":
                dataCopy.push(data[5])
                setDataSent(dataCopy)
            break;
            case "6":
                dataCopy.push(data[6])
                setDataSent(dataCopy)
            break;
            case "7":
                dataCopy.push(data[7])
                setDataSent(dataCopy)
            break;
            default:{}
        }
    }

    
    

    const handleCloseDiag = () =>{
        setOpen(false);
    }

    const handleAddArticle = (e) =>{
        handleItem();
        setMessage("Panier mis à jour");
        setTimeout(()=>{
            setOpen(false)
            setMessage("")
        }, 1000)
        addData();
        
        
    }

    const handleOpenDiag = (e) =>{
        setCible(e.target.id)
        setOpen(true)
    }

    return(
        <>
        <section id="shop">
            <h2>Shop</h2>
            <div className="shop">
                <div data-aos="fade-right" data-aos-duration="1000" className="first">
                    <ItemShop id="0"  handleOpenDiag={handleOpenDiag} name="Sweat blanc" price="40" image={sweat} />
                    <ItemShop id="1" handleOpenDiag={handleOpenDiag} name="Pull noir" price="30" image={pull} />
                    <ItemShop id="2" handleOpenDiag={handleOpenDiag} name="Tee-shirt noir" price="20" image={teeShirtNoir} />
                    <ItemShop id="3" handleOpenDiag={handleOpenDiag} name="Tee-shirt blanc" price="20" image={teeShirtBlanc} />
                </div>
                <div data-aos="fade-left" data-aos-duration="1000" className="second">
                    <ItemShop id="4" handleOpenDiag={handleOpenDiag} name="sac blanc" price="10" image={sacBlanc} />
                    <ItemShop id="5" handleOpenDiag={handleOpenDiag} name="sac noir" price="10" image={sacNoir} />
                    <ItemShop id="6" handleOpenDiag={handleOpenDiag} name="Rouge à lèvres" price="15" image={rougeALevres} />
                    <ItemShop id="7" handleOpenDiag={handleOpenDiag} name="Vernis" price="15" image={vernis} />
                </div>
            </div>
        </section>
        <DialogBox message={message} open={open} handleCloseDiag={handleCloseDiag} handleAddArticle={(e) =>{handleAddArticle(e)}} />
        </>
    )
}

export default Shop