import React from 'react'
import { BsTrophyFill } from "react-icons/bs";
import { MdTimer } from "react-icons/md";
import { AiOutlineFileDone } from "react-icons/ai";
import useWindowSize from 'react-use/lib/useWindowSize'
import Confetti from 'react-confetti'
import { useNavigate } from 'react-router-dom';


function Results({ correctAnswers,timeTaken }) {

     const { width, height } = useWindowSize()

     const nav = useNavigate()
     const handleDoneClick=()=>{
        nav('/')
     }
 

     


 

  return (
    <div className='mt-20'> 
        <Confetti width={width} height={height}/>
        <div className='bg-black p-5 rounded-lg   border-2 border-yellow-500  font-name w-[400px] mx-auto'>

            <div className='text-3xl  text-center  text-yellow-500 flex justify-center items-center gap-3  '>
                <AiOutlineFileDone   className='text-yellow-500' size={25} />

                Questions completed !!
            </div>

            <div className=' text-white  mt-10 text-2xl flex justify-center items-center gap-2'>

                <MdTimer className='text-yellow-500' size={25}  />

                You complete with in :
                <span className='text-blue-500'>

                 {`${Math.floor(timeTaken / 60).toString().padStart(2, '0')}:${(timeTaken % 60).toString().padStart(2, '0')}`}
                </span>

            </div>

            <div className=' text-white  mt-10  text-2xl flex justify-center items-center gap-2'>
                 
                <BsTrophyFill className='text-yellow-500' size={25} />
                 Your scored : <span className='text-blue-500'>{correctAnswers} </span>

                

            </div>

            <div className='mt-10 flex justify-center'>

                <button className='bg-green-500 p-4  rounded-lg   'onClick={handleDoneClick}>
                    Done
                </button>

                
            </div>


        </div>
        
    </div>
  )
}

export default Results