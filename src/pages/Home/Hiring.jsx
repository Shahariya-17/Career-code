import React from 'react';
import image1 from '../../assets/team/hiring1.jpg';
import image2 from '../../assets/team/hiring2.png';

const Hiring = () => {
    return (
        <div className="max-w-7xl mx-auto bg-white border border-gray-200 rounded-2xl shadow-lg px-10 py-8 flex flex-col lg:flex-row items-center justify-between gap-10 hover:shadow-2xl transition-all duration-300">
            
            {/* Left Section */}
            <div className="flex items-center gap-8">
                <img 
                    src={image1} 
                    alt="Hiring" 
                    className="w-40 h-auto object-contain drop-shadow-lg transition-transform duration-300 hover:scale-105"
                />
                <div>
                    <p className="text-base text-gray-500 font-semibold uppercase tracking-wider">We Are</p>
                    <h2 className="text-5xl font-extrabold text-blue-900 leading-tight">HIRING</h2>
                    <p className="mt-2 text-gray-700 text-lg">
                        Let’s <span className="font-semibold text-gray-900">Work</span> Together &amp;{' '}
                        <span className="font-semibold text-gray-900">Explore</span> Opportunities
                    </p>
                </div>
            </div>

            {/* Right Section */}
            <div className="flex items-center gap-8">
                <button className="flex items-center px-7 py-3.5 bg-blue-600 text-white font-semibold text-base rounded-xl shadow hover:bg-blue-700 transition duration-300 hover:scale-105">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                    Apply now
                </button>
                <img 
                    src={image2} 
                    alt="Teamwork" 
                    className="w-52 h-auto object-contain drop-shadow-lg transition-transform duration-300 hover:scale-105"
                />
            </div>
        </div>
    );
};

export default Hiring;
