import React from 'react';
import loginart from './loginart.css'
import Udyr from '../udyrLogin/Udyr';

const Yourname = () => {
   return (
    <div className='container'>
        <div className='loginComponents'>
            <div className='loginHere'>
                <div className='loginName'>
                    roux
                </div>
                <div className='loginSubTitle'>
                    Building awesome sites
                </div>
                <input type='text' autoComplete='false' id='name' className='loginInput' placeholder='Insira seu nome' maxLength='10' minLength='2'/>
                <div className='button'>
                    Entrar
                </div>

            </div>
            <Udyr></Udyr>
        </div>
    </div>
   )
}

export default Yourname;