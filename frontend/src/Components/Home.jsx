import React, { useEffect } from 'react';
import { useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import ProblemsPage from './ProblemsPage';

function  Home () {
  const navigate=useNavigate()
   useEffect(()=>{},[navigate])
    return (
      <div>
      Homa
     </div>
    )
}

export default Home;