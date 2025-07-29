import React, { useState, useEffect, useRef } from 'react';
import Resume from './Resume.jsx';
import Hero from './Hero.jsx';
import About from './About.jsx';
import Projects from './Projects.jsx';
import ThemeToggleButton from './ThemeToggleButton.jsx';
import ContactForm from './ContactForm.jsx';
import Typewriter from './Typewriter.jsx';
import { NumberTicker } from './NumberTicker.jsx';
import { House } from 'lucide-react';
import { motion } from "framer-motion";
import { Button } from '../assets/buttontest.jsx';
import RevealList from './Reveal.jsx';

export default function NavbarTabs() {
    const [activeTab, setActiveTab] = useState('home');

    return (
        <div className="">

        <RevealList>

                            
        </RevealList>
        

            <h1>hi</h1>
                                    <div className="flex items-center space-x-5">

                            <img
                                src="https://avatars.githubusercontent.com/u/156957669?v=4"
                                alt="Profile"
                                className="w-16 h-16 rounded-full object-cover"
                            />

                            <div className="flex flex-col">

                                <span className="text-lg font-semibold text-gray-900 dark:text-white">
                                    Paul Maxeiner
                                </span>

                                <span className="text-sm text-gray-500 dark:text-gray-400">
                                    Financial Engineering @ WashU
                                </span>
                                

                            </div>
                            </div>




        </div>
    );
}