import React, { useContext, useState } from 'react'
import {IoSearchSharp} from 'react-icons/io5'
import {BiMenuAltLeft}from 'react-icons/bi'
import {AiFillCloseCircle} from 'react-icons/ai'
import {TbMathSymbols} from 'react-icons/tb'
import{GoGraph} from 'react-icons/go'
import {SlChemistry} from 'react-icons/sl'
import {GiDna2} from 'react-icons/gi'
import GlobalContext from '../context/GlobalContext'
import { useNavigate } from 'react-router-dom'


function NavBar(id) {
    
 

  const [isSearchOpen, setIsSearchOpen] = useState(false);
  const [isDraweropen ,setIsDraweropen] = useState(false);
  // const [searchText, setSearchText] = useState('');
  const [searchSuggestions, setSearchSuggestions] = useState([]);

  const {searchText, setSearchText}  = useContext(GlobalContext)


  const subjects = [
    {
    id:1,
    sub:"Mathematics",
    style:" bg-green-500  shadow-green-500  ",
    icon:<TbMathSymbols/>
  },
  
  {
    id:2,
    sub:"Chemistry",
    style:" bg-yellow-500  shadow-yellow-500  ",
    icon:<SlChemistry/>,

  },
  {
    id:3,
    sub:"Biology",
    style:" bg-blue-500  shadow-blue-500  ",
    icon:<GiDna2/>

  },
]


  const toggleSearch = () => {
    setIsSearchOpen(!isSearchOpen);
  };

  const toggleDrawer = () => {
    setIsDraweropen(!isDraweropen);
  }

  const handleKeyDown = (event) => {
    if (event.key === 'Enter') {
      setIsSearchOpen(false);
      setSearchText(event.target.value);
      console.log('Search:', searchText);
    }
  };

  const handleInputChange = (event) => {
    const input = event.target.value;
    setSearchText(input);
    // const filteredSuggestions = searchData.filter((item) =>
    //   item.toLowerCase().includes(input.toLowerCase())
    // );
    // setSearchSuggestions(filteredSuggestions);
  };
   const nav = useNavigate()
    
      const navigateToSubject = (id) => {
            nav(`/quiz/${id}`)
      }

    

  return (

  

    <div>

        <div className='bg-gradient-to-t from-blue-700  to-blue-400 rounded-xl shadow-blue-500 text-black shadow-lg m-3 p-3 flex  justify-between gap-3 items-center'>

            <div className='font-name text-xl'>
               <span className='text-red-600'>Q</span>
               <span className='text-yellow-500'>u</span>
               <span className='text-green-400'>i</span>
               <span className='text-orange-500'>z</span>
               <span className='text-pink-700'>z</span>

                

            </div>

            <div className='flex gap-5 items-center'>

               <div className="flex items-center">
          {isSearchOpen ? (
            <input
              type="text"
              className="border rounded-md p-2"
              placeholder="Search..."
              value={searchText}
              onChange={handleInputChange}
              onKeyDown={handleKeyDown}
            />
          ) : (
            <div onClick={toggleSearch} className="flex items-center">
              <IoSearchSharp size={23} />
            </div>
          )}
          {/* Search suggestions */}
          {searchSuggestions.length > 0 && (
            <div className="absolute z-10 top-full left-0 bg-white w-full mt-1 rounded-md shadow-lg">
              {searchSuggestions.map((item, index) => (
                <div key={index} className="p-2 hover:bg-gray-200 cursor-pointer">
                  {item}
                </div>
              ))}
            </div>
          )}
        </div>

                <div className='z-10'>
                    {!isDraweropen && (
                        <div onClick={toggleDrawer}>
                            <BiMenuAltLeft size={23}/>
                        </div>

                    )}

                    {
                        isDraweropen && (
                            <div>
                                 <div className=" absolute inset-0 top-7 right-3 bg-opacity-75 flex place-items-start justify-end">
                                     <div className="bg-slate-200 p-4 rounded-md shadow-md">
                                        <div className="flex justify-end pb-3" onClick={toggleDrawer}>
                                        <AiFillCloseCircle size={20}/>
                                        </div>
                                        {subjects.map(({id,sub,style,icon}) =>(

                                        <div key={id}>   

                                        <div className={`rounded-md shadow-md ${style}  p-3 mb-3 hover:scale-105 duration-500   `}onClick={ () => navigateToSubject(id)}>
                                            <div className='font-semibold flex items-center gap-3 '>
                                                {icon}
                                              {sub}
                                            </div>
                                        </div>

                                        </div>
                                        ))}
                                    </div>
                                </div>

                            </div>
                        )
                    }
                   
                </div>
            </div>


 
        </div>

       

    </div>
  )
}

export default NavBar