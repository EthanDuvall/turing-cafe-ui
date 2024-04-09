import React, { useEffect, useState } from "react";
import Card from "../Card/Card";
function Reservations({reservations}) {
  

  function displayCards() {
    return reservations.map((reservation) => {
      return (
        <Card
          name={reservation.name}
          date={reservation.date}
          time={reservation.time}
          number={reservation.number}
          id = {reservation.id}
        />
      );
    });
  }

  return <>{displayCards()}</>;
}

export default Reservations;
