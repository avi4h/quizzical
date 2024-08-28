import React from 'react'
import Start from './Start.jsx'
import Top from './Top.jsx'
import Quiz from './Quiz.jsx'
import End from './End.jsx'
import Modal from './Modal.jsx'
import { decode } from 'html-entities'
import { nanoid } from 'nanoid'
import './App.css'

export default function App() {
  const [justStarted, setJustStarted] = React.useState(true)
  const [questionsList, setQuestionsList] = React.useState([])
  const [checked, setChecked] = React.useState(false)
  const [score, setScore] = React.useState(0)
  const [loading, setLoading] = React.useState(false)
  const [currScore, setCurrScore] = React.useState(0)
  const [rounds, setRounds] = React.useState(0)

  const numSelected = justStarted ? 0 :
    !checked ? 0 :
    questionsList.reduce((acc, quest) => {
      const selected = quest.option1.hold || quest.option2.hold || quest.option3.hold || quest.option4.hold
      return selected ? acc + 1 : acc
    }, 0) 

  function startQuiz() {
    setJustStarted(false)
    createQuestionsList()
  }
  function checkClicked() {
    if(!checked){
      checkScore()
      setChecked(!checked)
    }
    else{
      setScore(0)
      setChecked(false)
      createQuestionsList()
    }
  }
  function checkScore(){
    const foundScore = questionsList.reduce((acc, quest) => {
      const correct = quest.option1.hold && quest.option1.correct || 
                      quest.option2.hold && quest.option2.correct || 
                      quest.option3.hold && quest.option3.correct || 
                      quest.option4.hold && quest.option4.correct
      return correct ? acc + 1 : acc
    }, 0)
    setScore(foundScore)
    setCurrScore(prevScore => prevScore+foundScore)
    setRounds(prevRounds => prevRounds+1)
  }
  function createQuestionsList(){
    setLoading(true)
    fetch(`https://opentdb.com/api.php?amount=5&type=multiple`)
      .then(response => response.json())
      .then(data => {
        const fetchedQuestions = data.results
        const questionList = fetchedQuestions.map((quest, index) => {
          const ans = [decode(quest.incorrect_answers[0]), decode(quest.incorrect_answers[1]), decode(quest.incorrect_answers[2]), decode(quest.correct_answer)]
          const ansObj = ans.map((a) => {
            return {
              text: a,
              hold: false,
              correct: a === decode(quest.correct_answer),
              opId: nanoid()
            }
          })
          const shuffledAnswers = ansObj.sort(() => Math.random() - 0.5)
          return {
            question: decode(quest.question),
            option1: shuffledAnswers[0],
            option2: shuffledAnswers[1],
            option3: shuffledAnswers[2],
            option4: shuffledAnswers[3],
            qId: nanoid(),
            num: index
          }
        })
        setQuestionsList(questionList)
        setLoading(false)
      })
      .catch(error => {
        console.error('Error fetching questions:', error)
        setLoading(false)
      })
  }
  function handleClick(qId, opId) {
    if( !checked ) {
      setQuestionsList(prevList =>
        prevList.map(quest => {
          if (quest.qId === qId) {
            return {
              ...quest,
              option1: { ...quest.option1, hold: quest.option1.opId === opId ? !quest.option1.hold : false },
              option2: { ...quest.option2, hold: quest.option2.opId === opId ? !quest.option2.hold : false },
              option3: { ...quest.option3, hold: quest.option3.opId === opId ? !quest.option3.hold : false },
              option4: { ...quest.option4, hold: quest.option4.opId === opId ? !quest.option4.hold : false },
            }
          }
          return quest
        })
      )
    }
  }
  return (
    <>
      { justStarted && <Start handleClick={startQuiz} /> }
      { !justStarted && !loading && <Top score={currScore} rounds={rounds} />}
      { !justStarted && !loading && <Quiz questions={questionsList} checked={checked} handleClick={handleClick} /> }
      { !justStarted && !loading && <End checked={checked} score={score} selected={numSelected} handleClick={checkClicked} />}
      { loading && <Modal /> } 
    </>
  )
}     
