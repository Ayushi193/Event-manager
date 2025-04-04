import React from 'react';
import { useSelector } from 'react-redux';
import Profile from './Profile';

const Modal = ({ isOpen, onClose, children }) => {
  const userData=useSelector((state)=>state.auth.userData)
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex justify-end items-start sm:m-2  mt-11 z-50">
      <div className="bg-yellow-100  rounded-lg shadow-lg   w-full max-w-md p-6 relative">
        {/* Close Button */}
        <button
          onClick={onClose}
          className="absolute top-3 right-3 text-gray-600 hover:text-gray-900"
        >
          ✕
        </button>
        
        {/* Modal Title */}
        <h2 className="text-lg text-center font-semibold text-gray-800 mb-4">{userData.data.user.fullName}</h2>
        
        <div className='p-2 rounded-full w-full flex flex-col gap-2 items-center justify-center '>
          <img
          className='h-20 w-20 rounded-full bg-cover'
          src={userData.data.user.avatar}
          />
           <div className='text-2xl text-pretty'>{userData.data.user.email}</div>
        </div>
       
        {/* Modal Content */}
        <div>{children}</div>
      </div>
    </div>
  );
};

export default Modal;
