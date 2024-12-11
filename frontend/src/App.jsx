import Login from "./Components/Login"
import 'bootstrap/dist/css/bootstrap.min.css'
import Header from './Components/Header'
import Footer from './Components/Footer'
import Signup from './Components/Signup'
import { Outlet } from "react-router-dom"
function App() {
  

  return (
 
   <div className='w-full min-h-screen bg-slate-800'>
     
      <Header/>
      <main>
     
      <Outlet/>
     
      </main>
     <Footer/>
     </div>  
   
 
  )
}

export default App
