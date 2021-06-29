import React, { useState } from 'react';
import people from './data2';
import ChevronLeftIcon from '@material-ui/icons/ChevronLeft';
import ChevronRightIcon from '@material-ui/icons/ChevronRight';
import FormatQuoteIcon from '@material-ui/icons/FormatQuote';
import {Button} from '@material-ui/core';
function Review() {
    const [index, setIndex]= useState(0);
    const { name, job, image, text } = people[index];
    const checkNumber=(number) =>{
        if (number > people.length - 1) {
            return 0;
          }
          if (number < 0) {
            return people.length - 1;
          }
          return number;
        };
        const nextPerson = () => {
            setIndex((index) => {
              let newIndex = index + 1;
              return checkNumber(newIndex);
            });
          };
          const prevPerson = () => {
            setIndex((index) => {
              let newIndex = index - 1;
              return checkNumber(newIndex);
            });
          };
          const randomPerson = () => {
            let randomNumber = Math.floor(Math.random() * people.length);
            if (randomNumber === index) {
              randomNumber = index + 1;
            }
            setIndex(checkNumber(randomNumber));
          };
    return (
        <article className="review">
            <div className="image_Container">
                <img src={image} alt={name}  className="person-img"/>
                <span className="quote-icon">
                    <FormatQuoteIcon/>
                </span>
            </div>
            <h4 className="author">{name}</h4>
            <p className="job"> {job}</p>
            <p className="info">{text}</p>
            <div className="button-container">
                <Button  className="prev-btn" onClick={prevPerson}>
                    <ChevronLeftIcon/>
                </Button>
                <Button  className="next-btn" onClick={nextPerson}>
                    <ChevronRightIcon/>
                </Button>
            </div>
            <Button className="random-btn" onClick={randomPerson}>
                Suprise Me
            </Button>
            
        </article>
    )
}

export default Review
