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
import { Button } from '../assets/buttontest.jsx'

export default function NavbarTabs() {
    const [activeTab, setActiveTab] = useState('home');

    return (
        <div className="">



            <section className="max-w-fit mx-auto px-6 py-16">
                <div className="mx-auto grid grid-cols-1 gap-12 items-center mx-auto w-screen max-w-screen-xl px-4 py-2 sm:px-6 sm:py-2 lg:px-6 lg:py-8">
                    <div className="mx-auto w-screen max-w-screen-xl px-4 py-2 sm:px-6 sm:py-2 lg:px-6 lg:py-8">
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
                        <h1 className="bg-red-100 w-150">hi</h1>

                        <div className="max-w-prose text-left">
                            <h1 className="inter text-2xl font-bold  sm:text-4xl">
                                Creating powerful data-based solutions that help grow <Typewriter
                                    words={[
                                        { text: 'portfolios', gradient: 'from-blue-500 to-green-500' },
                                        { text: 'businesses', gradient: 'from-red-500 to-blue-500' },
                                        { text: 'people', gradient: 'from-indigo-500 to-purple-500' },
                                    ]}
                                />
                            </h1>

                            <p className="mt-4 inter text-pretty text-gray-700 sm:text-lg/relaxed">
                                I turn complex problems into elegent, data-driven solutions that power business growth and ensure user satisfaction.
                            </p>

                            <div className="mt-4 flex gap-4 sm:mt-6">
                                <button
                                    type="button"
                                    className="text-white bg-[#4285F4] hover:bg-[#4285F4]/90 focus:ring-4 focus:outline-none focus:ring-[#4285F4]/50 font-medium rounded-lg text-sm px-5 py-2.5 text-center inline-flex items-center dark:focus:ring-[#4285F4]/55 me-2 mb-2"
                                >
                                    LinkedIn
                                </button>

                            </div>
                        </div>



                        <section>
                            <h1 className="section-head">About</h1>
                            <p className="text-zinc-600 dark:text-zinc-300 text-base leading-relaxed">
                                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer nec odio. Praesent libero.
                                Sed cursus ante dapibus diam. Sed nisi. Nulla quis sem at nibh elementum imperdiet. Duis sagittis ipsum.
                                Praesent mauris. Fusce nec tellus sed augue semper porta. Mauris massa. Vestibulum lacinia arcu eget nulla.
                                Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Curabitur sodales
                                ligula in libero. Sed dignissim lacinia nunc. Curabitur tortor. Pellentesque nibh. Aenean quam.
                                In scelerisque sem at dolor. Maecenas mattis. Sed convallis tristique sem. Proin ut ligula vel nunc egestas porttitor.
                            </p>
                        </section>



                        <h1 className="section-head">Work Experience</h1>
                        <div className="square-card">
                            <NumberTicker
                                value={100}
                                className="inter gradient-text"
                            />
                            <p className="inter">projects</p>
                        </div>



                        <h1 className="section-head">Projects</h1>


                        <h1 className="section-head">Contact</h1>


                    </div>
                </div>
            </section>




        </div>
    );
}