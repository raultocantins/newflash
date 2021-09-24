import React from 'react'
import './Style.css'
import {
    Accordion,
    AccordionItem,
    AccordionItemHeading,
    AccordionItemButton,
    AccordionItemPanel,
} from 'react-accessible-accordion';

// Demo styles, see 'Styles' section below for some notes on use.
import 'react-accessible-accordion/dist/fancy-example.css';

import Pag from '../assets/logo.jpg'
const Footer = function () {
    return (
        <section className="footer">
           
            <div className="box">
            <img src={Pag} alt="pag" />
                <Accordion>
                    <AccordionItem >
                        <AccordionItemHeading>
                            <AccordionItemButton>
                                Sobre nós
                            </AccordionItemButton>
                        </AccordionItemHeading>
                        <AccordionItemPanel>
                            <p>
                                Somos um grupo de especialistas e profissionais de marketing com muitos anos de experiência com plataformas de mídia social.
                                Se há uma coisa pela qual somos apaixonados, é ajudar as pessoas a chamar a atenção nas redes sociais. Estabelecemos e mantemos um relacionamento impecável com nossos clientes.
                                A Flash Social atende atualmente a mais de 6.000 clientes diariamente, incluindo muitos influenciadores famosos. Ainda não está convencido? Verifique nossa página de avaliações para ver o que nossos clientes estão dizendo sobre nós!
                            </p>
                        </AccordionItemPanel>
                    </AccordionItem>
                    <AccordionItem>
                        <AccordionItemHeading>
                            <AccordionItemButton>
                                Política de devolução de dinheiro
                            </AccordionItemButton>
                        </AccordionItemHeading>
                        <AccordionItemPanel>
                            <p>
                                Todos os pedidos feitos dentro da plataforma que não foram entregues no prazo ou que derem erro junto ao provedor de serviços, será cancelado e o saldo será reembolsado para sua conta dentro da plataforma.
                                Uma nova atualização de segurança foi feita para evitar atividades artificiais no Instagram, Facebook, Youtube, de acordo com a atualização recentemente lançada.
                            </p>
                        </AccordionItemPanel>
                    </AccordionItem>
                    <AccordionItem>
                        <AccordionItemHeading>
                            <AccordionItemButton>
                                Segurança
                            </AccordionItemButton>
                        </AccordionItemHeading>
                        <AccordionItemPanel>
                            <p>
                                Uma nova atualização de segurança foi feita para evitar atividades artificiais no Instagram, Facebook, Youtube, de acordo com a atualização recentemente lançada. Recebemos centenas de e-mails, se essa atualização teve algum impacto nos serviços da Flash Social.
                                Devemos afirmar com certeza que, a Flash Social , não está usando ferramentas artificiais ao fornecer esses serviços. Todos os serviços que vendemos na Flash Social são fornecidos por meio de pessoas reais de forma legal.
                            </p>
                        </AccordionItemPanel>
                    </AccordionItem>


                </Accordion>




                








            </div>

            <div className="card">

                <span><strong>Whatsapp</strong> +55 63 99243-2379    <strong>/Suporte</strong>  contato@flashsocial.com.br <strong>/Atendimento 24hrs</strong></span>
                <span>Copyright © 2021 Flash Social. Todos os Direitos Reservados. CNPJ 32.309.936/0001-95 GRLV AGENCIA DE PUBLICIDADE DIGITAL EIRELI</span>

            </div>
        </section>

    );
}

export default Footer;