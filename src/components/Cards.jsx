import React from 'react'
import '../Data.js'
import {TbMathSymbols} from 'react-icons/tb'
import { SlChemistry } from 'react-icons/sl';
import { GiDna2 } from 'react-icons/gi';
import { useNavigate } from 'react-router-dom';

const subjectConfig = {
    math: {
       
      icon: <TbMathSymbols />,
      color: 'bg-green-500  shadow-green-500 hover:bg-green-700',
       style2:"bg-green-400",

    },
  
    chemistry: {
        
      icon: <SlChemistry />,
      color: ' bg-yellow-500  shadow-yellow-500 hover:bg-yellow-700',
       style2:"bg-yellow-400",

    },
    biology: {
      
      icon: <GiDna2 />,
      color: ' bg-red-500  shadow-red-500 hover:bg-red-700',
      style2:"bg-red-500",

    },
  };
  
  
  function Cards({id,img, title, questionns,subject}) {
      
      const nav = useNavigate()
    
      const handleClick = () => {
            nav(`/quiz/${id}`)
      }
    

  const { icon, color,style2 } = subjectConfig[subject] || {};

  return (
    <div >
        <div className='flex  gap-3 m-3 mt-10 md:grid md:mt-20 ' >

            <div onClick={handleClick} className={` relative w-[200px]  h-[180px]   rounded-md text-black ${color}  hover:text-white font-semibold hover:scale-105 duration-500 shadow-md md:w-[400px] md:h-[500px] md:m-auto lg:w-[600px] `}>
                <div className=''>
                <img  className="w-100 rounded-md " src={img} alt="" />

                </div>


                <div className='flex justify-end absolute top-2 right-3'>

                    <div className={`flex ${style2} rounded-full w-10 h-10 items-center justify-center p-3`}>

                        { icon }

                    </div>

                </div>
                <div className=' grid font-bold m-3  md:h-[100px] md:m-3 md:text-4xl ' >

                    <p>
                        {title}
                    </p>
                <div className=''>
                    <p>
                        {questionns} questions
                    </p>
                </div>

                </div>


            </div>

        </div>

    </div>
  )
}

export default Cards