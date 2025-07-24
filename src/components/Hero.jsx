import React, { useState } from 'react';
import Grid from './Grid.jsx';

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
            Developing data-based solutions that help grow businesses.
          </h1>

          <p className="mt-4 text-base text-pretty text-gray-700 sm:text-lg/relaxed">
            I turn complex problems into elegent, data-driven solutions that power business growth and ensure user satisfaction.
          </p>

          <div className="mt-4 flex gap-4 sm:mt-6">
            <a
              className="inline-block rounded border border-indigo-600 bg-indigo-600 px-5 py-3 font-medium text-white shadow-sm transition-colors hover:bg-indigo-700"
              href="#"
            >
              Get Started
            </a>

            <a
              className="inline-block rounded border border-gray-200 px-5 py-3 font-medium text-gray-700 shadow-sm transition-colors hover:bg-gray-50 hover:text-gray-900"
              href="#"
            >
              Learn More
            </a>
          </div>
        </div>
      </div>


      <div>
        <Grid />


        <h1 className="text-3xl sm:text-5xl font-bold text-center mb-12 text-black dark:text-white">
          Recent Projects
        </h1>

        <h1 className="text-3xl sm:text-5xl font-bold text-center mb-12 text-black dark:text-white">
          Contact Me
        </h1>


      </div>
      
    </section>


  )

}