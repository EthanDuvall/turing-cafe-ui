import "./App.css";
import { React, useEffect, useState } from "react";
import Form from "./Form/Form";
import Reservations from "./Reservations/Reservations";
import Card from "./Card/Card";
function App() {
  const [reservations, setReservations] = useState([]);

  useEffect(() => {
    fetch("http://localhost:3001/api/v1/reservations")
      .then((response) => {
        if (!response.ok) {
          throw new Error("Network response was not ok");
        }
        return response.json();
      })
      .then((data) => {
        setReservations(data);
      })
      .catch((error) => {
        console.error("Fetch error:", error);
      });
  }, []);

  function addReservation(name, date, time, number) {
    fetch("http://localhost:3001/api/v1/reservations", {
      method: "Post",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        name,
        date,
        time,
        number,
      }),
    }).catch((err) => {
      console.log(err);
    });
    setReservations([...reservations,{id:Date.now(),name, date,time,number}])
  }

  return (
    <div className="App">
      <h1 className="app-title">Turing Cafe Reservations</h1>
      <div className="resy-form">
        <Form addReservation={addReservation} />
      </div>
      <div className="resy-container">
        <Reservations reservations={reservations} />
      </div>
    </div>
  );
}

export default App;
