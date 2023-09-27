import React from "react";
import '../index.css';
import componentsImage from '../assets/images/components.png';
import stateImage from '../assets/images/state.png';
import eventsImage from '../assets/images/events.png';

const Card = (props) => {
    return(
    <div id='concepts2'>
        <ul id="concepts">
            <li className="concept">
            <img src={componentsImage} alt={props.item[0].title} />
            <h2>{props.item[0].title}</h2>
            <p>{props.item[0].description}</p>
            </li>
        </ul>
        <ul id="concepts">
            <li className="concept">
            <img src={stateImage} alt={props.item[1].title} />
            <h2>{props.item[1].title}</h2>
            <p>{props.item[1].description}</p>
            </li>
        </ul>
        <ul id="concepts">
            <li className="concept">
            <img src={eventsImage} alt={props.item[2].title} />
            <h2>{props.item[2].title}</h2>
            <p>{props.item[2].description}</p>
            </li>
        </ul>
    </div>
    )
};

export default Card;