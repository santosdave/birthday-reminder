import React,{useState, useEffect,useContext} from 'react';
import axios from 'axios';
const table={
    sports:21,
    history:23,
    politics:24,
}
const API_ENDPOINT = 'https://opentdb.com/api.php?'
const url =""
const tempUrl='https://opentdb.com/api.php?amount=10&category=21&difficulty=easy&type=multiple'
const AppContext=React.createContext()
const AppProvider=({children})=> {
  const [waiting, setWaiting] = useState(true)
  const [loading, setLoading] = useState(false)
  const [questions, setQuestions] = useState([])
  const [index, setIndex] = useState(0)
  const [correct, setCorrect] = useState(0)
  const [error, setError] = useState(false)
  const [quiz, setQuiz] = useState({
    amount: 10,
    category: 'sports',
    difficulty: 'easy',
  })
  const [isModalOpen, setIsModalOpen] = useState(false)
  const fetchQuestions= async(url)=>{
      setLoading=(true)
      setWaiting=(false)
      const response=await axios(url).catch((err) =>console.log(err))
      if(response) {
          const data=response.data.results
          if(data.length > 0) {
              setQuestions(data)
              setLoading(false)
              setWaiting(false)
              setError(false)
          }else{
              setWaitings(true)
              setError(true)
          }
      }else{
          setWaiting(true)
      }
  }
  const nextQuestion =()=>{
      setIndex(oldIndex)=>{
          
      }
  }
}



export const useGlobalContext = () => {
    return useContext(AppContext)
  }
export default {AppContext, AppProvider};
