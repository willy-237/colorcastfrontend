import React from "react";
import { Carousel } from 'primereact/carousel/carousel.esm.js';
import CD from "../../assets/CD.png";
import teeShirtBlanc from "../../assets/Tee-shirt-blanc.png";
import rougeLevre1 from "../../assets/rouge-à-levres-1.png";
import vernis from "../../assets/Vernis.png";
import vinyle from "../../assets/vinyle.png";
import maquillage from "../../assets/Maquillage.png"
import teeshirt from "../../assets/Teeshirt.png";
import "./Pack.css"

const Vinyle = [
    {
        image: vinyle,
        alt: "vinyle du nouvel album"
    }
]
const cdPlusTeeShirt = [
    {
        image: teeshirt,
        alt: "pack complet"
    },
    {
        image: CD,
        alt: "cd du nouvel album"
    },
    {
        image: teeShirtBlanc,
        alt: "tee shirt blanc"
    }
];

const cdPlusRougeALevrePlusVernis = [
    {
        image: maquillage,
        alt: "pack du maquillage"
    },
    {
        image: CD,
        alt: "cd du nouvel album"
    },
    {
        image: rougeLevre1,
        alt: "rouge à lèvres de couleur verte"
    },
    {
        image: vernis,
        alt: "vernis de couleur vert"
    }
]

const cd = [
    {
        image: CD,
        alt: "cd du nouvel album"
    }
]


function Pack({title, subtitle, prix, value, left, right, animation}){

    const itemTemplate = (item) =>{
        return(
            <figure>
                <img src={item.image} alt={item.alt} />
            </figure>
        )
    }


    return(
        <div data-aos={animation} data-aos-duration="1000"  className="pack">
            <div style={{order: `${left}`}}  className="pack-price">
                <span>{title}</span>
                <span>{subtitle}</span>
                <span>{prix}</span>
                <span>acheter</span>
            </div>
            <div  style={{order: `${right}`}} className="pack-content" Aria-role="afficher le contenu des packs à acheter">
                <Carousel autoplayInterval={3000} value={value} numVisible={1} numScroll={1}  itemTemplate={itemTemplate} />
            </div>
        </div>
    )
}

function ShopPack(){
    return(
        <section id="pack">
            <Pack animation="fade-left"  title="box double vinyle" subtitle="édition exlusive et limitée" prix="39,99€" value={Vinyle} /> 
            <Pack animation="fade-right" left={2} right={1} title="cd" subtitle="édition limitée" prix="14,99€" value={cd}/>
            <Pack animation="fade-left" left={1} right={2}  title="pack cd + tee-shirt" subtitle="édition limitée et diadème" prix="25,99€" value={cdPlusTeeShirt}/>
            <Pack animation="fade-right" left={2} right={1}  title="pack cd + rouge à lèvres et vernis" subtitle="édition limitée et diadème" prix="25,99€" value={cdPlusRougeALevrePlusVernis}/>
        </section>
    )
}

export default ShopPack