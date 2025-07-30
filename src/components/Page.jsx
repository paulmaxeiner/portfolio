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
import Footer from './Footer.jsx';
import TechSection from './TechCard.jsx';
import WorkExperience from './WorkExperience.jsx';
import ProfessionalExperience from './ProfessionalExperience.jsx';

export default function NavbarTabs() {
    const [activeTab, setActiveTab] = useState('home');

    return (
        <div className="">
            <RevealList>
                <ThemeToggleButton />
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


                <section id="hero" className="pt-15">
                    <h1 className="inter text-2xl font-bold text-4xl">
                        Creating powerful data-based solutions that help grow <Typewriter
                            words={[
                                { text: 'portfolios', gradient: 'from-blue-500 to-green-500' },
                                { text: 'businesses', gradient: 'from-red-500 to-blue-500' },
                                { text: 'people', gradient: 'from-indigo-500 to-purple-500' },
                            ]}
                        />
                    </h1>
                </section>


                <section id="about">
                    <h1 className="section-head">About</h1>
                    <p>Hi, I’m Paul, a Financial Engineering and Econ & Strategy student at WashU. I’m passionate about quantitative finance and love building data-driven strategies that bridge markets and math. I’ve worked in business development at Hunter Engineering and led teams at Starbucks, and now I’m diving deep into trading algorithms, stats, and all things quant.</p>
                </section>

                <section id="education">
                    <h1 className="section-head">Education</h1>


                    <div className="flex items-center space-x-5">
                        <img
                            src="https://upload.wikimedia.org/wikipedia/en/thumb/d/d7/WashU_St._Louis_seal.svg/1280px-WashU_St._Louis_seal.svg.png"
                            alt="Profile"
                            className="w-12 h-12 rounded-full object-cover"
                        />

                        <div className="flex flex-col">
                            <span className="text-lg font-semibold text-gray-900 dark:text-white">
                                Washington University in St. Louis
                            </span>

                            <span className="text-sm text-gray-900 dark:text-white">
                                Bachelor's of Science in Business Administration (BSBA)
                            </span>

                            <span className="text-xs text-gray-900 dark:text-white">
                                Major: Financial Engineering, Economics & Strategy
                            </span>
                            <span className="text-xs text-gray-900 dark:text-white">
                                Minor: Computer Science
                            </span>



                        </div>
                    </div>
                </section>

                <section id="work-experience">
                    <h1 className="section-head">Professional Experience</h1>
                    <ProfessionalExperience/>
                </section>

                <section id="tech-stack">
                    <h1 className="section-head">Tech Stack</h1>
                    <TechSection />
                </section>

                <section id="projects">
                    <h1 className="section-head">Projects</h1>
                    <Button>Downloadable version</Button>
                    <Projects/>
                </section>

                <section id="resume">
                    <h1 className="section-head">Contact</h1>
                    <Button>Contact</Button>
                </section>



            </RevealList>

            <footer><Footer /></footer>

        </div>
    );
}