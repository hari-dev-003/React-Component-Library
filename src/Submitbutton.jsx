import React from 'react'
import { useState } from 'react';

const Submitbutton = () => {
    const [buttonText, setButtonText] = useState('Submit');
    
    const handleSubmit = (ids) => {
        setTimeout(() => {
            setButtonText('Submitted ✓');
            this.ids.style = 'transform:scale(0.75)'
        }, 500);
        btn = document.getElementById('Submit-btn');
        btn.style = 'width:5.5rem;'
    }
    
    return (
        <button 
            className='w-20 h-10 bg-teal-400 rounded-md ml-80 hover:bg-teal-200 transition-all duration-700 active:scale-95'
            onClick={handleSubmit('Submit-btn')}
        >
            {buttonText}
        </button>
    )
}

export default Submitbutton