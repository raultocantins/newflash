import React from 'react'
import './Style.css'
const Score = function () {
    return (
        <section className="score">

            <h1>Impulsionando Milhares de Pessoas</h1>
            <div className="box">
                <div className="cards">
                    <div id="card">
                        <span>+240.000</span>
                        <span>Clientes</span>

                    </div>
                    <div id="card">
                        <span>+770.000</span>
                        <span>Pedidos</span>

                    </div>
                    <div id="card">
                        <span>+3.616</span>
                        <span>Processando Hoje</span>

                    </div>
                </div>
                <div className="rocket">
                    <h1>
                        foguete
                    </h1>
                </div>
            </div>
        </section>

    );
}

export default Score;