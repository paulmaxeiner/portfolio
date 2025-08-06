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
import { LettersPullUp } from './LettersPullUp.jsx';
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
                    <div className="flex flex-col sm:ml-25">
                        <button type="button" aria-label="LinkedIn" >
                            <a href="https://www.linkedin.com/in/paulmaxeiner/" target="_blank">
                                <img
                                    src="https://upload.wikimedia.org/wikipedia/commons/8/81/LinkedIn_icon.svg"
                                    className='h-6 w-6'
                                ></img>
                            </a>
                        </button>
                    </div>
                </div>


                <section id="hero" className="pt-15">
                    <h1 className="inter text-2xl font-bold text-4xl">
                        Creating powerful data-based solutions that grow <Typewriter
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
                    <p>Hi, I’m Paul, a Financial Engineering student at WashU. I’m passionate about quantitative finance and love building data-driven strategies that bridge markets and math. I’ve worked in business development at Hunter Engineering and led teams at Starbucks, and now I’m diving deep into trading algorithms, stats, and all things quant.</p>
                </section>

                <section id="education">
                    <h1 className="section-head">Education</h1>

                    <div className="flex flex-col">
                        <div className="inline gap-5 items-center sm:flex">
                            <img
                                src="https://upload.wikimedia.org/wikipedia/en/thumb/d/d7/WashU_St._Louis_seal.svg/1280px-WashU_St._Louis_seal.svg.png"
                                alt="Profile"
                                className="w-12 h-12 rounded-full object-cover"
                            />

                            <div className="flex flex-col sm:flex-row sm:justify-between sm:items-start w-full gap-1">
                                <div>
                                    <p className="text-lg font-semibold">
                                        Washington University in St. Louis
                                    </p>

                                    <p className="text-sm">
                                        Bachelor of Science in Business Administration (BSBA)
                                    </p>

                                    <p className="text-xs">
                                        Majors: Financial Engineering, Economics & Strategy
                                    </p>

                                    <p className="text-xs">
                                        Minor: Computer Science
                                    </p>
                                </div>

                                <div className="text-xs text-gray-500 dark:text-gray-400 sm:text-right">
                                    <p>May 2027</p>
                                </div>


                            </div>
                        </div>
                    </div>






                </section>

                <section id="professional-experience">
                    <h1 className="section-head">Professional Experience</h1>
                    <ProfessionalExperience />
                </section>

                <section id="projects">
                    <h1 className="section-head">Projects</h1>
                    <Button>Downloadable version</Button>
                    <Projects />
                </section>

                <section id="tech-stack">
                    <h1 className="section-head">Tech Stack</h1>
                    <TechSection />
                </section>

                <section id="additional-info">
                    <h1 className="section-head">Additional Info</h1>
                    <div class="flow-root">
                        <dl class="-my-3 divide-y divide-gray-200 dark:divide-gray-700 text-sm">


                            <div class="grid grid-cols-1 gap-1 py-3 sm:grid-cols-3">
                                <dt class="font-medium text-gray-900 dark:text-white">Languages</dt>
                                <dd class="text-gray-700 dark:text-gray-400 sm:col-span-2">English (fluent), French (intermediate)</dd>
                            </div>

                            <div class="grid grid-cols-1 gap-1 py-3 sm:grid-cols-3">
                                <dt class="font-medium text-gray-900 dark:text-white">Interests</dt>
                                <dd class="text-gray-700 dark:text-gray-400 sm:col-span-2">User interface design, web development, tennis, pickleball</dd>
                            </div>

                            <div class="grid grid-cols-1 gap-1 py-3 sm:grid-cols-3">
                                <dt class="font-medium text-gray-900 dark:text-white">Go-To Coffee Order</dt>
                                <dd class="text-gray-700 dark:text-gray-400 sm:col-span-2">Vanilla latte with blonde espresso</dd>
                            </div>



                        </dl>
                    </div>
                </section>

                <section id="contact">
                    <h1 className="section-head">Contact</h1>
                    <p className="mb-5">I am more than happy to talk about my work with other professionals or answer any questions about my skills or background. Fill out the form below, and let's keep in touch!</p>
                    <ContactForm/>
                </section>





            </RevealList>

            <footer><Footer /></footer>

        </div>
    );
}