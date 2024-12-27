import React, { useState } from 'react';
import Profile from './Profile';
import Modal from './Modal';
import Logout from './Logout';

function  ProfileModa () {
    const [isModalOpen, setIsModalOpen] = useState(false);

    const openModal = () => setIsModalOpen(true);
    const closeModal = () => setIsModalOpen(false);
  
    return (
      <div className="flex justify-center items-center ">
        
        <button
          onClick={openModal}
          
        >
         <Profile/>
        </button>
  
        {/* Modal Component */}
        <Modal isOpen={isModalOpen} onClose={closeModal} >
         
          <Logout/>
        </Modal>
      </div>
    
    )
}

export default ProfileModa;