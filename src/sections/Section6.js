import React from 'react'
import './Style.css'
import Facebook from '../assets/facebook.svg'
import Instagram from '../assets/instagram.svg'
import Tiktok from '../assets/tiktok.svg'
import Twitter from '../assets/twitter.svg'
import Youtube from '../assets/youtube.png'
import Twith from '../assets/twitch.png'
import Telegram from '../assets/telegram.png'
const Section6 = function () {
    return (
        <section className="section6">
            <div className="box">
                <div className="imgs">
                    <div><img src={Facebook} alt="facebook" />
                        <img src={Instagram} alt="instagram" /></div>
                    <div>
                        <img src={Tiktok} alt="tiktok" />
                        <img src={Twitter} alt="twitter" /></div>
                    <div>
                        <img src={Youtube} alt="youtube" />
                        <img src={Twith} alt="twith" />

                    </div>
                    <div>
                        <img src={Telegram} alt="telegram" />


                    </div>

                </div>
                <div className="described">
                    <span>Escolha a rede social que você quer impulsionar</span>
                    <span>É um processo totalmente legal e 100% seguro. Basta escolher o pacote de sua preferência e seguir nossas etapas fáceis de checkout.</span>
                <a href="/">
                    Registrar-se Grátis
                </a>
                </div>

            </div>
        </section>

    );
}

export default Section6;