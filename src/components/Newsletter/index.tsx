import './global.css'
import Form from './Form';
import Rule from './Rule';

export default function Newsletter() {

    return (

        <section className='newsletter'>
            <div className='container'>
                <Rule />

                <div className='newsletter-content'>
                    <h2>ASSINE NOSSA NEWSLETTER</h2>
                    <p>Cadastre-se para receber nossas novidades e descontos exclusivos!</p>
                    <Form />
                </div>
            </div>
        </section>

    )
}