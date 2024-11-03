import React from 'react'
import { useState } from 'react';

// A Simple Submit Button 
// Tailwind Styled
// With  UseState Effect for to indicate submit status

const Submitbutton = () => {
    const [buttonText, setButtonText] = useState('Submit');
    const handleSubmit = () => {
        setTimeout(() => {
            setButtonText('Submitted ✓');
        }, 500);
    }
    
    return (
        // Added margin (ml-80) - Adjust it according to your needs
        <button 
            className='w-28 h-10 transition ease-in-out delay-150 hover:scale-110 bg-teal-400 rounded-md ml-80 hover:bg-teal-600 hover:text-white focus:outline-none focus:ring 
            hover:-translate-y-1 focus:ring-emerald-600 relative'
            onClick={handleSubmit}
        >
        {buttonText}
        </button>
    )
}

export default Submitbutton