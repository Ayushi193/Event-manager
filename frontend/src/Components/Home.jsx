import React, { useEffect } from 'react';
import { Code, Zap, Users } from "lucide-react"
import { Button } from "@/components/ui/button"


function  Home () {
 
  const userData=JSON.parse(localStorage.getItem("userData"))

const features = [
  {
    icon: <Code className="w-12 h-12 text-cyan-400" />,
    title: "Cutting-edge Challenges",
    description: "Tackle real-world problems with the latest technologies",
  },
  {
    icon: <Zap className="w-12 h-12 text-purple-400" />,
    title: "Amazing Prizes",
    description: "Win big with our generous prize pool and sponsor awards",
  },
  {
    icon: <Users className="w-12 h-12 text-blue-400" />,
    title: "Networking Opportunities",
    description: "Connect with industry professionals and like-minded peers",
  },
]
  
  

    return (
      <div>
         <section className="py-20 bg-gradient-to-b from-gray-900 to-gray-800">
      <div className="container mx-auto px-4 text-center">
        <h1 className="text-5xl md:text-6xl font-bold mb-6 animate-fade-in-up">
          Welcome to <span className="text-cyan-400">HackNova</span>
        </h1>
        <p className="text-xl md:text-2xl mb-8 animate-fade-in-up animation-delay-200">
          Join us for 48 hours of coding, creativity, and innovation
        </p>
        <Button className="bg-purple-600 hover:bg-purple-700 text-white font-bold py-3 px-6 rounded-full text-lg animate-fade-in-up animation-delay-400">
          Register Now
        </Button>
      </div>
    </section>
     
     <section className="py-20 bg-gray-800">
      <div className="container mx-auto px-4">
        <h2 className="text-4xl font-bold mb-12 text-center">Why Join HackNova?</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <div
              key={index}
              className="bg-gray-700 p-6 rounded-lg shadow-lg hover:shadow-xl transition-shadow duration-300"
            >
              <div className="flex justify-center mb-4">{feature.icon}</div>
              <h3 className="text-xl font-semibold mb-2 text-center">{feature.title}</h3>
              <p className="text-gray-300 text-center">{feature.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
       
     </div>
    )
}

export default Home;