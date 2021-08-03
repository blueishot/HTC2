import react from 'react';
import style from  '../components/style.css'

const Jokenpo = () => {
    return (
    <div className='container'>
        <div className='header'>
            <div className='playerWinner'>
                Jogadora 1 ganhou!
            </div>
            <div className='playersSystem'>
                <div className='players'>
                    Jogadora 1
                </div>
                <div className='playerPoints'>
                    01
                </div>
                <div className='playerVS'>
                    VS
                </div>
                <div className='playerPoints'>
                    01
                </div>
                <div className='players'>
                    Jogadora 1
                </div>
            </div>
        </div>
        <div className='theGame'>
            <div className='playerButtons'>
                <div className='button'>
                    Pedra
                </div>
                <div className='button'>
                    Papel
                </div>
                <div className='button'>
                    Tesoura
                </div>
            </div>
            <div className='arena'>
                <div className='whiteSpace'>

                </div>
                <div className='playerVS' style={{fontSize:'104px'}}>
                    VS
                </div>
                <div className='whiteSpace'>

                </div>
            </div>
            <div className='playerButtons'>
                <div className='button'>
                    Pedra
                </div>
                <div className='button'>
                    Papel
                </div>
                <div className='button'>
                    Tesoura
                </div>
            </div>
        </div>
        <div className='playerButtons' style={{flexDirection:'row', height: 'fit-content', marginTop: '10px'}} >
                <div className='button'>
                    Iniciar
                </div>
                <div className='button'>
                    Resetar
                </div>
            </div>
    </div>
    )
}


export default Jokenpo;