import React from 'react';
import { Instagram, Linkedin, Github, Phone } from 'lucide-react';
import { Link } from 'react-router-dom'
import { useState, useEffect } from 'react';
import axios from 'axios';


const Footer = () => {

  const API_URL = import.meta.env.VITE_API_URL;
  const [contactData, setContactData] = useState()
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    const FetshData = async () => {
      try {
        const response = await axios.get(`${API_URL}/contact`);
        setContactData(response.data);
      } catch (err) {
        console.log(err)
      } finally {
        setLoading(false)
      }
    }

    FetshData();

  }, [])




  return (
    <footer className="mt-auto w-full bg-black text-white px-8 py-10">
      <div className="max-w-screen-lg mx-auto flex flex-col space-y-6">
        {/* Name & Title */}
        <div>
          <h1 className="text-2xl font-bold">Amine</h1>
          <p className="text-sm text-gray-400">Web Developer</p>
        </div>

        {/* Extra Links */}
        <div className="flex flex-col space-y-1 pt-2 pl-1">
          <Link to="/upcoming" className="text-gray-300 hover:text-white">Upcoming Projects</Link>
        </div>

        {/* Social Icons */}
        <div className="flex flex-row-reverse gap-4 pt-2 pl-1">
          <a href="" target="_blank" rel="noopener noreferrer">
            <Instagram className="hover:text-pink-500" />
          </a>
          <a href="https://wa.me/0675806074" target="_blank" rel="noopener noreferrer">
            <Phone className="hover:text-green-500" />
          </a>
          <a href="https://www.linkedin.com/in/amine-errachdi-2a4341358" target="_blank" rel="noopener noreferrer">
            <Linkedin className="hover:text-blue-500" />
          </a>
          <a href="https://github.com/ErrachdiAmine" target="_blank" rel="noopener noreferrer">
            <Github className="hover:text-gray-400" />
          </a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
