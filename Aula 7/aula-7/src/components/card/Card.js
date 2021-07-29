import React from 'react';
import cardart from './cardart.css';
import cardArray from './cardArray';

const Card = () => {
    return (
        <div className='containerCard'>
                {cardArray.cardData.map((item, index) => {
                    return (
                    <div className='bodyCard'>
                        <div className="imgBox">
                            <img src={item.img} draggable='false' className="udyrImg" />
                        </div>
                        <div className='informations'>
                            <span>{item.title}</span>
                            <span>{item.price}</span>
                        </div>
                        <div className='buyButton'>
                            Comprar
                        </div>
                    </div>
                    )
                })}

        </div>
    )
}

export default Card;

