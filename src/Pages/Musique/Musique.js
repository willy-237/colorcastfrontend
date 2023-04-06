import React from "react";
import "./Musique.css"
import Spotify from "../../assets/Spotify-Logo.png";
import Cover from "../../assets/Aya-nakamura-cover-2.png"
import Deezer from '../../assets/Logo Deezer.jpeg'
import Fnac from '../../assets/fnac-logo-695x356.png';
import AmazonMusic from "../../assets/amazon-music-logo.png"
import Cultura from "../../assets/cultura.png";
import AppleMusic from "../../assets/2560px-Apple_Music_logotype.png"
import {Card} from 'primereact/card/card.esm.js'

function Link({image, description, lien, title}){
    const role = "afficher le logo du site vers lequel le lien vas nous mener";
    return(
        <Card>
            <figure role={role}>
                <img src={image} alt={description} />
                <span><a rel="noreferrer noopener external" target="_blank" title={title} href={lien}>Écouter</a></span>
            </figure>
        </Card>
    )
}
function Musique(){
    const roleHeader = "entête";
    const roleMain = "lien vers les différentes plateformes d'hébergement de l'album";
    return(
        <div className="musique">
          <header role={roleHeader} className="cover">
            <figure>
                <img src={Cover} alt="cover de la sortie de l'album DNK" />
            </figure>
            <p>
                AYA NAKAMURA - DNK <br/>
                Sortie le 6  avril
            </p>
          </header>
          <main role={roleMain}>
            <Link image={Spotify} title="lien vers l'album DNK d'Aya nakamura sur spotify" description="logo de spotify" lien="https://open.spotify.com/playlist/043ChY7FCpkxHX6abXH0vY" />
            <Link image={AppleMusic} title="lien vers l'album DNK d'Aya nakamura sur Apple music" description="logo d'Apple music" lien="https://music.apple.com/fr/album/dnk/1665941234" /> 
            <Link image={Deezer} title="lien vers l'album DNK d'Aya nakamura sur deezer" description="logo de deezer" lien="https://www.deezer.com/fr/album/400388367" />
            <Link image={AmazonMusic} title="lien vers l'album DNK d'Aya nakamura sur Amazon music" description="logo de amazon music" lien="https://music.amazon.fr/artists/B015LSPWSU/aya-nakamura" />
            <Link image={Fnac} title="lien pour acheter le cd de l'album DNK d'Aya nakamura à la fnac" description="logo de la fnac" lien="https://www.fnac.com/a17674214/Aya-Nakamura-DNK-CD-album" />
            <Link image={Cultura} title="lien pour achete le cd de l'album DNK d'Aya nakamura sur cultura" description="logo de cultura" lien="https://www.cultura.com/p-dnk-standard-5054197433849.html" />
          </main>
        </div>
    )
}

export default Musique