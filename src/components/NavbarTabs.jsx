import React, { useState, useEffect, useRef } from 'react';
import WorkExperience from './resume.jsx';
import Education from './Education.jsx';
import Hero from './Hero.jsx';
import About from './About.jsx';
import Projects from './Projects.jsx';
import {
  Accordion,
  AccordionItem,
  AccordionTrigger,
  AccordionContent,
} from '../../components/motion-primitives/accordion.tsx'
import {TextEffect} from '../../components/motion-primitives/text-effect.tsx';

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
    <div className="flex flex-col items-center">

      <header className="items-center top-0 z-50">
        <div className="mt-1 px-4 py-6">
          <div className="inline-flex items-center justify-center gap-4 mx-auto block">
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
            <button
              type="button"
              aria-label="Switch theme"
              className="group rounded-full bg-white/90 px-3 py-2 shadow-lg ring-1 ring-zinc-900/5 backdrop-blur-sm transition dark:bg-zinc-800/90 dark:ring-white/10 dark:hover:ring-white/20"
            >
              <svg
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="1.5"
                strokeLinecap="round"
                strokeLinejoin="round"
                className="h-6 w-6 stroke-zinc-500 dark:hidden group-hover:stroke-zinc-700"
              >
                <circle cx="12" cy="12" r="4" />
                <path d="M12 3v1.5M12 19.5V21M4.22 4.22l1.06 1.06M18.72 18.72l1.06 1.06M1.5 12H3M21 12h1.5M4.22 19.78l1.06-1.06M18.72 5.28l1.06-1.06" />
              </svg>
              <svg
                viewBox="0 0 24 24"
                fill="currentColor"
                className="hidden h-6 w-6 text-zinc-700 dark:block group-hover:text-zinc-400"
              >
                <path d="M17.25 16.22a6.937 6.937 0 0 1-9.47-9.47 7.451 7.451 0 1 0 9.47 9.47ZM12.75 7C17 7 17 2.75 17 2.75S17 7 21.25 7C17 7 17 11.25 17 11.25S17 7 12.75 7Z" />
              </svg>
            </button>
          </div>
        </div>
      </header>



      <div className="mt-4 p-4 rounded-lg">
        {activeTab === 'home' && (
          <div>
            <Hero />
          </div>

        )}
        {activeTab === 'about' && (
          <div>
            <h2 className="text-xl font-semibold">About Me</h2>
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
            <h2 className="text-xl font-semibold mb-2">Resume</h2>
            <p>Click on any of my experiences to learn more!</p>
            <Education />
            <WorkExperience />
          </div>
        )}
        {activeTab === 'contact' && (
          <div>
            <h2 className="text-xl font-semibold mb-2">Contact</h2>
            <p>Show email, LinkedIn, or a contact form here.</p>
<TextEffect per='char' preset='fade'>
      Animate your ideas with motion-primitives
    </TextEffect>
          </div>
        )}
      </div>
    </div>
  );
}
