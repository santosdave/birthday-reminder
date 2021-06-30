import React from 'react';
import{Button} from "@material-ui/core";
import SingleColor from './SingleColor';
function Section7() {
    return (
        <>
            <section className="section">
                <div className="title">
                    <h3>color generator</h3>
                    <div className="underline"></div>
                </div>
                <form>
                <input type="text" placeholder="#f15025"></input>
                <Button className="btn" type="submit">Submit</Button>
                </form>
                
            </section>
            <section className="colors">
                <SingleColor/>
            </section>
        </>
    )
}

export default Section7
