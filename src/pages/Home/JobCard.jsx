import React from 'react';
import { BsLightningChargeFill } from 'react-icons/bs';
import { FaLocationDot } from 'react-icons/fa6';
import { MdDateRange } from 'react-icons/md';
import { RxLapTimer } from 'react-icons/rx';
import { Link } from 'react-router';

const JobCard = ({ job }) => {
  const {
    company_logo,
    company,
    location,
    jobType,
    title,
    _id,
    description,
    requirements,
    salaryRange,
  } = job;

  return (
    <div className="border border-gray-200 rounded-2xl p-6 shadow-md hover:shadow-xl hover:-translate-y-1 transition-all duration-300 bg-gray-100 hover:bg-white max-w-sm">
      {/* Header */}
      <div className="flex items-center justify-between mb-4">
        <div className="flex items-center space-x-4">
          <div className="bg-gray-100 p-2 rounded-xl">
            <img
              src={company_logo || 'https://via.placeholder.com/40'}
              alt="Company Logo"
              className="w-10 h-10 object-contain"
            />
          </div>
          <div>
            <h3 className="font-bold text-base text-gray-800">{company}</h3>
            <div className='flex gap-1'>
                <FaLocationDot size={16} />
            <p className="text-gray-500 text-sm"> {location}</p>
            </div>
          </div>
        </div>
        <span className="text-green-500 text-xl"><BsLightningChargeFill size={30} /></span>
      </div>

      {/* Title */}
      <h2 className="text-xl font-semibold text-blue-900 mb-2">{title}</h2>

      {/* Type & Time */}
      <div className="flex items-center text-gray-400 text-sm mb-3 space-x-4">
        <div className='flex gap-1'>
            <MdDateRange />
        <span className=" items-center -mt-1">{jobType}</span>
        </div>
        <div className='flex gap-1'>
            <RxLapTimer />
        <span className=" items-center -mt-1">Just now</span>
        </div>
      </div>

      {/* Description */}
      <p className="text-sm text-gray-600 mb-4 line-clamp-3">
        {description}
      </p>

      {/* Requirements */}
      <div className="flex flex-wrap gap-2 mb-5">
        {requirements.map((skill, idx) => (
          <span
            key={idx}
            className="bg-blue-50 text-blue-700 px-3 py-1 rounded-full text-xs font-medium"
          >
            {skill}
          </span>
        ))}
      </div>

      {/* Salary & Button */}
      <div className="flex items-center justify-between">
        <p className="text-blue-700 font-bold text-lg">
          ৳{salaryRange.min} - ৳{salaryRange.max}
          <span className="text-gray-400 text-sm font-normal"> /Month</span>
        </p>
       <Link to={`/jobs/${_id}`}>
        <button className="border border-blue-600 bg-blue-600 text-white px-4 py-2 rounded-lg text-sm font-medium transition-all duration-300 hover:bg-white hover:text-blue-600">
          Apply Now
        </button>
       </Link>
      </div>
    </div>
  );
};

export default JobCard;
