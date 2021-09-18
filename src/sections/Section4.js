import React from 'react'
import './Style.css'
import Username from '../assets/username.png'
const Section4 = function () {
    return (
        <section className="section4">
            <div className="box">
                <div className="described">
                    <span>
                        Como funciona a plataforma?
                    </span>
                    <span>
                        Quer você seja um artista independente, blogueiro, pequena empresa ou apenas um usuário regular do Instagram, Facebook, Youtube, a Flash Social é a sua melhor escolha de marketing em mídias sociais para conseguir o engajamento que você precisa.
                    </span>
                    <a href="/">
                        Saber mais...
                    </a>
                </div>
                <div className="img">
                    <img src={Username} alt="username" />
                </div>

            </div>
        </section>

    );
}

export default Section4;