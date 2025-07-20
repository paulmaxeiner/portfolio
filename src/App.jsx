import React from 'react';

import NavbarTabs from './components/NavbarTabs.jsx';
import MyTestimonials from './components/Testimonials.jsx';
import Footer from './components/Footer.jsx';

function App() {
  return (
    
    <div className="min-h-screen bg-white text-gray-800 dark:bg-gray-900 dark:text-white font-sans">
      <main className="max-w-5xl mx-auto px-4">
        <NavbarTabs />
        </main>
      <header className="text-center py-10">
        
        <h1 className="text-4xl font-bold">Paul Maxeiner</h1>
        <p className="text-lg text-gray-600">My Portfolio</p>
      </header>
      <footer>
        <Footer />
      </footer>
    </div>
  );
}

export default App;



