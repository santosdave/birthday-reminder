import React, {useState, useEffect} from 'react';
import {Button} from "@material-ui/core";
import ChevronRightRoundedIcon from '@material-ui/icons/ChevronRightRounded';
const url='https://course-api.com/react-tabs-project';
function Section6() {
    const [loading, setLoading]= useState(true);
    const [jobs, setJobs]= useState([]);
    const [value, setValue]=useState(0);

    const fetchJobs= async ()=>{
        const response= await fetch(url);
        const newJobs = await response.json();
        setJobs(newJobs)
        setLoading(false)
    }
    useEffect(()=>{
        fetchJobs()
    },[])
    if(loading){
        return(
            <section className="section loading">
                <h1>Loading...</h1>
            </section>
        )
    }
    const {company,dates,duties,title} = jobs[value];
    return (
        <section className="section">
            <div className="title">
                <h2>Experience</h2>
                <div className="underline"></div>
            </div>
            <div className="jobs-center">
                    <div className="btn-container">
                        {jobs.map((job,index) =>{
                            return (
                                <Button
                                className={`job-btn ${index === value && 'active-btn1'}`}
                                key={job.id}
                                onClick={()=>setValue(index)}
                                >{job.company}</Button>
                            )
                        })}
                       
                    </div>
                
                <article className="job-info">
                    <h3>{title}</h3>
                    <h4>{company}</h4>
                    <p className="job-dates">{dates}</p>
                    
                        {duties.map((duty,index)=>{
                            return (
                                <div key={index}className="job-desc">
                                    <ChevronRightRoundedIcon className="job-icon"></ChevronRightRoundedIcon>
                                    <p>{duty}</p>
                                </div>
                            )
                        })}
                    <div>
                        <Button className="btn1"> More Info</Button>
                    </div>  
                </article>
                
            </div>
           
        </section>
    )
}

export default Section6
