import React from 'react';
import {Button} from "@material-ui/core";
function SetupForm() {
    return (
        <main>
            <section className="quiz quiz-small">
                <form className="form"> 
                    <h2>Setup Quiz</h2>
                    {/* Amount */}
                    <div className="form-control">
                        <label htmlFor="amount">Number of questions</label>
                        <input 
                        type="number"
                        name="amount"
                        id="amount"
                        placeholder="Number"
                        className="form-input"
                        min={1}
                        max={50}
                        >

                        </input>
                    </div>
                    {/* Category */}
                    <div className="form-control">
                        <label htmlFor="category">Number of questions</label>
                        <select
                        name="category"
                        id="category"
                        className="form-input"
                        min={1}
                        max={50}
                        >
                            <option value="sports">Sports</option>
                            <option value="history">History</option>
                            <option value="politics">Politics</option>

                        </select>
                    </div>
                    {/* Difficulty */}
                    <div className="form-control">
                        <label htmlFor="difficulty">Difficulty Level</label>
                        <select
                        name="difficulty"
                        id="difficulty"
                        className="form-input"
                        min={1}
                        max={50}
                        >
                            <option value="easy">Easy</option>
                            <option value="medium">Medium</option>
                            <option value="hard">Hard</option>

                        </select>
                    </div>
                    <p className="error">
                        can't generate questions, please try different options.
                    </p>
                    <Button className="submit-btn" type="submit">Start</Button>
                </form>

            </section>
            
        </main>
    )
}

export default SetupForm
