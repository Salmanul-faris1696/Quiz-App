import React from 'react';
import Confetti from 'react-confetti';
import { AiOutlineFileDone } from "react-icons/ai";
import { BsTrophyFill } from "react-icons/bs";
import { MdTimer } from "react-icons/md";
import { useNavigate } from 'react-router-dom';
import useWindowSize from 'react-use/lib/useWindowSize';


function Results({ correctAnswers,timeTaken }) {

     const { width, height } = useWindowSize()

     const nav = useNavigate()
     const handleDoneClick=()=>{
        nav('/')
     }
 

     


 

  return (
    <div className='mt-20 '> 
        <Confetti className='absolute' width={width} height={height}/>
        <div className='bg-black  rounded-lg   border-2 border-yellow-500  font-name w-[100%] p-2'>

            <div className='text-base md:text-3xl  text-center  text-yellow-500 flex justify-center items-center gap-3  '>
                <AiOutlineFileDone   className='text-yellow-500' size={25} />

                Questions completed !!
            </div>

            <div className=' text-white text-base md:text-2xl  mt-10 flex justify-center items-center gap-2'>

                <MdTimer className='text-yellow-500 ' size={25}  />

                You complete with in :
                <span className='text-blue-500'>

                 {`${Math.floor(timeTaken / 60).toString().padStart(2, '0')}:${(timeTaken % 60).toString().padStart(2, '0')}`}
                </span>

            </div>

            <div className=' text-white  mt-10  text-base md:text-2xl flex justify-center items-center gap-2'>
                 
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