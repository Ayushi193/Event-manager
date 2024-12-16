import 'bootstrap/dist/css/bootstrap.min.css'
import Header from './Components/Header'
import Footer from './Components/Footer'

import { Outlet } from "react-router-dom"
import ProblemsPage from './Components/ProblemsPage'

function App() {
  

  return (
 
   <div className='w-full min-h-screen bg-slate-800'>
     
      <Header/>
      <main>
      <Outlet/>
      </main>
     <Footer/>

     {/* <ProblemsPage/> */}

    </div>
     
  
  )
}

export default App
