import React from 'react';

function GithubCard(props) {
    return (
        <>
            <li className='cards__item__centered'>
                <a className='cards__item__link' href={props.path}>
                    <div className='cards__item__info'>
                    <p className='cards__item__text'>{props.text}</p>
                </div>
                </a> 
            </li>
        </>
    );
}

export default GithubCard;
