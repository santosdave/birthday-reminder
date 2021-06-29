import React, {useState,useEffect} from 'react';
import {Button} from "@material-ui/core";
import Loading from './Loading';
import Tours from './Tours';
const url = 'https://course-api.com/react-tours-project'
function Section4() {
    const [loading, setLoading] =useState(true);
    const [tours, setTours] =useState([]);
    const removeTour=(id)=>{
        const newTours=tours.filter((tour)=>tour.id !== id)
        setTours(newTours)
    }
    const fetchTours= async ()=>{
        setLoading(true)
        try{
            const response = await fetch(url)
            const tours= await response.json()
            setLoading(false)
            setTours(tours)
        } catch (error){
            setLoading(false)
            console.log(error)
        }
    }
    useEffect(() =>{
        fetchTours()
    },[])
    if(loading){
        return(
            <main className="main">
                <Loading/>
            </main>
        )
    }
    if(tours.length===0){
        return(
            <main className="main">
                <div className="title">
                    <h2>No tours left</h2>
                    <Button className='btn' onClick={() => fetchTours()}> refresh</Button>
                </div>
            </main>
        )
    }
    return (
        <main className="main">
            <Tours tours={tours} removeTour={removeTour}/>
        </main>
    )
}

export default Section4
