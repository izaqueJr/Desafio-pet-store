import './global.css'

export default function Footer() {

    return (
        <footer>
            <section className='footer-row footer-row--1'>
                <div className='footer-container container'>

                    <div className='footer-column'>
                        <div className='footer-logo'>
                            <img src="/icons/logo.png" alt="Pet Store" />
                        </div>

                        <div className='footer-social-links'>
                            <a href="#">
                                <img src=" /social/facebook.png" alt="facebook" />
                            </a>
                            <a href="#">
                                <img src=" /social/insta.png" alt="instagram" />
                            </a>
                            <a href="#">
                                <img src=" /social/twitter.png" alt="twitter" />
                            </a>
                        </div>

                        <div className='footer-copyright'>
                            <p>© 2019  •  CNPJ 00.000.000/0000-00 <br /> Rua Tal de Tal, 123 - Cidade</p>
                        </div>
                    </div>

                    <div className='footer-column footer-column--menu' >
                        <h3 className='footer-column--title'>Pet Store </h3>
                        <a href="#">Quem somos</a>
                        <a href="#">Como Comprar</a>
                        <a href="#">Trocas e Devoluções</a>
                        <a href="#">Frete e Entregas</a>
                    </div>

                    <div className='footer-column footer-column--menu'>

                        <h3 className='footer-column--title'>Contato</h3>
                        <p>(99) 9999-9999</p>
                        <p>(99) 9999-9999</p>
                        <p>petstore@petstore.com.br</p>

                    </div>

                    <div className='footer-column footer-column--menu'>
                        <h3 className='footer-column--title'>Pagamentos</h3>
                        <div className='footer-column--payments'>

                            <img src=" /pagamentos/american.png" alt="american" />
                            <img src=" /pagamentos/aura.png" alt="aura" />
                            <img src=" /pagamentos/boleto.png" alt="boleto" />
                            <img src=" /pagamentos/dinersclub.png" alt="dinersclub" />
                            <img src=" /pagamentos/elo.png" alt="elo" />
                            <img src=" /pagamentos/hipercard.png" alt="hipercard" />
                            <img src=" /pagamentos/mastercard.png" alt="mastercard" />
                            <img src=" /pagamentos/visa.png" alt="visa" />

                        </div>
                    </div>
                </div>
            </section>

            <section className='footer-row footer-row--2'>
                <div className='footer-container container'>
                    <p>tecnologia e desenvolvimento:</p>
                    <img src="/icons/serie.png" alt="Seri.e Design" />
                </div>
            </section>
        </footer>

    )
}