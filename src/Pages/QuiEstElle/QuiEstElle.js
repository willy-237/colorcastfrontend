import React from "react"
import "./QuiEstElle.css"
import Footer from "../../Components/Footer/Footer.js";
import { Link } from "react-router-dom"
import cover from "../../assets/Aya-nakamura-cover-2.png"

function Header(){
    
    return(
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
                        <li><Link to="/">RETOUR À LA PAGE D'ACCEUIL</Link></li>
                        <li><Link to="/article">ARTICLE</Link></li>
                    </ul>
                    <ul className="other-nav">
                        <li>
                            <svg role="se connecter ou s'inscrire ou se deconnecter"  className="svg-icon" viewBox="0 0 20 20">
							    <path fill="#F1EEEB" d="M10,10.9c2.373,0,4.303-1.932,4.303-4.306c0-2.372-1.93-4.302-4.303-4.302S5.696,4.223,5.696,6.594C5.696,8.969,7.627,10.9,10,10.9z M10,3.331c1.801,0,3.266,1.463,3.266,3.263c0,1.802-1.465,3.267-3.266,3.267c-1.8,0-3.265-1.465-3.265-3.267C6.735,4.794,8.2,3.331,10,3.331z"></path>
							    <path fill="#F1EEEB" d="M10,12.503c-4.418,0-7.878,2.058-7.878,4.685c0,0.288,0.231,0.52,0.52,0.52c0.287,0,0.519-0.231,0.519-0.52c0-1.976,3.132-3.646,6.84-3.646c3.707,0,6.838,1.671,6.838,3.646c0,0.288,0.234,0.52,0.521,0.52s0.52-0.231,0.52-0.52C17.879,14.561,14.418,12.503,10,12.503z"></path>
						    </svg>
                            
                        </li>
                        <li>
                            <svg role="acceder à la boutique si on est connecté ou aller à la page de connexion si on ne l'est pas" className="svg-icon" viewBox="0 0 20 20">
							    <path fill="#F1EEEB" d="M17.671,13.945l0.003,0.002l1.708-7.687l-0.008-0.002c0.008-0.033,0.021-0.065,0.021-0.102c0-0.236-0.191-0.428-0.427-0.428H5.276L4.67,3.472L4.665,3.473c-0.053-0.175-0.21-0.306-0.403-0.306H1.032c-0.236,0-0.427,0.191-0.427,0.427c0,0.236,0.191,0.428,0.427,0.428h2.902l2.667,9.945l0,0c0.037,0.119,0.125,0.217,0.239,0.268c-0.16,0.26-0.257,0.562-0.257,0.891c0,0.943,0.765,1.707,1.708,1.707S10,16.068,10,15.125c0-0.312-0.09-0.602-0.237-0.855h4.744c-0.146,0.254-0.237,0.543-0.237,0.855c0,0.943,0.766,1.707,1.708,1.707c0.944,0,1.709-0.764,1.709-1.707c0-0.328-0.097-0.631-0.257-0.891C17.55,14.182,17.639,14.074,17.671,13.945 M15.934,6.583h2.502l-0.38,1.709h-2.312L15.934,6.583zM5.505,6.583h2.832l0.189,1.709H5.963L5.505,6.583z M6.65,10.854L6.192,9.146h2.429l0.19,1.708H6.65z M6.879,11.707h2.027l0.189,1.709H7.338L6.879,11.707z M8.292,15.979c-0.472,0-0.854-0.383-0.854-0.854c0-0.473,0.382-0.855,0.854-0.855s0.854,0.383,0.854,0.855C9.146,15.596,8.763,15.979,8.292,15.979 M11.708,13.416H9.955l-0.189-1.709h1.943V13.416z M11.708,10.854H9.67L9.48,9.146h2.228V10.854z M11.708,8.292H9.386l-0.19-1.709h2.512V8.292z M14.315,13.416h-1.753v-1.709h1.942L14.315,13.416zM14.6,10.854h-2.037V9.146h2.227L14.6,10.854z M14.884,8.292h-2.321V6.583h2.512L14.884,8.292z M15.978,15.979c-0.471,0-0.854-0.383-0.854-0.854c0-0.473,0.383-0.855,0.854-0.855c0.473,0,0.854,0.383,0.854,0.855C16.832,15.596,16.45,15.979,15.978,15.979 M16.917,13.416h-1.743l0.189-1.709h1.934L16.917,13.416z M15.458,10.854l0.19-1.708h2.218l-0.38,1.708H15.458z"></path>
						    </svg>
                            
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
)
}

