import React from 'react';
import homeart from './homeart.css';
import Card from '../card/Card';

const Homepage = () => {
    return (
        <div className='container'>
            <div className='center'>
                <div className='menuHeader'>
                    <div className='header'>
                        <div className='title'>
                                <div className='rouxTitle'>
                                    Roux
                                </div>
                                <div className="subTitle">
                                    Building awesome sites
                                </div>
                            </div>
                        <div className='welcome'>
                            Bem vindo, anonymous
                        </div> 
                    </div>
                    <div className='buttonsHeader'>
                    <div className='button'>
                        Cadastrar produto
                    </div>
                    <div className='button' style={{backgroundColor: '#EE4C4C'}}>
                        Sair
                    </div>
                </div>
                </div>
                <div className='searchSystem'>
                    <div className='shopping'>
                        Udyr Shop
                    </div>
                    <div className='searchMe'>
                        <input className='typeHere' type='text' placeholder='O que deseja buscar?'></input>
                        <div class='button'>
                            Pesquisar
                        </div>
                    </div>
                </div>
                <div>
                    <Card/>
                </div>
            </div>
        </div>
    )
}

export default Homepage;