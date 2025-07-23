import React, { useState, useEffect, useRef } from 'react';
import WorkExperience from './resume.jsx';
import Education from './Education.jsx';
import Hero from './Hero.jsx';
import About from './About.jsx';
import Projects from './Projects.jsx';
import ThemeToggleButton from './ThemeToggleButton.jsx';
import { motion } from "framer-motion";

const tabs = [
  { id: 'home', label: 'Home' },
  { id: 'about', label: 'About' },
  { id: 'projects', label: 'Projects' },
  { id: 'resume', label: 'Resume' },
  { id: 'contact', label: 'Contact' },
];



export default function NavbarTabs() {
  const [activeTab, setActiveTab] = useState('home');

  return (
    <div className="flex flex-col items-center ">

      <header className="items-center top-0 z-50">
        <div className="mt-1 px-4 py-6">
          <div className="inline-flex items-center justify-center gap-4 mx-auto block">

            <h3 className="justify-start">Paul Maxeiner</h3>

            {/* Tab Navigation */}
            <nav className="md:block">
              <ul
                className="flex rounded-full bg-white/90 px-4 py-2 text-sm font-medium text-zinc-800 shadow-lg ring-1 ring-zinc-900/5 dark:bg-zinc-800/90 dark:text-zinc-200 dark:ring-white/10"
                role="tablist"
              >
                {tabs.map((tab) => (
                  <li className="px-1" key={tab.id} role="presentation">
                    
                    <button
                      onClick={() => setActiveTab(tab.id)}
                      className={`relative block px-4 py-2 rounded-full transition ${activeTab === tab.id
                          ? "bg-zinc-200 dark:bg-zinc-700 text-zinc-900 dark:text-white"
                          : "text-gray-500 hover:text-blue-500 dark:hover:text-teal-400"
                        }`}
                      role="tab"
                    >
                      {tab.label}
                      
                    </button>
                  </li>
                ))}
              </ul>
            </nav>

            {/* Theme Toggle Button */}
            <ThemeToggleButton />
            
          </div>
        </div>
      </header>



      <div className="mt-4 p-4 rounded-lg ">
        {activeTab === 'home' && (
          <div>
            <Hero />
          </div>

        )}
        {activeTab === 'about' && (
          <div>
            <h2 className="text-xl font-semibold mb-2">About Me</h2>
            <p>This is the about section with a short bio or background info.</p>
            <About />
          </div>
        )}
        {activeTab === 'projects' && (
          <div>
            <h2 className="text-xl font-semibold mb-2">Projects</h2>
            <p>This is the about section with a short bio or background info.</p>
            <Projects />
          </div>
        )}
        {activeTab === 'resume' && (
          <div>
            <h2 className="text-3xl font-semibold mb-2">Resume</h2>
            <p>Click on any of my experiences to learn more!</p>
            <WorkExperience />
            <Education />
          </div>
        )}
        {activeTab === 'contact' && (
          <div>
            <h2 className="text-xl font-semibold mb-2">Contact</h2>
            <p>Show email, LinkedIn, or a contact form here.</p>
          <motion.div
            className="mt-4 p-6 rounded-lg bg-white shadow-md dark:bg-gray-800"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.3 }}
          ><h1>Hello!</h1></motion.div>

          </div>
        )}
      </div>
    </div>
  );
}
