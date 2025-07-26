import React, { useState } from 'react';
import Grid from './Grid.jsx';
import About from './About.jsx'
import Typewriter from './Typewriter.jsx';
import Projects from './Projects.jsx';
import ContactForm from './ContactForm.jsx';
import { Button } from '../assets/buttontest.jsx'

export default function Hero() {

  return (
    <section className="bg-white text-gray-800 dark:bg-gray-900 dark:text-white lg:grid lg:place-content-center">

      <div className="mx-auto w-screen max-w-screen-xl px-4 py-2 sm:px-6 sm:py-2 lg:px-6 lg:py-8">
        <img
          src="https://avatars.githubusercontent.com/u/156957669?v=4"
          alt="Profile"
          className="w-24 h-24 rounded-full object-cover mb-6"
        />
        <div className="max-w-prose text-left">
          <h1 className="text-4xl font-bold  sm:text-5xl">
            Creating powerful data-based solutions that help grow <Typewriter
              words={[
                { text: 'portfolios', gradient: 'from-blue-500 to-green-500' },
                { text: 'businesses', gradient: 'from-red-500 to-blue-500' },
                { text: 'people', gradient: 'from-indigo-500 to-purple-500' },
              ]}
            />
          </h1>

          <p className="mt-4 text-base text-pretty text-gray-700 sm:text-lg/relaxed">
            I turn complex problems into elegent, data-driven solutions that power business growth and ensure user satisfaction.
          </p>

          <div className="mt-4 flex gap-4 sm:mt-6">
            <button type="button" class="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center inline-flex items-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">
              Explore
              <svg class="rtl:rotate-180 w-3.5 h-3.5 ms-2" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 14 10">
                <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M1 5h12m0 0L9 1m4 4L9 9" />
              </svg>
            </button>
          </div>
        </div>
      </div>


      <div>
        <About />
        <Grid />


        <h1 className="text-3xl sm:text-5xl font-bold text-center mb-12 text-black dark:text-white">
          Recent Projects
        </h1>
        <Projects />

        <h1 className="text-3xl sm:text-5xl font-bold text-center mb-12 text-black dark:text-white">
          Get in Touch
        </h1>
        <h3>I am always happy to connect with other professionals, so feel free to get in touch with me here.</h3>


      </div>

    </section>


  )

}