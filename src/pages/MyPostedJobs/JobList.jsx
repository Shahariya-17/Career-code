import React, { use } from "react";
import { Link } from "react-router-dom";

const JobList = ({ jobsCreatedByPromise }) => {
  const jobs = use(jobsCreatedByPromise);

  if (!Array.isArray(jobs)) {
    return (
      <div className="flex justify-center items-center h-[60vh]">
        <p className="text-red-500 font-semibold text-xl">
          Invalid job data received. Please try again later.
        </p>
      </div>
    );
  }

  return (
    <div className="min-h-screen flex flex-col items-center justify-start p-6 bg-gray-50">
      <h2 className="text-3xl font-bold mb-6 text-center text-gray-800">
        Jobs Created by You: {jobs.length}
      </h2>

      <div className="w-full max-w-5xl overflow-x-auto shadow-lg rounded-2xl bg-white">
        <table className="table w-full text-center">
          <thead className="bg-blue-100 text-blue-800 text-sm uppercase font-semibold">
            <tr>
              <th className="py-3 px-4">#</th>
              <th className="py-3 px-4">Job Title</th>
              <th className="py-3 px-4">Deadline</th>
              <th className="py-3 px-4">Applications</th>
            </tr>
          </thead>
          <tbody className="text-gray-700">
            {jobs.map((job, index) => (
              <tr key={job._id} className="border-b hover:bg-gray-100 transition">
                <td className="py-3 px-4">{index + 1}</td>
                <td className="py-3 px-4">{job.title}</td>
                <td className="py-3 px-4">{new Date(job.deadline).toLocaleDateString()}</td>
                <td className="py-3 px-4">
                  <Link
                    className="inline-block bg-blue-500 text-white px-4 py-1 rounded hover:bg-blue-600 transition"
                    to={`/applications/${job._id}`}
                  >
                    View
                  </Link>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default JobList;
