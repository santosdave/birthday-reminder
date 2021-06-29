import React, {useState} from 'react';
import {Button} from "@material-ui/core";

function Tour({id, image,info,name, price, removeTour}) {
    const [readMore, setReadMore]= useState();
    return (
        <article className="single-tour">
            <img src={image} alt={name}/>
            <footer>
                <div className="tour-info">
                    <h4>{name}</h4>
                    <h4 className="tour-price">Ksh {price}</h4>
                </div>
                <p>
                  {readMore ? info : `${info.substring(0, 200)}...`}
                    <Button className="">
                        {readMore ? 'show less' : '  read more'}
                    </Button>
                </p>
                <Button className="delete-btn" onClick={() => removeTour(id)}>not interested</Button>
            </footer>
            
        </article>
    )
}

export default Tour
