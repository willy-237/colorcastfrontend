import React, { useState } from "react";
import "./Concert.css";
import photoConcert from "../../assets/Concert-Aya.jpg"



function Concert(){
    const [tours, setTours] = useState([])
    const [message, setMessage] = useState("");
    const [open, setOpen]= useState("none")
    const [activeButton, setActiveButton] = useState(null)

    const handleClick = name => ()=>{
        fetch("http://localhost:3001/api/tours/city/" + name)
            .then(data => data.json())
            .then(data => {
                if(data.message){
                    
                    setMessage(data.message)
                }else{
                    setMessage("")
                    setTours(data)
                }
            }).catch(data =>{
                if(data.error){
                    setMessage(data.error)
                }
            })

        // Si le bouton cliqué est déjà actif, on masque la div
        if(activeButton === name){
            setOpen("none")
            setActiveButton(null)
        }
        // Sinon on affiche la div correspondante et on active le bouton cliqué
        else {
            setOpen("block")
            setActiveButton(name)
        }
    }

    return(
        <section id="concerts" className="concerts">
            <h2>Concerts</h2>
            <div className="first-list">
                <DisplayTour city="Paris" handleClick={handleClick("paris")} isActive={activeButton === "paris"} />
                <DisplayTour city="Floirac" handleClick={handleClick("floirac")} isActive={activeButton === "floirac"} />
                <DisplayTour city="Marseille" handleClick={handleClick("marseille")} isActive={activeButton === "marseille"}  />
                <DisplayTour city="Nantes" handleClick={handleClick("nantes")} isActive={activeButton === "nantes"}  />
                <DisplayTour city="Arras" handleClick={handleClick("arras")} isActive={activeButton === "arras"}  />
            </div>
            <div className="second-list">
                <DisplayTour city="Lyon" handleClick={handleClick("lyon")} isActive={activeButton === "lyon"}  />
                <DisplayTour city="Dijon" handleClick={handleClick("dijon")} isActive={activeButton === "dijon"}  />
                <DisplayTour city="Carhaix" handleClick={handleClick("carhaix")} isActive={activeButton === "carhaix"}  />
                <DisplayTour city="Lisbon" handleClick={handleClick("lisbon")} isActive={activeButton === "lisbon"}  />
                <DisplayTour city="Reims" handleClick={handleClick("reims")} isActive={activeButton === "reims"}  />
            </div>
            {/* Affichage de la div correspondante si activeButton est défini */}
            {activeButton && 
                <div data-aos="fade-down" data-aos-duration="1000" className="display" style={{display: `${open}`}}>
                    {<Display message={message} tours={tours} />}
                </div>
            }
            <figure data-aos="fade-down" data-aos-duration="1000">
                <img src={photoConcert} alt="concert d'aya nakamura" />
            </figure>
        </section>
    )
}

function DisplayTour({city, handleClick, isActive}){
    
    return(
        // Ajout d'une classe active si le bouton est actif
        <button className={isActive ? 'active' : ''} onClick={handleClick}>{city}</button>
    )
}

function Display({message, tours}){
    if(message){
        return(
            <span>{message}</span>
        )
    }else if(tours.length > 0) {
        return(
            <>
               <span>{tours[0].city}</span>
                <ul>
                    {tours && tours.map(tour =>{
                        return(
                        <li key={tour._id}>
                            {tour.date} {tour.concertHall} Ouverture des portes à {tour.time}
                        </li> 
                        )
                    })}
                </ul>
            </>
        )
    }
}

// function Display({message, tours}){
//     return(
//         <>
//             {tours && tours.length > 0 ? (
//                 <>
//                     <span>{tours[0].city}</span>
//                     <ul>
//                         {tours.map(tour =>{
//                             return(
//                             <li key={tour._id}>
//                                 {tour.date} {tour.concertHall} Ouverture des portes à {tour.time}
//                             </li> 
//                             )
//                         })}
//                     </ul>
//                 </>
//             ) : (
//                 <span>{message}</span>
//             )}
//         </>
//     )
// }


// function Display({message, tours}){
//     if(message){
//         return(
//             <span>{message}</span>
//         )
//     }else if(tours && tours.length > 0){
//         return(
//             <>
//                <span>{tours[0].city}</span>
//                 <ul>
//                     {tours && tours.map(tour =>{
//                         return(
//                         <li key={tour._id}>
//                             {tour.date} {tour.concertHall} Ouverture des portes à {tour.time}
//                         </li> 
//                         )
//                     })}
//                 </ul>
//             </>
//         )
//     }
// }



// function Concert(){
//     const [tours, setTours] = useState()
//     const [message, setMessage] = useState("");
//     const [open, setOpen]= useState("none")

//     const handleClick = name => ()=>{
//         fetch("http://localhost:3001/api/tours/city/" + name)
//             .then(data => data.json())
//             .then(data => {
//                 if(data.message){
//                     setMessage(data.message)
//                 }else{
//                     setMessage("")
//                     setTours(data)
//                 }
                
//             }).catch(data =>{
//                 if(data.error){
//                     setMessage(data.error)
//                 }
//             })
//         if(open === "none"){
//             setOpen("block")
//         }else{
//             setOpen("none")
//         }
//     }

//     return(
//         <section className="concerts">
//             <h2>Concerts</h2>
//             <div className="first-list">
//                 <DisplayTour city="Paris" handleClick={handleClick("paris")} />
//                 <DisplayTour city="Floirac" handleClick={handleClick("floirac")} />
//                 <DisplayTour city="Marseille" handleClick={handleClick("marseille")}  />
//                 <DisplayTour city="Nantes" handleClick={handleClick("nantes")}  />
//                 <DisplayTour city="Arras" handleClick={handleClick("arras")}  />
//             </div>
//             <div className="second-list">
//                 <DisplayTour city="Lyon" handleClick={handleClick("lyon")}  />
//                 <DisplayTour city="Dijon" handleClick={handleClick("dijon")}  />
//                 <DisplayTour city="Carhaix" handleClick={handleClick("carhaix")}  />
//                 <DisplayTour city="Lisbon" handleClick={handleClick("lisbon")}  />
//                 <DisplayTour city="Reims" handleClick={handleClick("reims")}  />
//             </div>
//             <div className="display" style={{display: `${open}`}}>
//                 {tours && <Display message={message} tours={tours} />}
//             </div>
//             <figure>
//                 <img src={photoConcert} alt="concert d'aya nakamura" />
//             </figure>
//         </section>
//     )
// }

// function DisplayTour({city, handleClick}){
    
//     return(
//         <button onClick={handleClick}>{city}</button>
//     )
// }

// function Display({message, tours}){
//     if(message){
//         return(
//             <span>{message}</span>
//         )
//     }else {
//         return(
//             <>
//                <span>{tours[0].city}</span>
//                 <ul>
//                     {tours && tours.map(tour =>{
//                         return(
//                         <li key={tour._id}>
//                             {tour.date} {tour.concertHall} Ouverture des portes à {tour.time}
//                         </li> 
//                         )
//                     })}
//                 </ul>
//             </>
//         )
//     }
// }

export default Concert;