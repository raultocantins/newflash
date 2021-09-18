import React from 'react'
import './Style.css'
import Hero from '../assets/hero.png'
const Section3 = function () {
    return (
        <section className="section3">
            <div className="box">
                <div className="img">
                    <img src={Hero} alt="hero" />
                </div>
                <div className="described">
                    <span>

                        A <strong>PLATAFORMA</strong> COMPLETA DE IMPULSIONAMENTO PARA <strong>MARKETING DIGITAL</strong>
                    </span>
                    <span>
                        Quer você seja um artista independente, blogueiro, pequena empresa ou apenas um usuário regular do Instagram, Facebook, Youtube, a Flash Social é a sua melhor escolha de marketing em mídias sociais para conseguir o engajamento que você precisa.
                    </span>
                    <a href="/">
                        Cadastrar
                    </a>
                </div>

            </div>
        </section>

    );
}

export default Section3;