import React from 'react';
import Modal from './Modal';
import SetupForm from './SetupForm';
import {Button} from "@material-ui/core";
function Section8() {
    return (
        <>
            <SetupForm/>
            <Modal/>  
            <section className="quiz">
                <p className="correct-answers">
                    correct answers:8/13
                </p>
                <article className="">
                    <h2>Question</h2>
                   {/*  <h2 dangerouslySetInnerHTML={{__html:question }}></h2> */}
                   <div className="btn-container">
                        <Button className="answer-btn">
                            correct answer
                        </Button>
                   </div>
                </article>
                <div className="btn-container">
                    <Button className="next-question">
                                Next Question
                    </Button>
                </div>
               
            </section> 
        </>
    )
}

export default Section8
