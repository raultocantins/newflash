import React from 'react'
import './Style.css'
import Like from '../assets/gostar.png'
import Followers from '../assets/followers.png'
import Visibilidade from '../assets/visibilidade.png'
const Section2 = function () {
    return (
        <section className="section2">

            <h1>Escolha a rede social que você quer impulsionar</h1>
            <span>Simply choose which service you require below and we will get working for you immediately!</span>
            <div className="box">

                <div id="card">
                    <span>Likes</span>
                    <span>Buy Instagram likes from Twicsy easily and securely.</span>
                    <img src={Like} alt="like" />
                </div>
                <div id="card">
                    <span>Followers</span>
                    <span>Buy Instagram followers from Twicsy easily and securely.</span>
                    <img src={Followers} alt="followers" />
                </div>
                <div id="card">
                    <span>Views</span>
                    <span>Buy Instagram views from Twicsy easily and securely.</span>
                    <img src={Visibilidade} alt="visibilidade" />
                </div>
            </div>
        </section>

    );
}

export default Section2;