import React from 'react'
import './Style.css'

import Juliana from '../assets/juliana.jpg'
import Fernando from '../assets/fernando.jpg'
import Eduardo from '../assets/eduardo.jpg'
import Slider from "react-slick";
import Star from '../assets/star.svg'
import Quotation from '../assets/quotation.png'
const Comentarios = function () {
    var settings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1
    };
    return (
        <div className="slider">
            <div className="box">
                <Slider {...settings} >
                    <div className="comments">
                        <div className="users">
                            <img src={Juliana} alt="user" />
                            <span>
                                Juliana OLiveira
                            </span>

                            <img src={Star} alt="star" id="star" />

                            <span>
                                O que me faz ser cliente assíduo da Flash Social, é o custo benefício de seus serviços e o seu ágil suporte de 24 horas.
                                <img src={Quotation} alt="quotation" id="quotation" />
                            </span>

                        </div>
                        <div className="users">
                            <img src={Fernando} alt="user" />
                            <span>
                                Fernando Soares
                            </span>
                            <img src={Star} alt="star" id="star" />
                            <span>
                                Uso a Flash social desde o início, sempre obtive o melhor serviço para que eu possa aumentar meu portfólio de clientes cada vez mais.
                                <img src={Quotation} alt="quotation" id="quotation" />
                            </span>

                        </div>
                        <div className="users">
                            <img src={Eduardo} alt="user" />
                            <span>
                                Eduardo da Rosa
                            </span>
                            <img src={Star} alt="star" id="star" />
                            <span>
                                Através da revenda dos serviços, consigo ter uma ótima renda extra ao oferecer a melhor qualidade aos meus clientes. Nota 10!
                                <img src={Quotation} alt="quotation" id="quotation" />
                            </span>

                        </div>

                    </div>
                    <div className="comments">
                        <div className="users">
                            <img src={Fernando} alt="user" />
                            <span>
                                Fernando Soares
                            </span>
                            <img src={Star} alt="star" id="star" />
                            <span>
                                Uso a Flash social desde o início, sempre obtive o melhor serviço para que eu possa aumentar meu portfólio de clientes cada vez mais.
                                <img src={Quotation} alt="quotation" id="quotation" />
                            </span>

                        </div>
                        <div className="users">
                            <img src={Eduardo} alt="user" />
                            <span>
                                Eduardo da Rosa
                            </span>
                            <img src={Star} alt="star" id="star" />
                            <span>
                                Através da revenda dos serviços, consigo ter uma ótima renda extra ao oferecer a melhor qualidade aos meus clientes. Nota 10!
                                <img src={Quotation} alt="quotation" id="quotation" />
                            </span>

                        </div>
                    </div>

                </Slider>
            </div>

        </div>
    );
}
export default Comentarios;