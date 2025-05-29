import React from 'react';
import { BsLightningChargeFill } from 'react-icons/bs';
import { FaLocationDot } from 'react-icons/fa6';
import { MdDateRange } from 'react-icons/md';
import { RxLapTimer } from 'react-icons/rx';
import { Link } from 'react-router-dom';

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
    <div className="max-w-sm bg-gray-100 hover:bg-white rounded-3xl shadow-lg hover:shadow-2xl transition-shadow duration-300 p-6 flex flex-col justify-between h-[480px]">
      {/* Header */}
      <div className="flex items-center justify-between mb-5">
        <div className="flex items-center space-x-4">
          <div className="bg-gray-100 p-3 rounded-2xl flex items-center justify-center shadow-sm">
            <img
              src={company_logo || 'https://via.placeholder.com/48'}
              alt={`${company} logo`}
              className="w-12 h-12 object-contain"
            />
          </div>
          <div>
            <h3 className="font-semibold text-lg text-gray-900">{company}</h3>
            <div className="flex items-center gap-1 text-gray-500 text-sm mt-1">
              <FaLocationDot size={16} />
              <span>{location}</span>
            </div>
          </div>
        </div>
        <BsLightningChargeFill size={28} className="text-green-500" />
      </div>

      {/* Title */}
      <h2 className="text-2xl font-bold text-blue-900 mb-3 truncate">{title}</h2>

      {/* Type & Time */}
      <div className="flex items-center text-gray-400 text-sm mb-4 space-x-6">
        <div className="flex items-center gap-1">
          <MdDateRange size={18} />
          <span>{jobType}</span>
        </div>
        <div className="flex items-center gap-1">
          <RxLapTimer size={18} />
          <span>Just now</span>
        </div>
      </div>

      {/* Description */}
      <p className="text-gray-600 text-sm mb-6 line-clamp-3 leading-relaxed">
        {description}
      </p>

      {/* Requirements */}
      <div className="flex flex-wrap gap-3 mb-6">
        {requirements.map((skill, idx) => (
          <span
            key={idx}
            className="bg-blue-100 text-blue-800 px-4 py-1 rounded-full text-xs font-semibold tracking-wide"
          >
            {skill}
          </span>
        ))}
      </div>

      {/* Salary & Button */}
      <div className="flex items-center justify-between">
        <p className="text-blue-700 font-extrabold text-lg">
          ৳{salaryRange.min.toLocaleString()} - ৳{salaryRange.max.toLocaleString()}
          <span className="text-gray-400 text-sm font-normal ml-1">/ Month</span>
        </p>
        <Link to={`/jobs/${_id}`}>
          <button className="px-5 py-2 rounded-full bg-blue-600 text-white font-semibold text-sm hover:bg-blue-700 transition-colors duration-300 focus:outline-none focus:ring-2 focus:ring-blue-500">
            Show Details
          </button>
        </Link>
      </div>
    </div>
  );
};

export default JobCard;
