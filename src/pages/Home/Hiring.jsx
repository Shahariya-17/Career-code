import React from 'react';
import image1 from '../../assets/team/hiring1.jpg'
import image2 from '../../assets/team/hiring2.png'

const Hiring = () => {
    return (
        <div class="flex items-center justify-between p-6 bg-white border rounded-lg shadow-sm max-w-6xl mx-auto">
  <div class="flex items-center space-x-4">
   <img src={image1} alt="" />
    <div>
      <p class="text-sm text-gray-500 font-semibold">WE ARE</p>
      <h2 class="text-3xl font-bold text-blue-900">HIRING</h2>
      <p class="text-gray-600 mt-1">
        Let’s <span class="font-semibold text-gray-800">Work</span> Together &amp;
        <span class="font-semibold text-gray-800">Explore</span> Opportunities
      </p>
    </div>
  </div>

  <div class="flex items-center space-x-4">
    <button class="flex items-center px-5 py-2 bg-blue-600 text-white font-semibold rounded-lg shadow hover:bg-blue-700 transition">
      <svg xmlns="http://www.w3.org/2000/svg" class="h-4 w-4 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7" />
      </svg>
      Apply now
    </button>
   <img src={image2} alt="" />
  </div>
</div>

    );
};

export default Hiring;