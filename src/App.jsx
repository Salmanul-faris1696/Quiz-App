import { useState } from 'react'
import { Outlet } from 'react-router-dom'
import './App.css'
import NavBar from './components/NavBar'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>

    <div className='bg-slate-300 rounded-xl shadow-gray-500 shadow-lg text-red-600 m-2 p-2'>
  <header>
   <NavBar/>
  </header>

    <main>
      <Outlet />
    </main>
    </div>
 </>
   
  )
}

export default App
