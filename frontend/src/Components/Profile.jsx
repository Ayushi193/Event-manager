import React from 'react';
import {
    Avatar,
    AvatarFallback,
    AvatarImage,
  } from "@/components/ui/avatar"
import { useSelector } from 'react-redux';


function  Profile () {
  
  const userData=useSelector((state)=>state.auth.userData)
  
 // {userData.data.user.avatar}
    return (
    
      <Avatar>
      <AvatarImage  src="https://github.com/shadcn.png"  alt="@shadcn" />
      <AvatarFallback>CN</AvatarFallback>
      </Avatar>
     
    
    )
}

export default Profile;