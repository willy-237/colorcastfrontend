import React from "react"
import Header from "../../Header.js";
import Footer from "../../Components/Footer/Footer.js";
import Pack from "../../Components/Pack/Pack.js"
import Concert from "../../Components/Concerts/Concerts.js";
import Featuring from "../../Components/Featuring/Featuring.js";
import Shop from "../../Components/Shop/Shop.js";

function Home({item, handleItem}){
    return(
        <>
           <Header item={item} />
           <Pack />
           <Concert />
           <Featuring />
           <Shop handleItem={handleItem} />
           <Footer />
        </>
    )
}

export default Home