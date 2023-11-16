import React, { useContext, useEffect, useState } from 'react'
import { quizzes } from '../Data'
import Cards from '../components/Cards'
import GlobalContext from '../context/GlobalContext'


export default function QuizzeHome() {
    const {searchText}  = useContext(GlobalContext)
  const [quizData , setQizData] =useState(quizzes)
  const [seacrhResults,setSearchResults] = useState([])
  // console.log({searchText});
 useEffect(() => {
    setSearchResults(
      quizData.filter(
        (it) => it.name.toLowerCase().includes(searchText.toLowerCase())
      )
    );
  }, [searchText, quizData]);
  // console.log({seacrhResults});

  // setQizData((p) => p.filter())

  return (
    <div className='grid grid-cols-2'>
{
  seacrhResults.length > 0 ? seacrhResults.map(it => (

    <Cards id={it.id} img={it.img} title={it.name} questionns={it.questions.length} key={it.id}  subject={it.name.toLocaleLowerCase()}  />
  )):
    quizData.map(it => (
        <Cards id={it.id} img={it.img} title={it.name} questionns={it.questions.length} key={it.id}  subject={it.name.toLocaleLowerCase()}  />
    ))
}
    </div>
  )
}
