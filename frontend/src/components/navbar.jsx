// src/components/Navbar.jsx
import React, { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu, X } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';



const Navbar = () => {
  
  return (
    <>
      <div className="fixed top-0 left-0 right-0 flex justify-center z-50">
        <div
          className="relative overflow-hidden w-full bg-white/5 backdrop-blur-md backdrop-saturate-150 px-6 py-3 shadow-none border-0"
          style={{
            WebkitMaskImage: 'linear-gradient(180deg, black 0%, black 98%, transparent 100%)',
            maskImage: 'linear-gradient(180deg, black 0%, black 98%, transparent 100%)',
          }}
        >
          <nav className="flex items-center justify-between text-white font-bold">
            <div>
              <h1 className="text-4xl">ERRACHDI AMINE</h1>
              <h3 className="ml-1 text-sm">Consider it done!</h3>
            </div>
          </nav>
        </div>
      </div>
    </>
  );
}
  


export default Navbar
