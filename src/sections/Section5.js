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

const Section5 = function () {
    return (
        <section className="section5">
            <div className="box">
                <span>Porque a plataforma da Flashsocial?
                </span>
                <Accordion>
                    <AccordionItem>
                        <AccordionItemHeading>
                            <AccordionItemButton>
                                Entrega em instantes
                            </AccordionItemButton>
                        </AccordionItemHeading>
                        <AccordionItemPanel>
                            <p>
                                Nosso diferencial é a entrega instantânea da sua compra. Seu pedido é processado assim que liberar o pagamento do pacote. Receba suas interações no mesmo dia.
                            </p>
                        </AccordionItemPanel>
                    </AccordionItem>
                    <AccordionItem>
                        <AccordionItemHeading>
                            <AccordionItemButton>
                                Melhor preço do brasil
                            </AccordionItemButton>
                        </AccordionItemHeading>
                        <AccordionItemPanel>
                            <p>
                                Oferecemos apenas pacotes de interações de pessoas reais, como curtidas, comentários, visualizações, seguidores com os preços mais baixos do mercado. Além do mais, ajudamos você a aumentar o seu engajamento nas redes.
                            </p>
                        </AccordionItemPanel>
                    </AccordionItem>
                    <AccordionItem>
                        <AccordionItemHeading>
                            <AccordionItemButton>
                                Suporte 24 horas por dia
                            </AccordionItemButton>
                        </AccordionItemHeading>
                        <AccordionItemPanel>
                            <p>
                                Você pode ter certeza de que terá suporte 24 horas por dia após fazer o pedido na Flash Social. Entre em contato conosco a qualquer momento para obter atualizações sobre seu pedido ou resolver problemas ou dúvidas.
                            </p>
                        </AccordionItemPanel>
                    </AccordionItem>
                    <AccordionItem>
                        <AccordionItemHeading>
                            <AccordionItemButton>
                                Garantia de Reembolso
                            </AccordionItemButton>
                        </AccordionItemHeading>
                        <AccordionItemPanel>
                            <p>
                                Todos os pedidos feitos dentro da plataforma que não foram entregues no prazo ou que derem erro junto ao provedor de serviços, será cancelado e o saldo será reembolsado para sua conta dentro da plataforma.Você também pode cancelar a qualquer momento, que seu dinheiro será devolvido, sem problemas.
                            </p>
                        </AccordionItemPanel>
                    </AccordionItem>
                    <AccordionItem>
                        <AccordionItemHeading>
                            <AccordionItemButton>
                                Usuários Reais
                            </AccordionItemButton>
                        </AccordionItemHeading>
                        <AccordionItemPanel>
                            <p>
                                Criamos campanhas de aquisição nas redes sociais e YouTube, atingindo o público correto e trazendo usuários reais para o seu canal ou rede social.

                                Isso significa que o número de curtidas, comentários, visualizações, seguidores são de usuários reais.
                            </p>
                        </AccordionItemPanel>
                    </AccordionItem>
                </Accordion>
            </div>
        </section>

    );
}

export default Section5;