import React, { useState } from 'react';
import '../css/WhatSetsUsApart.css';

const cardData = [
    {
        imageSrc: 'assets/img/WhatSetsUsApart/top-level-eng-.webp',
        heading: 'Top-Level Engineers',
        content: 'ASAD We are a team of 1300+ engineers, developers and designers, and every member can create a customer-centric design, mobile and web applications. We are experts in modern technologies like PHP, Python, ROR, JavaScript, Java, Node.js, AI/ML, WordPress, Blockchain, Laravel, iOS, Android, etc.',
    },
    {
        imageSrc: 'assets/img/WhatSetsUsApart/top-level-eng-.webp',
        heading: 'Top-Level Engineers1',
        content: 'Asad We are a team of 1300+ engineers, developers and designers, and every member can create a customer-centric design, mobile and web applications. We are experts in modern technologies like PHP, Python, ROR, JavaScript, Java, Node.js, AI/ML, WordPress, Blockchain, Laravel, iOS, Android, etc.',
    },
    {
        imageSrc: 'assets/img/WhatSetsUsApart/top-level-eng-.webp',
        heading: 'Top-Level Engineers2',
        content: 'asad We are a team of 1300+ engineers, developers and designers, and every member can create a customer-centric design, mobile and web applications. We are experts in modern technologies like PHP, Python, ROR, JavaScript, Java, Node.js, AI/ML, WordPress, Blockchain, Laravel, iOS, Android, etc.',
    },
    // Add more objects for each card
];

function WhatSetsUsApart() {
    const [hoveredIndex, setHoveredIndex] = useState(null);

    const handleMouseEnter = (index) => {
        setHoveredIndex(index);
    };

    const handleMouseLeave = () => {
        setHoveredIndex(null);
    };

    return (
        <div className='container'>
            <div className='row'>

<h1 className='text-black text-center my-5 py-3'>What Sets Us Apart?</h1>

                {cardData.map((card, index) => (
                    <div className='col-lg-4 mb-4 ' key={index}>
                        <div
                            className={`main-content card  rounded shadow h-100 ${hoveredIndex === index ? 'hovered' : ''}`}
                            onMouseEnter={() => handleMouseEnter(index)}
                            onMouseLeave={handleMouseLeave}
                        >
                            {hoveredIndex !== index && (
                                <>
                                    <div className={`img-div ${hoveredIndex === index ? 'fadeOut' : ''}`}>
                                        <img src={card.imageSrc} className='rounded-top img-fluid mx-auto w-100' alt='project_icon' />
                                    </div>
                                    <div className='card-body'>
                                        <div className={`heading-div text-center  ${hoveredIndex === index ? 'fadeOut' : ''}`}>
                                            <h3>{card.heading}</h3>
                                        </div>
                                    </div>
                                </>
                            )}
                            {hoveredIndex === index && (

                                <div className={`content p-3 h-100 text-white fadeIn`}>
                                    <h3 className='d-lg-none'>{card.heading}</h3>
                                    <p>{card.content}</p>
                                </div>
                            )}
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
}

export default WhatSetsUsApart;
