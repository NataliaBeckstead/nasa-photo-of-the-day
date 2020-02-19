import React, { useState, useEffect } from "react";
import axios from "axios";

export default function Photo() {
    const [photo, setPhoto] = useState([]);
  
    useEffect(() => {
      axios
        .get(`https://api.nasa.gov/planetary/apod?api_key=2CuqxZAJGsqU820I1TaRLIyaBYlhVaW4p9woRwx3`)
        .then(response => {
          setPhoto(response.data);
        })
        .catch(error => {
          console.log("the data was not return", error);
        });
    }, []);
    return (
        <div className="main-container">
            <div className="date-descriptoion">
                <h3>{photo.date}</h3><p className="explanation">{photo.explanation}</p>
            </div>
            <div className="day-photocont">
                <img className="day-photo" src={photo.hdurl} alt="NASA photo of the day"/>
            </div>
        </div>
    );
  }
  