import { Button } from '@material-ui/core';
import React, {useState} from 'react';
import removeBirthday from './Section1';
const List = ({ people }) => {
 
    
  return (
    <>
      {people.map((person) => {
        const { id, name, age, image } = person;
        return (
          <article key={id} className='person'>
              <div>
                <img src={image} alt={name} />
                <div>
                    <h4>{name}</h4>
                    <p>{age} years</p>
                </div>
              </div>
              <div>
                  <Button  className="btn" >Clear</Button>
              </div>
            
          </article>
        );
      })}
    </>
  );
};

export default List;
