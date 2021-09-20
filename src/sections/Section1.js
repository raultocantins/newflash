import React from 'react'
import './Style.css'
import Logo from '../assets/logo.png'
import Girl from '../assets/girl.jpg'
const Section1 = function () {
    return (
        <section className="section1">

            <div className="box">
                <div className="appbar">
                    <img src={Logo} alt="logo" />
                    <div className="groupButtons">
                        <a href="/painel" id="login">Login</a>
                        <a href="/painel/signup">Começe Já</a>
                    </div>
                </div>
                <div className="content">
                    <div id="described">
                        <span>
                            AUMENTE O <strong>ENGAJAMENTO</strong> DO <strong>YOUTUBE</strong> E DAS SUAS <strong>REDES SOCIAIS</strong>
                        </span>
                        <span>
                            SOMOS A PLATAFORMA DE MARKETING DIGITAL <strong>MAIS COMPLETA</strong> DO BRASIL, COM SERVIÇOS PARA TODAS AS <strong>REDES SOCIAIS.</strong>
                        </span>
                        <a href="/painel/signup">
                            Inscrever-se Já
                        </a>
                    </div>
                    <div className="imgsDescribed">
                        <img src={Girl} alt="girl" />
                    </div>


                </div>
            </div>
        </section>

    );
}

export default Section1;