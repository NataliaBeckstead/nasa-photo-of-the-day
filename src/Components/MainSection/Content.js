import React, { useState, useEffect } from "react";
import axios from "axios";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import styled from "styled-components";

const DayPhoto = styled.img `
  max-width: 100%;
  height: auto;
  border-radius: 12px;
  box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19);
`;

const PhotoCont  = styled.div `
  max-width: 100%;
  width: 80%;
`;

const Explanation = styled.p `
  width: 50%;
  margin: 2rem;
  justify-content: flex-start;
  text-align: left;
`;

const DateText = styled.h3 `
  font-size: 2.5rem;
  text-align: center;
  align-self: center;
`;

const DateContainer = styled.div`
  width: 50%;
  font-size: 2.5rem;
  text-align: center;
  align-self: center;
`;

const DateDescriptoion = styled.div `
  display: flex;
  justify-content: center;
  width: 80%;
  margin-bottom: 2rem;
`;

const MainContainer = styled.div `
  display: flex;
  flex-direction: column;
  align-items: center;
  width:100%;
  max-width: 100%;
  justify-content: center;
  margin-top: 2rem;
  margin-bottom: 4rem;
`;


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
        <MainContainer>
            <DateDescriptoion>
                <DateContainer>
                    <DateText>{useCalendar ? photo.date : newPhoto.date}</DateText>
                    <DatePicker 
                       selected={startDate}
                       onChange={handleDateChange}
                       placeholderText="choose a date" 
                    />
                    <p>Choose a day</p>
                </DateContainer>  
                <Explanation>{useCalendar ? photo.explanation : newPhoto.explanation}</Explanation>
            </DateDescriptoion>
            <PhotoCont>
                <DayPhoto src={useCalendar ? photo.hdurl : newPhoto.hdurl} alt="NASA photo of the day"/>
            </PhotoCont>
        </MainContainer>
    );
  }
  