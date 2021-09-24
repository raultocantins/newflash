import { React, useState } from 'react'
import './Style.css'
import Logo from '../assets/logo.png'
import Girl from '../assets/girl.jpg'
import Menu from '../assets/list.png'
import Cancel from '../assets/error.png'
const Section1 = function () {

    const [open, Setopen] = useState(false)

    return (
        <section className="section1">

            <div className="box">
                <div className="appbar">
                    <img src={Logo} alt="logo" />
                    <button className="btnResponsive" onClick={()=>Setopen(!open)}>
                        {
                            open ? <img src={Cancel} alt="cancel" /> : <img src={Menu} alt="menu" />
                        }


                    </button>
                    {
                        open ? <div className="menuMobile">
                            <a href="/painel" >Login</a>
                            <a href="/painel/signup">Começe Já</a>
                        </div> : ""
                    }

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