import React from 'react';
import ResumeSidebar from './ResumeSidebar.jsx';
import WorkExperience from './WorkExperience.jsx';
import Education from './Education.jsx';


export default function Resume() {
    return (
        <div>
            <ResumeSidebar />

            <section id="experience">
            <WorkExperience />
            </section>

            <section id="education">
            <Education />
            </section>
            
        </div>
    )
}