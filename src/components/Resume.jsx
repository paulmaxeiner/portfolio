import React from 'react';
import ResumeSidebar from './ResumeSidebar.jsx';
import WorkExperience from './WorkExperience.jsx';
import Education from './Education.jsx';
import { Calendar } from 'lucide-react';
import { Button } from '../assets/buttontest.jsx'


export default function Resume() {
    return (
        <div>




            <section id="about" className='items-end justify-items-end'>
                <p>Hello!</p>
                <Button>Download PDF Version</Button>
            </section>



            <section id="experience" className="w-full px-2 py-16">
                <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-[1.2fr_3fr] gap-12 items-start">
                    <div className="md:sticky top-10 self-start">
                        <h1 className="text-3xl md:text-4xl font-bold text-zinc-800 dark:text-white leading-tight">
                            Work Experience
                        </h1>
                    </div>
                    <div>
                        <WorkExperience />
                    </div>
                </div>
            </section>

            <section id="education" className="w-full px-2 py-16">
                <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-[1.2fr_3fr] gap-12 items-start">
                    <div className="md:sticky top-10 self-start">
                        <h1 className="text-3xl md:text-4xl font-bold text-zinc-800 dark:text-white leading-tight">
                            Education
                        </h1>
                    </div>
                    <div>
                        <Education />
                    </div>
                </div>
            </section>



        </div>
    )
}