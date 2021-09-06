import React from 'react'
import CardsItems from './CardsItems'
import './Cards.css';

function Cards() {
    return (
        <div className = 'cards'>
            <h1>Check out these services that are available!</h1>
            <div className="cards__container">
                <div className="cards__wrapper">
                    <ul className="cards__items">
                        <CardsItems
                        src="images"
                        />
                    </ul>
                </div>
            </div>
        </div>
    )
}

export default Cards
