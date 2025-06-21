import React from 'react';
import { motion } from 'framer-motion';
import { ArrowRight, Mail, Github, Linkedin } from 'lucide-react';
import ProProfile from '../assets/ProProfile.jpg';
import { Link } from 'react-router-dom';
import axios from 'axios';
import { useState, useEffect } from 'react';

export default function PortfolioPage() {

  const MotionLink = motion.create(Link);


  return (
    <div className="w-screen bg-gray-900 text-gray-100">
      {/* Hero Section */}
      <section className="w-screen flex flex-col-reverse md:flex-row items-center justify-between px-32 py-50">
        <div className="w-full md:w-1/2">
          <motion.h1
            className="text-4xl md:text-6xl font-extrabold mb-4"
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            Hi, I'm Amine
          </motion.h1>
          <motion.p
            className="text-lg md:text-xl mb-6 leading-relaxed text-gray-300"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.3 }}
          >
            I'm a Full-stack Developer specializing in creating delightful web experiences
            with React, Tailwind CSS, and Django.
          </motion.p>
          <div className="flex gap-4">
            <motion.a
              href="#projects"
              className="inline-flex items-center px-6 py-3 bg-blue-600 !text-black rounded-2xl shadow-md hover:bg-blue-700 font-bold"
              whileHover={{ scale: 1.05 }}
              transition={{ type: 'spring', stiffness: 300 }}
            >
              View Projects
              <ArrowRight className="ml-2" size={20} />
            </motion.a>
            <MotionLink
              className="inline-flex items-center px-6 py-3 border border-blue-600 text-blue rounded-2xl hover:bg-blue-800 hover:text-white"
              whileHover={{ scale: 1.05 }}
              transition={{ type: 'spring', stiffness: 300 }}
            >
              Contact Me
            </MotionLink>
          </div>
        </div>
        <motion.img
          src={ProProfile}
          alt="Profile"
          className="w-60 h-64 rounded-lg object-cover mb-8 md:mb-0
             shadow-[0_0_15px_rgba(0,255,255,0.7)]
             hover:shadow-[0_0_20px_rgba(0,255,255,0.9)]
             transition-shadow duration-300"
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.6 }}
        />
      </section>

      {/* Skills Section */}
      <section id="skills" className="w-screen px-8 py-16 bg-gray-800">
        <h2 className="text-3xl font-bold text-center mb-12">Tech Stack</h2>
        <div className="grid grid-cols-2 sm:grid-cols-4 gap-6 max-w-4xl mx-auto">
          {['React', 'Tailwind CSS', 'Django', 'Mysql', 'Docker', 'Git', 'JavaScript'].map((tech) => (
            <div
              key={tech}
              className="p-6 bg-gray-700 rounded-2xl flex items-center justify-center shadow-lg"
            >
              <span className="font-medium text-lg text-gray-100">{tech}</span>
            </div>
          ))}
        </div>
      </section>

      {/* Projects Section */}
      <section id="projects" className="w-screen px-8 py-16 bg-gray-900">
        <h2 className="text-3xl font-bold text-center mb-12">Featured Projects</h2>
        <div className="grid md:grid-cols-2 gap-8 max-w-5xl mx-auto">
          {/* Example project card */}
          {[
            {
              title: 'Blogs Platform: Genova',
              desc: 'A well-featured and powerful platform for blogs and issues discussions!',
              link: 'https://genova-sepia.vercel.app/'
            },
            {
              title: 'E-commerce Platform: ImpriStyle',
              desc: 'A frontend web application designed for print-on-demand services!',
              link: 'https://impristyle.vercel.app/'
            },
           
          ].map((project) => (
            <motion.div
              key={project.title}
              className="bg-gray-800 rounded-2xl shadow-lg p-6 flex flex-col hover:bg-gray-700"
              whileHover={{ translateY: -5 }}
              transition={{ type: 'spring', stiffness: 250 }}
            >
              <h3 className="text-2xl font-semibold mb-2 text-gray-100">{project.title}</h3>
              <p className="flex-1 mb-4 text-gray-400">{project.desc}</p>
              <a
                href={project.link}
                className="inline-flex items-center font-medium hover:underline text-blue mt-auto"
              >
                Visit Site
                <ArrowRight className="ml-2" size={16} />
              </a>
            </motion.div>
          ))}
        </div>
      </section>
    </div>
  );
}
