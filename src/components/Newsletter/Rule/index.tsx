import './global.css'

export default function Rule() {

    return (

        <div className='rule-container'>
            <div className="rule-column">
                <img src="/icons/icon-logo.png" alt="logo" />
                <p className='rule-text'>
                    <b>ENTREGA GRATUITA</b> A PARTIR DE R$99
                </p>
            </div>
            <div className="rule-column">
                <img src="/icons/icon-logo.png" alt="logo" />
                <p className='rule-text'>
                    <b>PARCELAMENTO</b> SEM JUROS
                </p>
            </div>
            <div className="rule-column">
                <img src="/icons/icon-logo.png" alt="logo" />
                <p className='rule-text'>
                    <b>CADASTRE-SE</b> E GANHE DESCONTO
                </p>
            </div>
        </div>


    )
}