function QuiEstElle(){
    return(
        <>
           <Header />
            <article className="quiestelle">
                <section>
                    <span className="first-span"> C’est qui Aya ?</span>
                    <span className="second-span"> Qui est-elle ?</span>
                    <span className="third-span"> D'ou vient elle ?</span>
                    <span className="fourth-span"> C’est quoi son style ?</span>
                    <div className="first-div">
                        <p> Aya Nakamura est une artiste française d’origine malienne qui a pris d’assaut l’industrie musicale
                            française avec son style unique et sa voix captivante. Née en 1995 à Bamako, au Mali, Aya a déménagé en France
                            avec sa famille à l’âge de deux ans et a grandi dans la banlieue parisienne.Elle a commencé sa carrière musicale
                            en 2015 avec la sortie de son premier single, «Karma», qui a connu un succès modéré. Cependant, c’est en 2018
                            que sa carrière a pris son envol avec la sortie de son deuxième album, «Nakamura», qui a été certifié platine en
                            France. L’album comprenait des tubes tels que «Djadja», «Pookie» et «Copines», qui ont tous atteint le sommet
                            des classements français et ont été diffusés à travers le monde. Aya Nakamura est connue pour son style musical
                            unique qui mélange des influences africaines avec des rythmes de R&B et de pop. Elle chante en français et en
                            bambara, la langue de son pays d’origine, ce qui ajoute une touche authentique à sa musique. Ses paroles sont
                            souvent des histoires d’amour et de relations compliquées, qui sont facilement identifiables pour son jeune
                            public.</p>
                        <p> Aya Nakamura est une artiste française d’origine malienne qui a pris d’assaut l’industrie musicale
                            française avec son style unique et sa voix captivante. Née en 1995 à Bamako, au Mali, Aya a déménagé en France
                            avec sa famille à l’âge de deux ans et a grandi dans la banlieue parisienne.Elle a commencé sa carrière musicale
                            en 2015 avec la sortie de son premier single, «Karma», qui a connu un succès modéré. Cependant, c’est en 2018
                            que sa carrière a pris son envol avec la sortie de son deuxième album, «Nakamura», qui a été certifié platine en
                            France. L’album comprenait des tubes tels que «Djadja», «Pookie» et «Copines», qui ont tous atteint le sommet
                            des classements français et ont été diffusés à travers le monde. Aya Nakamura est connue pour son style musical
                            unique qui mélange des influences africaines avec des rythmes de R&B et de pop. Elle chante en français et en
                            bambara, la langue de son pays d’origine, ce qui ajoute une touche authentique à sa musique. Ses paroles sont
                            souvent des histoires d’amour et de relations compliquées, qui sont facilement identifiables pour son jeune
                            public.
                        </p>
                    </div>
                </section>
                <section>
                        <span className="span1"> DNK</span>
                        <span className="span2"> Ça sort quand ?</span>
                        <span className="span3">Ça veut dire quoi? </span>
                        <span className="span4">Ça fait ambiancer ? </span>
                        <span className="span5">Ç'est de la pop ? </span>
                        <div className="second-div">
                            <p> « DNK » est le nom du tout nouvel album d’Aya Nakamura qui signifie « Danioko » son nom de famille.
                                L’album contient 15 titres avec 3 featurings (SDM, Myke Towers, Tiakola), pour une durée de 42 min. Depuis ses
                                débuts (le vrai se souvient sûrement de « Brisé », en 2015.), Aya Nakamura donne envie de danser avec ses
                                rythmes chaloupés qui empruntent autant à la pop qu’au R’n’B et à la soul, mais aussi à des sonorités
                                caribéennes. L’influence du zouk était déjà évidente dans son troisième album Aya (2020), en particulier sur les
                                morceaux les plus chauds que sont « Hot » et « Préféré », et on pouvait deviner du kompa (sorte de zouk
                                lancinant venu tout droit de Haïti) sur le son « Plus Jamais » feat. Stormzy (un remix qui en accentue les
                                accents haïtiens dépasse les 1,5 million de vue sur YouTube d’ailleurs.). Voilà que l’artiste francophone la
                                plus streamer au monde persiste et signe son sillon afro-caribéen avec son quatrième effort, DNK (contraction de
                                son véritable patronyme Danioko), sorti le 27 janvier 2023.</p>
                            <p> 
                                C’était déjà criant avec les deux premiers singles de son nouvel album, « SMS » puis « Baby » : DNK
                                regorge d’influences zouk, kompa, mais aussi d’autres sous-genres musicaux populaires dans les Caraïbes, comme
                                le shatta (mot emprunté au jamaïcain pour désigner une sorte de dancehall remixé à la sauce chien antillaise,
                                plutôt en Martinique, aux paroles très crues) et lebouyon (plus populaire en Guadeloupe). Ce dernier mot désigne
                                à l’origine en Dominique une soupe de gombos (un légume vert) mais aussi maintenant un genre musical qui reprend
                                plusieurs styles caribéens, comme le dancehall jamaïcain et la soca trinidadienne (qui est une version accélérée
                                du calypso de Trinité-et-Tobago). Les Guadeloupéens se sont réapproprié le bouyon, en y ajoutant des paroles
                                sexuellement explicites en créole. Le rythme du bouyon est beaucoup plus dynamique, accéléré, que le shatta,
                                plus nonchalant. Et si cela peut sonner complètement inconnu à vos oreilles, ce n’est qu’une question de temps,
                                vu combien le morceau bien shatta de l’album, « Beleck », commence déjà à obséder TikTok. « C’est Max à la
                                guitare et Seny au piano », chante celle surnommée la Nakamurance sur ce titre en clin d’œil à ses nouveaux
                                producteurs sur cet album.
                            </p>
                        </div>
                </section>
            </article>
            <Footer />
        </>
    )
}

export default QuiEstElle;