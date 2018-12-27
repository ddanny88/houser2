import React from 'react';
import './house.css';

export default function House(props) {
    return (
        <div className="house-container">
        <div>
            <img src={props.img} alt="Home pic"/>
        </div>
        <div>
            <p>Property Name: {props.name}</p>
            <p>Address: {props.address}</p>
            <p>City: {props.city}</p>
            <p>State: {props.state}</p>
            <p>Zip: {props.zip}</p>
            <p>Monthly Mortgage: {props.mortgage}</p>
            <p>Desired Rent: {props.rent}</p>
        </div>
            <button className="delete" onClick={() => props.deleteHome(props.id)}>Delete</button>
        </div>
    )
}


//note: when invoing the delete onClick, its important to make it an arrow function, otherwise the method will be invoked upon render and not when clicked. 