import React from 'react';
import Section1 from './Sections/Section1';
import Section2 from './Sections/Section2';
import Section3 from './Sections/Section3';
import Section4 from './Sections/Section4';
import Section5 from './Sections/Section5';
import Section6 from './Sections/Section6';
import Section7 from './Sections/Section7';
import Section8 from './Sections/Section8'
function Content() {
    return (
        <div className="content_body">
            <Section1/>
            <Section2/>
            <Section3/>
            <Section4/>
            <Section5/>
            <Section6/>
            {/* <Section7/> */}
            {/* <Section8/> */}

            
        </div>
    )
}

export default Content
