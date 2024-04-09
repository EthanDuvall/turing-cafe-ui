import React from "react";

function Card({name, date, time, number, id}){
    
    return(
        <div className="card" id = {id}>
            <h2>{name}</h2>
            <p>{date}</p>
            <p>{time}</p>
            <p>Number Of Guest: {number}</p>
            <button>Cancel</button>
        </div>
    )
}

export default Card