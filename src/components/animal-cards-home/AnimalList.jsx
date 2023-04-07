import React from 'react';
import Animal from './Animal';
import './AnimalList.css'

function AnimalList() {

    const lion = {
        name: 'Simba',
        species: 'Lion',
        age: 6,
        image: 'https://cdn.pixabay.com/photo/2015/09/22/14/34/lion-951778_1280.jpg'
    };

    const panda = {
        name: 'Bambou',
        species: 'Panda',
        age: 3,
        image: 'https://cdn.pixabay.com/photo/2013/11/20/23/02/panda-214260_1280.jpg'
    };

    const butterfly = {
        name: 'Yoni',
        species: 'Butterfly',
        age: 'unknown',
        image: 'https://cdn.pixabay.com/photo/2014/05/26/13/32/butterfly-354528_1280.jpg'
    };

    return (
        <div className='AnimalList'>
            <h2 className='section-title AnimalList-title'>Venez faire de belles rencontres !</h2>
            <div className='card-container'>
                <Animal {...lion}/>
                <Animal {...panda}/>
                <Animal {...butterfly}/>
            </div>
        </div>
    )
}

export default AnimalList;
