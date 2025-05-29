import React, { useEffect, useState } from 'react';
import JobCard from './JobCard'; // import new component

const HotJobs = () => {
  const [jobs, setJobs] = useState([]);

  useEffect(() => {
    fetch('http://localhost:3000/jobs')
      .then((res) => res.json())
      .then((data) => setJobs(data));
  }, []);

  return (
    <div className="max-w-6xl mx-auto px-4 py-10">
      <div className='text-center mb-10'>
        <h2 className="text-4xl font-bold mb-6">Jobs of the day</h2>
      <p>Search and connect with the right candidates faster.</p>
      </div>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {jobs.map((job) => (
          <JobCard key={job._id} job={job} />
        ))}
      </div>
    </div>
  );
};

export default HotJobs;
