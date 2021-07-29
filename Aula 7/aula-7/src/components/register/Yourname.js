import React from 'react';
import loginart from './loginart.css'

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
                <input type='text' autoComplete='false' id='name' className='loginInput'/>
                <label for ='name'>Insira seu nome</label>
            </div>
        </div>
    </div>
   )
}

export default Yourname;