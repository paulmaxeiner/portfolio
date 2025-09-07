import React from 'react';

export default function IconButton({ iconLibrary, iconName, label, onClick }) {
    function getIcon(iconLibrary, iconName) {
        if (iconLibrary === 'material') {
            return <span className="material-symbols-rounded">{iconName}</span>;
        } else if (iconLibrary === 'bootstrap') {
            return <i className={`bi bi-${iconName} items-center flex text-xl`}></i>;
        }



        // Add more icon libraries as needed
        return null;
    }

    return (
        <div>
            <button data-tooltip-target={`tooltip-${label}`} type="button" aria-label={label}
                className="group flex rounded-xl p-2 mx-1 aspect-square bg-white hover:bg-gray-200 shadow-sm ring-1 
            ring-zinc-900/5 backdrop-blur-sm transition dark:bg-zinc-800/90 dark:ring-white/10 
            dark:hover:ring-white/20 items-center" onClick={onClick}>
                {getIcon(iconLibrary, iconName)}
            </button>

            {/* Tooltip */}
            <div id={`tooltip-${label}`} role="tooltip" className="absolute z-10 invisible inline-block p-2 text-xs text-white transition-opacity duration-300 bg-gray-900 rounded-lg shadow-xs opacity-0 tooltip">
                {label && <span>{label}</span>}
                <div className="tooltip-arrow" data-popper-arrow></div>
            </div>


        </div>
    );
}
