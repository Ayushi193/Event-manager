import React from 'react';
import { Github, Twitter, Linkedin } from "lucide-react"

function  Footer () {
    return (
      <footer className="relative overflow-hidden bg-gray-800  py-8">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row justify-between items-center">
          <div className="text-center md:text-left mb-4 md:mb-0">
            <h3 className="text-xl font-bold text-cyan-400">HackNova</h3>
            <p className="text-sm text-gray-400">© 2025 HackNova. All rights reserved.</p>
          </div>
          <div className="flex space-x-4">
            <a href="#" className="text-gray-400 hover:text-cyan-400 transition-colors">
              <Github className="w-6 h-6" />
            </a>
            <a href="#" className="text-gray-400 hover:text-cyan-400 transition-colors">
              <Twitter className="w-6 h-6" />
            </a>
            <a href="#" className="text-gray-400 hover:text-cyan-400 transition-colors">
              <Linkedin className="w-6 h-6" />
            </a>
          </div>
        </div>
      </div>
    </footer>
    )
}

export default Footer;