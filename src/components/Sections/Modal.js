import React from 'react'
import {Button} from '@material-ui/core';
function Modal() {
    return (
        <div className="modal-content">
            <div className="title">
                <h2>congrats</h2>
                <div className="underline"></div>
                <p>
                    You have answered 20% of the questions correctly.
                </p>
                <Button className="close-btn"/*  onClick={closeModal} */>
                    Play Again
                </Button>
            </div>
        </div>
    )
}

export default Modal
