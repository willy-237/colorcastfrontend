import React, { useState, useRef, useEffect} from "react";
import "./Featuring.css";
import SDM from "../../assets/sdm.jpg";
import Kim from "../../assets/kim.png"
import Tiakola from "../../assets/tiakola.jpg"
import Myke from "../../assets/myke.jpg"
import audioSdm from "../../assets/Daddy-ft-sdm.mp3"
import audioKim from "../../assets/Chacun-ft-Kim.mp3";
import audioTiakola from "../../assets/Cadeau-ft-tiakola.mp3";
import audioMyke from "../../assets/T’as-peur-ft-myke-towers.mp3";



function Feat({image, alt, name, title, audio, color}){
    return(
        <div data-aos="fade-right" data-aos-duration="1000" className="feat">
            <figure>
                <img src={image} alt={alt}/> 
                <figcaption>
                    <span>{name}</span>
                    <span>
                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 256 256" id="IconChangeColor" height="31" width="31"><rect width="256" height="256" fill="none"></rect><circle cx="180" cy="172" r="28" fill="none" stroke="#000" stroke-linecap="round" stroke-linejoin="round" stroke-width="8"></circle><circle cx="52" cy="204" r="28" fill="none" stroke="#000" stroke-linecap="round" stroke-linejoin="round" stroke-width="8"></circle><polyline points="80 204 80 64 208 32 208 172" fill="none" stroke="#000" stroke-linecap="round" stroke-linejoin="round" stroke-width="8"></polyline></svg>
                        {title}
                    </span>
                    <AudioPlayer src={audio} color={color} />
                </figcaption>
            </figure>
            
        </div>
    )
}

function Featuring(){
  useEffect(()=>{
    fetch("http://localhost:3001/api/tours/city/aze")
    .then((data)=> data.json())
    .then(data => console.log(data))
  })
    return(
        <section id="featuring" className="collaboration">
            <h2>Featuring</h2>
            <div className="preview">
              <Feat image={Myke} name="Myke Towers" title="T'as peur" audio={audioMyke} color="red" />
              <Feat image={Tiakola} name="Tiakola" title="Cadeau" audio={audioTiakola} />
              <Feat image={SDM} name="SDM" title="Daddy" audio={audioSdm} />
              <Feat image={Kim} name="Kim" title="Chacun" audio={audioKim} />
            </div>
        </section>
    )
}




function AudioPlayer({ src, color }) {
  const [isPlaying, setIsPlaying] = useState(false);
  const [currentTime, setCurrentTime] = useState(0);
  const audioRef = useRef(null);

  function togglePlay() {
    const audio = audioRef.current;
    if (isPlaying) {
      audio.pause();
    } else {
      audio.play();
    }
    setIsPlaying(!isPlaying);
  }

  function handleTimeUpdate() {
    const audio = audioRef.current;
    setCurrentTime(audio.currentTime);
  }

  return (
    <div className="audio">
      <button onClick={togglePlay}>{isPlaying ? "Pause" : "Play"}</button>
      <progress
        value={currentTime}
        max={audioRef.current && audioRef.current.duration}
        style={{backgroundcolor: `${color}`}}
      />
      <audio
        ref={audioRef}
        src={src}
        onTimeUpdate={handleTimeUpdate}
        onEnded={() => setIsPlaying(false)}
      />
    </div>
  );
}

export default Featuring