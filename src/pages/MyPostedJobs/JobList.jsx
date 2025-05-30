import React, { use } from "react";
import { Link } from "react-router";

const JobList = ({ jobsCreatedByPromise }) => {
  const jobs = use(jobsCreatedByPromise);
  return (
    <div>
      <h2 className="text-3xl">Jobs created by you : {jobs.length}</h2>
      <div className="overflow-x-auto">
        <table className="table">
          {/* head */}
          <thead>
            <tr>
              <th></th>
              <th>Job Title</th>
              <th>Deadline</th>
              <th>View Applications</th>
            </tr>
          </thead>
          <tbody>
            {/* rows */}
            {
                jobs.map((job, index) =>{
                  return  <tr key={job._id}>
              <th>{index+1}</th>
              <td>{job.title}</td>
              <td>{job.deadline}</td>
              <td><Link className="btn" to={`/applications/${job._id}`}>View Applications</Link></td>
            </tr>
                })
            }
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default JobList;
