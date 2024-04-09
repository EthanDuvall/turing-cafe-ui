import React from "react";

function Form ({addReservation}){
    function handelSubmit(e){
        e.preventDefault()
        let input = e.target
       addReservation(input.name.value,input.date.value,input.time.value,input.number.value)
    }
    return(
        <>
            <form onSubmit={handelSubmit}>
                <input type = "text" placeholder="Name" name = "name"></input>
                <input type = "text" placeholder="Date (mm/dd)" name ="date"></input>
                <input type = "text" placeholder="Time" name = "time"></input>
                <input type = "number" placeholder="Number of Guests" name = "number"></input>
                <input type = "submit" value={"Make Reservation"}></input>
            </form>
        </>
    )


}



export default Form 