import React from 'react';

export default function Menu() {
    return (

        <div className="bg-accent absolute flex-col top-3 left-3 rounded-xl bg-white/90 px-4 py-2 shadow-sm ring-1 ring-zinc-900/5 backdrop-blur-sm transition dark:bg-zinc-800/90 dark:ring-white/10 dark:hover:ring-white/20 flex space-x-4">
            
            
            
            <a href="#home" className='hover:bg-gray-100 rounded-md px-1 py-1 items-center  flex space-x-1'>
                <span class="material-symbols-rounded">home</span>
                <span className="text-sm font-semibold">Home</span>
            </a>

        </div>

    )

}
