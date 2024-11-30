import React from 'react';
import { useState } from 'react';

const Tooltip = () => {
    const tooltipContainerStyle = {
        position: 'relative',
        display: 'inline-block',
        cursor: 'pointer',
        marginLeft:'250px', // added margins during development
        marginTop:'300px',  // make sure to modify while using
    };

    const tooltipTargetStyle = {
        padding: '10px 20px',
        backgroundColor: '#007bff',
        color: 'white',
        borderRadius: '15px',
        fontSize: '16px',
        transition: 'background-color 0.3s',
       
    };

    const tooltipStyle = {
        visibility: 'hidden',
        width: '80px',
        backgroundColor: '#333',
        color: '#fff',
        textAlign: 'center',
        borderRadius: '6px',
        padding: '5px',
        position: 'absolute',
        zIndex: 1,
        bottom: '125%', 
        left: '65%',
        marginLeft: '-60px', 
        opacity: 0,
        transition: 'opacity 0.3s',
        fontSize: '14px',
    };

    const tooltipTargetHoverStyle = {
        ...tooltipTargetStyle,
        backgroundColor: '#0056b3',
    };

    const [isHovered, setIsHovered] = useState(false);

    return (
      <>
        <div 
            style={tooltipContainerStyle} 
            onMouseEnter={() => setIsHovered(true)} 
            onMouseLeave={() => setIsHovered(false)}
        >
            <div style={isHovered ? tooltipTargetHoverStyle : tooltipTargetStyle}>
                Hover Me !
            </div>
            <div style={{
                ...tooltipStyle,
                visibility: isHovered ? 'visible' : 'hidden',
                opacity: isHovered ? 1 : 0,
            }}>
                ToolTip
            </div>
        </div>
        </>
    );
}

export default Tooltip;