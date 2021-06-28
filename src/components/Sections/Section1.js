import React, {useState} from 'react';
import List from '../Sections/List';
import data from '../Sections/data';
import {Button} from "@material-ui/core";

function Section1() {
    const [people, setPeople]= useState(data)
    return (
        <main>
            <section className="container">
                <h3>{people.length} Birthdays Today</h3>
                <List people={people}/>
                <Button className="button"onClick={() => setPeople([])}>Clear All</Button>
            </section>
        </main>
    )
}

export default Section1
