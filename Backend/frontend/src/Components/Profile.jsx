import React, { useEffect } from 'react';
import {
    Avatar,
    AvatarFallback,
    AvatarImage,
  } from "@/components/ui/avatar"
import { useSelector } from 'react-redux';


function  Profile () {
  
  const userData=useSelector((state)=>state.auth.userData)
  useEffect(()=>{
    console.log(userData);
    
  },[])
  
 // {userData.data.user.avatar}
    return (
    
      <Avatar>
      <AvatarImage  src={userData.data.user.avatar}  alt="@shadcn" />
      <AvatarFallback>CN</AvatarFallback>
      </Avatar>
     
    
    )
}

export default Profile;