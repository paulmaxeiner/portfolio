import React, { useState, useEffect, useRef } from 'react';

import Hero from './Hero.jsx';
import Resume from './Resume.jsx';
import About from './About.jsx';
import Projects from './Projects.jsx';
import ThemeToggleButton from './ThemeToggleButton.jsx';
import ContactForm from './ContactForm.jsx';
import Typewriter from './Typewriter.jsx';
import IconButton from './IconButton.jsx';
import Menu from './Menu.jsx';
import { NumberTicker } from './NumberTicker.jsx';
import { House } from 'lucide-react';
import { motion } from "framer-motion";
import { Button } from '../assets/buttontest.jsx';
import RevealList from './Reveal.jsx';
import Footer from './Footer.jsx';
import TechSection from './TechCard.jsx';
import { LettersPullUp } from './LettersPullUp.jsx';
import WorkExperience from './WorkExperience.jsx';
import ProfessionalExperience_Cards from './ProfessionalExperience_Cards.jsx';
import ProfessionalExperience from './ProfessionalExperience.jsx';

export default function NavbarTabs() {
    const [activeTab, setActiveTab] = useState('home');

    return (
        <div className="">
            <div className="absolute top-0 left-0 w-full h-64 bg-gradient-to-b from-slate-100 to-white z-0 dark:z-[-1]"></div>

            <RevealList>
                <ThemeToggleButton />


                

                


                <div className="flex items-center space-x-5 relative z-0 max-w-4xl mx-auto">

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
                    <div className="flex flex-row sm:ml-25">

                        <IconButton iconLibrary="bootstrap" iconName="github" label="GitHub" onClick={() => window.open("https://github.com/paulmaxeiner", "_blank")} />
                        <IconButton iconLibrary="bootstrap" iconName="linkedin" label="LinkedIn" onClick={() => window.open("https://www.linkedin.com/in/paulmaxeiner/", "_blank")} />

                    </div>

                </div>


                <section id="hero" className="pt-15 relative z-0 max-w-4xl mx-auto">

                    <h1>Hi 👋, I'm Paul</h1>



                    <h1 className="inter text-2xl font-bold text-4xl">
                        Creating powerful data-based solutions that grow <LettersPullUp
                            defaultColor="#334155"
                            words={[
                                { text: "portfolios", color: "#00cdac" },
                                { text: "businesses", color: "#00a5e3" },
                                { text: "people", color: "#ffa23a" },
                            ]}
                        />
                    </h1>
                    <span class="flex items-center mt-6">
                        <span class="uppercase font-semibold inter shrink-0 pe-4 text-gray-900 dark:text-white">Welcome to my personal website</span>

                    </span>
                </section>




                <section id="about">
                    <h1 className="section-head">About</h1>
                    <p>Hi, I’m Paul, a Financial Engineering student at WashU. I bridge finance, data, and design by building tools that transform complexity into clarity and insight into action. I’m passionate about quantitative finance and data-driven strategies that combine markets and math. I’ve worked in business development at Hunter Engineering and led teams at Starbucks, and now I’m diving deep into trading algorithms, stats, and all things quant.</p>
                </section>

                <section id="education">
                    <h1 className="section-head">Education</h1>
                    <div className="flex flex-col">

                        {/* WashU */}
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
                        {/* NAHS */}
                        <div className="inline gap-5 mt-10 items-center sm:flex">
                            <img
                                src="public/logos/nahs.svg"
                                alt="Profile"
                                className="w-12 h-12"
                            />

                            <div className="flex flex-col sm:flex-row sm:justify-between sm:items-start w-full gap-1">
                                <div>
                                    <p className="text-lg font-semibold">
                                        New Albany High School
                                    </p>

                                    <p className="text-sm">
                                        High School Diploma
                                    </p>

                                    <p className="text-sm mt-3">
                                        <span className="font-bold">Honors: </span>
                                        Summa Cum Laude, Honors Diploma, National Honor Society, National Merit Commended Scholar, AP Scholar with Distinction
                                    </p>

                                </div>

                                <div className="text-xs text-gray-500 dark:text-gray-400 sm:text-right">
                                    <p>May 2023</p>
                                </div>


                            </div>
                        </div>
                    </div>






                </section>

                <section id="professional-experience">
                    <h1 className="section-head">Professional Experience</h1>
                    <ProfessionalExperience />
                </section>

                <section id="professional-experience-cards">
                    <h1 className="section-head">Professional Experience</h1>
                    <ProfessionalExperience_Cards />
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
                                <dt class="font-medium text-gray-900 dark:text-white">Clifton Strengths</dt>
                                <dd class="text-gray-700 dark:text-gray-400 sm:col-span-2">Analytical, Input, Discipline, Futuristic, Individualization</dd>
                            </div>

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
                    <ContactForm />
                </section>





            </RevealList>

            <footer><Footer /></footer>

        </div>
    );
}