import './global.css'

export default function Form() {

    return (
        <form className='newsletter-form'>
            <input type="text" placeholder='Nome' className='input-name' />
            <input type="text" placeholder='E-mail' className='input-email' />

            <button type='submit'> <span>ENVIAR</span></button>
        </form>
    )
}