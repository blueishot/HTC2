import React, { useEffect, useState } from 'react';
import udyrArray from './udyrArray';
import udyrArt from './udyrArt.css'

const Udyr = () => {

    const [esconderUdyr, setEsconderUdyr] = useState('');
    const cadeUdyr = () => {
        esconderUdyr ? setEsconderUdyr(false) : setEsconderUdyr(true);
    }

    return (
        <div className='containerUdyr'>
            <div className='positionUdyr'>
            {udyrArray.udyrlist.map((item, index) => {
                return (
                    <div>
                        <div className='udyrAnimation'>
                            <img src={item.icon} width='100px' draggable='false' style={{margin:'10px'}} className='udyrIcones' onClick={cadeUdyr}/>
                            <div>
                                <img src={item.gif} draggable='false' className={esconderUdyr ? '' : 'udyrGifs'} />
                            </div>
                        </div>

                    </div>
                )
            })}
            </div>
        </div>
    )
}

export default Udyr;