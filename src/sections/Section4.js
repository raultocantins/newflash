import { React, useState } from 'react'
import ReactPlayer from 'react-player'
import './Style.css'
import Username from '../assets/username.png'
const Section4 = function () {
    const [open, setOpen] = useState(false)
    function OpenVideo() {
        setOpen(!open)
    }
    return (
        <section className="section4">
            {open ? <div className="video">
                <ReactPlayer url='https://www.youtu.be/OBAXqWDC0n8' />

            </div> : ""}
            <div className="box">
                <div className="described">
                    <span>
                        Como funciona a plataforma?
                    </span>
                    <span>
                        Quer você seja um artista independente, blogueiro, pequena empresa ou apenas um usuário regular do Instagram, Facebook, Youtube, a Flash Social é a sua melhor escolha de marketing em mídias sociais para conseguir o engajamento que você precisa.
                    </span>
                    <button onClick={OpenVideo}>
                        {open ? 'Fechar janela' : 'Saber mais'}
                    </button>
                </div>
                <div className="img">
                    <img src={Username} alt="username" />
                </div>

            </div>
        </section>

    );
}

export default Section4;