import React, { useState, useEffect } from 'react';

const Timer = () => {
  const TOTAL_TIME = 24 * 60 * 60; // 24 hours in seconds
  const [timeLeft, setTimeLeft] = useState(TOTAL_TIME);

  useEffect(() => {
    // Check if an end time is already saved in localStorage
    const savedEndTime = localStorage.getItem('timerEndTime');

    if (savedEndTime) {
      const remainingTime = Math.floor((new Date(savedEndTime) - new Date()) / 1000);
      setTimeLeft(remainingTime > 0 ? remainingTime : 0);
    } else {
      // Calculate the end time and save it to localStorage
      const endTime = new Date(new Date().getTime() + TOTAL_TIME * 1000);
      localStorage.setItem('timerEndTime', endTime);
    }

    // Update the timer every second
    const interval = setInterval(() => {
      setTimeLeft((prevTime) => (prevTime > 0 ? prevTime - 1 : 0));
    }, 1000);

    return () => clearInterval(interval); // Cleanup interval on component unmount
  }, []);

  const formatTime = (seconds) => {
    const hrs = Math.floor(seconds / 3600);
    const mins = Math.floor((seconds % 3600) / 60);
    const secs = seconds % 60;
    return `${hrs.toString().padStart(2, '0')}:${mins.toString().padStart(2, '0')}:${secs.toString().padStart(2, '0')}`;
  };

  return (
    <div className="flex flex-col items-center justify-center h-12 bg-gray-600">
      <div className="text-4xl font-mono rounded shadow-md text-gray-800">
        {formatTime(timeLeft)}
      </div>
    </div>
  );
};

export default Timer;
