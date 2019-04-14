import React from 'react';
import './Heroe-card.scss';

const HeroeCard = ({heroe}) => {
    return (
        <article className="heroe">
            <div>
                {React.createElement("header", { style: { backgroundImage: `url(${heroe.thumbnail})`} })}
                <div>
                    <h3>{heroe.name}</h3>
                    <p>{heroe.description ? heroe.description : 'Description no available.'}</p>
                </div>
            </div>
        </article>
    )
}

export default HeroeCard;