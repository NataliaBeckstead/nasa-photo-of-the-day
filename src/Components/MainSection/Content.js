import React, { useState, useEffect } from "react";
import axios from "axios";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";

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


    const [startDate, setStartDate] = useState(new Date());
    const [useCalendar, setUseCalander] = useState(true);

    let handleDateChange = date => {
        setStartDate(date);
        setUseCalander(false);
    };

    let calanderDate =
        startDate.getFullYear() +
        "-" +
        (startDate.getMonth() + 1) +
        "-" +
        startDate.getDate();

    function CallNewContent(calendarDate) {
        const [newPhoto, setNewPhoto] = useState("");
        useEffect(() => {
            const getContent = () => {
            axios
                .get(`https://api.nasa.gov/planetary/apod?api_key=2CuqxZAJGsqU820I1TaRLIyaBYlhVaW4p9woRwx3&date=${calendarDate}`)
                .then(response => {
                    setNewPhoto(response.data);
                  })
                  .catch(error => {
                    console.log("the data was not return", error);
                  });
            };
            getContent();
            }, [calendarDate]);
            return newPhoto;
    }
    
    const newPhoto = CallNewContent(calanderDate);

    return (
        <div className="main-container">
            <div className="date-descriptoion">
                <div>
                    <h3>{useCalendar ? photo.date : newPhoto.date}</h3>
                    <DatePicker
                       selected={startDate}
                       onChange={handleDateChange}
                       placeholderText="choose a date" 
                    />
                </div>  
                <p className="explanation">{useCalendar ? photo.explanation : newPhoto.explanation}</p>
            </div>
            <div className="day-photocont">
                <img className="day-photo" src={useCalendar ? photo.hdurl : newPhoto.hdurl} alt="NASA photo of the day"/>
            </div>
        </div>
    );
  }
  