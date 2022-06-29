import React from 'react';
import clock from './../images/icon-clock.svg'
import eye from './../images/icon-view.svg'

export default function Card(props){
    return(
        <div className='card'>
            <div className='card--top' >
                <img src={props.img} className='card--img'/>
                
            </div>
            <div className='overlay'>
                    <img src={eye}/>
                </div>
            <div className='card--info'>
                <h3 className='card--title'>{props.title} #{props.id}</h3>
                <p className='card--description'>{props.description}</p>
                <div className='card--pricedate'>
                    <div className='price'>
                        <img src={props.simbol}/>⠀{props.price} {props.coin}
                    </div>
                    <div className='date'>
                        <img src={clock}/> {props.time} left
                    </div>
                </div>
                <hr/>
            </div>
            <div className='card--footer'>
                <img src={props.authorimg} className='avatar'/>
                <p>⠀Creation of <a className='author'>{props.authorname}</a></p>
            </div>
        </div>
    )
}