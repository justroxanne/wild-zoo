import React from 'react'
import './Animal.css'


function Animal({name, species, age, image}) {
    return (
        <div className='Animal'>
            <div className='animal-card'>
                <img className ='animal-img' src={image} alt={name} />
                <div className='animal-desc'>
                    <h3>{name}</h3>
                    <span>{species}</span>
                    <span>Âge: {age}</span>
                </div>
            </div>
        </div>
        
    )
}

export default Animal;
