import { Button } from '@/components/ui/button';
import service from '@/services/authService';
import axios from 'axios';
import {logout as authLogout} from "../store/authSlice"
import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';

function  Logout () {
    const dispatch=useDispatch()
    const navigate=useNavigate()
    const user=useSelector((state)=>state.auth.userData)

    const logout=async()=>{
    //     console.log(user.data.accessToken);
        
    //     const config={
    //         headers:{
    //             Authorization:`Bearer ${user.data.accessToken}`
    //         }
    //     }

    //     console.log(config);
        
    //     const res =await axios.post(`http://localhost:8000/api/v1/users/logout`,config)
    //     console.log(res);
        dispatch(authLogout())
        localStorage.removeItem("userData")
        navigate("/")
       
       
    }
    
    return (
      <div>
        <Button className="w-full mt-2 p-2" type="submit" onClick={logout} >Logout</Button>
        
     </div>
    )
}

export default Logout;