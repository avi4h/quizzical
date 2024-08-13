import React from 'react'
import Start from './Start.jsx'
import Quiz from './Quiz.jsx'
import End from './End.jsx'
import Modal from './Modal.jsx'
import { nanoid } from 'nanoid'
import './App.css'

export default function App() {
  const [justStarted, setJustStarted] = React.useState(true)
  const [questionsList, setQuestionsList] = React.useState([])
  const [checked, setChecked] = React.useState(false)
  const [score, setScore] = React.useState(0)
  const [loading, setLoading] = React.useState(false)

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
  }
  function createQuestionsList(){
    setLoading(true)
    fetch(`https://the-trivia-api.com/v2/questions/`)
      .then(response => response.json())
      .then(data => {
        const fetchedQuestions = data
        const questionList = fetchedQuestions.map((quest, index) => {
          const ans = [...quest.incorrectAnswers, quest.correctAnswer]
          const ansObj = ans.map((a) => {
            return {
              text: a,
              hold: false,
              correct: a === quest.correctAnswer,
              opId: nanoid()
            }
          })
          const shuffledAnswers = ansObj.sort(() => Math.random() - 0.5)
          return {
            question: quest.question.text,
            option1: shuffledAnswers[0],
            option2: shuffledAnswers[1],
            option3: shuffledAnswers[2],
            option4: shuffledAnswers[3],
            qId: quest.id,
            num: index
          }
        })
        setQuestionsList(questionList.slice(0, 5))
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
      { !justStarted && !loading && <Quiz questions={questionsList} checked={checked} handleClick={handleClick} /> }
      { !justStarted && !loading && <End checked={checked} score={score} selected={numSelected} handleClick={checkClicked} />}
      { loading && <Modal /> } 
    </>
  )
}
