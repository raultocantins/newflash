import React from 'react'
import './Style.css'
import Like from '../assets/gostar.png'
import Followers from '../assets/followers.png'
import Visibilidade from '../assets/visibilidade.png'
const Section2 = function () {
    return (
        <section className="section2">

            <h1>Impulsionando Milhares de Pessoas</h1>
            <div className="box">

                <div id="card">
                    <span>+240.000</span>
                    <span>Clientes</span>
                    <img src={Like} alt="like" />
                </div>
                <div id="card">
                    <span>+770.000</span>
                    <span>Pedidos</span>
                    <img src={Followers} alt="followers" />
                </div>
                <div id="card">
                    <span>+3.616</span>
                    <span>Processando Hoje</span>
                    <img src={Visibilidade} alt="visibilidade" />
                </div>
            </div>
        </section>

    );
}

export default Section2;