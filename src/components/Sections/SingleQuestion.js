import React, {useState}from 'react';
import RemoveIcon from '@material-ui/icons/Remove';
import AddIcon from '@material-ui/icons/Add';
import {Button} from '@material-ui/core';

function SingleQuestion({title, info}) {
    const [showInfo, setShowInfo]= useState(false);
    return (
        <article className="question">
            <header>
                <h4>{title}</h4>
                <Button className="btn" onClick={() => setShowInfo(!showInfo)}>
                    {showInfo ? <RemoveIcon/> : <AddIcon/>}
                </Button>
            </header>
            {showInfo && <p>{info}</p>}
            
        </article>
    )
}

export default SingleQuestion
