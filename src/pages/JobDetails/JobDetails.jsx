import React from 'react';
import { useLoaderData } from 'react-router-dom';

const JobDetails = () => {
  const job = useLoaderData();

  const {
    title,
    location,
    jobType,
    category,
    applicationDeadline,
    salaryRange,
    description,
    requirements,
    responsibilities,
    company,
    hr_email,
    hr_name,
    company_logo,
  } = job;

  return (
    <div className="max-w-6xl mx-auto px-4 py-10 animate-fade-in">
      <div className="bg-gradient-to-br from-white to-gray-50 p-10 rounded-3xl shadow-xl border border-gray-100 transition-transform hover:scale-[1.01] duration-300">
        {/* Header */}
        <div className="flex items-center gap-6 mb-8">
          <img
            src={company_logo || 'https://via.placeholder.com/80'}
            alt="Company Logo"
            className="w-20 h-20 rounded-xl object-contain bg-gray-100 p-2 shadow-sm"
          />
          <div>
            <h1 className="text-3xl font-extrabold text-blue-900 flex items-center gap-2">
              <span>🛠</span> {title}
            </h1>
            <p className="text-gray-500 text-base mt-1">{company} · {location}</p>
            <p className="text-sm text-gray-400 mt-1">
              🕒 <span className="font-medium text-gray-600">{jobType}</span>
            </p>
          </div>
        </div>

        {/* Description */}
        <section className="mb-6">
          <h2 className="text-xl font-semibold text-gray-800 mb-2">📄 Job Description</h2>
          <p className="text-gray-700 leading-relaxed">{description}</p>
        </section>

        {/* Requirements */}
        <section className="mb-6">
          <h2 className="text-xl font-semibold text-gray-800 mb-2">🧩 Requirements</h2>
          <ul className="list-disc list-inside space-y-2 text-gray-700">
            {requirements.map((item, i) => (
              <li key={i}>{item}</li>
            ))}
          </ul>
        </section>

        {/* Responsibilities */}
        <section className="mb-6">
          <h2 className="text-xl font-semibold text-gray-800 mb-2">✅ Responsibilities</h2>
          <ul className="list-disc list-inside space-y-2 text-gray-700">
            {responsibilities.map((item, i) => (
              <li key={i}>{item}</li>
            ))}
          </ul>
        </section>

        {/* Details */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 mb-10">
          <DetailCard label="💰 Salary Range" value={`৳${salaryRange.min} - ৳${salaryRange.max} BDT/month`} />
          <DetailCard label="🗓 Application Deadline" value={applicationDeadline} />
          <DetailCard label="📂 Category" value={category} />
          <DetailCard label="📧 HR Contact" value={`${hr_name} (${hr_email})`} />
        </div>

        {/* Button */}
        <div className="text-right">
          <button className="px-6 py-3 rounded-lg font-semibold bg-blue-600 text-white border border-blue-600 hover:bg-white hover:text-blue-600 transition-all duration-300 shadow-md hover:shadow-lg">
            🚀 Apply Now
          </button>
        </div>
      </div>
    </div>
  );
};

const DetailCard = ({ label, value }) => (
  <div className="bg-white p-4 rounded-xl border shadow-sm hover:shadow-md transition">
    <p className="text-sm text-gray-500">{label}</p>
    <p className="font-semibold text-gray-800 mt-1">{value}</p>
  </div>
);

export default JobDetails;
