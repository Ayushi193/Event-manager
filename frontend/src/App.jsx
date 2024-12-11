import Login from "./Components/Login"
import 'bootstrap/dist/css/bootstrap.min.css'
<<<<<<< HEAD
import Header from './Components/Header'
import Footer from './Components/Footer'
import Signup from './Components/Signup'
import { Outlet } from "react-router-dom"
=======
import Signup from './Components/Signup'
>>>>>>> d901c78fd7156e89cc898c65e69a4cd8ceb9e8db
function App() {
  

  return (
<<<<<<< HEAD
 
   <div className='w-full min-h-screen bg-slate-800'>
     
      <Header/>
      <main>
     
      <Outlet/>
     
      </main>
     <Footer/>
     </div>  
   
 
=======
    <>
    <Login/>
    
     </>
>>>>>>> d901c78fd7156e89cc898c65e69a4cd8ceb9e8db
  )
}

export default App
