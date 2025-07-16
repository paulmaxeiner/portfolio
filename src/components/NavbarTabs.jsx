import React, { useState } from 'react';
import WorkExperience from './resume.jsx';
import Education from './Education.jsx';
import Hero from './Hero.jsx';
import About from './About.jsx';

const tabs = [
  { id: 'home', label: 'Home' },
  { id: 'about', label: 'About' },
  { id: 'resume', label: 'Resume' },
  { id: 'contact', label: 'Contact' },
];

export default function NavbarTabs() {
  const [activeTab, setActiveTab] = useState('home');

  return (
    <div className="mb-6">
      <div className="justify-center">
        <ul className="flex flex-wrap text-sm font-medium justify-center items-center" role="tablist">
          {tabs.map((tab) => (
            <li className="me-2" key={tab.id} role="presentation">
              <button
                onClick={() => setActiveTab(tab.id)}
                className={`inline-block p-4 border-b-2 rounded-t-lg ${
                  activeTab === tab.id
                    ? 'text-blue-600 border-blue-600'
                    : 'text-gray-500 hover:text-gray-600 hover:border-gray-300'
                }`}
                role="tab"
              >
                {tab.label}
              </button>
            </li>
          ))}
        </ul>
      </div>

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
          </div>
        )}
      </div>
    </div>
  );
}
