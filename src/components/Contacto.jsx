import React from 'react'
import facebook from '../images/facebook.png'
import tweeter from '../images/tweeter.png'
import insta from '../images/insta.png'

export default function Contacto() {
    return (
        <div>
            <div className="container">
                <main className="container__main">
                    <div className="container__middle">
                        
                        <br /><br />
                        <div>Puebla, México   </div> 
                        
                    </div>

                    <div className="container__right">
                        <h1>Horario de Trabajo</h1>
                        <div>Abierto de 9am a 6pm de lunes as sábado</div>
                        <div>Cerrado domingos y días festivos</div>
                        <div>gerpaxt@gmail.com</div>
                        <div>+52 55 54009947</div>

                        <br /><br />
                        <iframe title="Location" src="https://www.google.com/maps/embed?pb=!1m16!1m12!1m3!1d3773.115218897961!2d-98.28377038461667!3d18.970518260208166!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!2m1!1sBoulevard%20Yucat%C3%A1n%2018%2C%20Lomas%20de%20Angel%C3%B3polis%2C%20Pue.!5e0!3m2!1ses!2smx!4v1639188897890!5m2!1ses!2smx" width="600" height="450"  allowFullScreen="" loading="lazy"></iframe>        
                    </div>
                    <div className="container__right">
                        <a target="_blank"  href="https://www.facebook.com/gerardo.paxtian.1" rel="noreferrer">
                            <img src={facebook} alt="facebook" />
                        </a>      
                        <a target="_blank"  href="https://twitter.com/@gerpax" rel="noreferrer">
                            <img src={tweeter} alt="tweeter" />
                        </a>    
                        <a target="_blank" href="https://www.instagram.com/?hl=es-la" rel="noreferrer">
                            <img src={insta} alt="instagram" />
                        </a>   
                    </div>
                    <div className="container__right">
                            
                    </div>
                </main>

            </div>
        </div>
    )
}