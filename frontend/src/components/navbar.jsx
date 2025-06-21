// src/components/Navbar.jsx
import React, { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu, X } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';




const Navbar = () => {
  
  return (
    <>
    <div className='flex fixed font-bold text-white top-5 left-20 w-full max-h-screen'>
      <nav>
        <h1 className='text-4xl '>ERRACHDI AMINE</h1>
        <h3 className='ml-1'>Consider it done!</h3>
      </nav>
    </div>  
    
    </>
  );
}
  


export default Navbar