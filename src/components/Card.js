import React from "react";
import '../index.css';


const Card = (props) => {
    return(
    <div>
        <ul id="concepts">
            <li className="concept">
            <img src={props.item[0].image} alt={props.item[0].title} />
            <h2>{props.item[0].title}</h2>
            <p>{props.item[0].description}</p>
            </li>
        
            <li className="concept">
            <img src={props.item[1].image} alt={props.item[1].title} />
            <h2>{props.item[1].title}</h2>
            <p>{props.item[1].description}</p>
            </li>
        
            <li className="concept">
            <img src={props.item[2].image} alt={props.item[2].title} />
            <h2>{props.item[2].title}</h2>
            <p>{props.item[2].description}</p>
            </li>
        </ul>
    </div>
    )
};

export default Card;