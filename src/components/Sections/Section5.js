import React, {useState} from 'react';
import SingleQuestion from './SingleQuestion';
import data from './data3';
function Section5() {
    const [questions, setQuestions]= useState(data);
    return (
        <main>
            
            <div className="container">
                    <div className="title">
                        <h2>Feedback</h2>
                        <div className="underline"></div>
                    </div>
                <h3>Questions and Answers about Login</h3>
                <section className="info">
                    {questions.map((question) =>{
                        return (
                            <SingleQuestion key={question.id} {...question}/>
                        )
                    })}
                   
                </section>

            </div>
            
        </main>
    )
}

export default Section5
