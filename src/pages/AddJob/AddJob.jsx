import React from "react";

const AddJob = () => {
  return (
    <div>
      <h2 className="text-4xl font-bold text-center mb-5">Please Add a Job</h2>
      <form className=" justify-center items-center">
        <fieldset className="fieldset bg-base-200 border-base-300 rounded-box w-xs border p-4">
          <legend className="fieldset-legend">Basic Info</legend>

          <label className="label">Job Title</label>
          <input
            type="text"
            name="title"
            className="input"
            placeholder="Job Title"
          />

          <label className="label">Company</label>
          <input
            type="text"
            name="company"
            className="input"
            placeholder="Company Name"
          />

          <label className="label">Location</label>
          <input
            type="text"
            name="location"
            className="input"
            placeholder="Company Location"
          />

          <label className="label">Company Logo</label>
          <input
            type="text"
            name="company_logo"
            className="input"
            placeholder="Company Logo URL"
          />
        </fieldset>

        {/* Job type */}
        <fieldset className="fieldset bg-base-200 border-base-300 rounded-box w-xs border p-4">
          <legend className="fieldset-legend">Job Type</legend>
          <div className="filter">
            <input
              className="btn filter-reset"
              type="radio"
              name="jobType"
              aria-label="On-Site"
            />
            <input
              className="btn"
              type="radio"
              name="jobType"
              aria-label="Remote"
            />
            <input
              className="btn"
              type="radio"
              name="jobType"
              aria-label="Hybrid"
            />
            <input
              className="btn"
              type="radio"
              name="jobType"
              aria-label="Next.js"
            />
          </div>
        </fieldset>
        {/* Job Category */}
        <fieldset className="fieldset bg-base-200 border-base-300 rounded-box w-xs border p-4">
          <legend className="fieldset-legend">Job Category</legend>
          <select
            defaultValue="Job Category"
            name="category"
            className="select"
          >
            <option disabled={true}>Job Category</option>
            <option>Engineering</option>
            <option>Marketing</option>
            <option>Finance</option>
          </select>
        </fieldset>
        {/* Application Deadline */}
        <fieldset className="fieldset bg-base-200 border-base-300 rounded-box w-xs border p-4">
          <legend className="fieldset-legend">Application Deadline</legend>
          <input type="date" className="input" />
        </fieldset>
        {/* Salary Range */}
        <fieldset className="fieldset bg-base-200 border-base-300 rounded-box w-xs border p-4">
          <legend className="fieldset-legend">Salary Range</legend>
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-4">
            <div>
                <label className="label">Minimum Salary</label>
            <input
              type="text"
              name="salaryMin"
              className="input"
              placeholder="Minimum Salary"
            />
            </div>

            <div>
                <label className="label">Maximum Salary</label>
            <input
              type="text"
              name="salaryMax"
              className="input"
              placeholder="Maximum Salary"
            />
            </div>
            <div>
                
            <label className="label">Currency</label>
            <select
              defaultValue="Select a Currency"
              name="category"
              className="select"
            >
              <option disabled={true}>Select a Currency</option>
              <option>BDT</option>
              <option>USD</option>
              <option>Euro</option>
            </select>
            </div>
          </div>
        </fieldset>
        {/*  */}
        <fieldset className="fieldset bg-base-200 border-base-300 rounded-box w-xs border p-4">
          <legend className="fieldset-legend">Basic Info</legend>
        </fieldset>
        {/*  */}
        <fieldset className="fieldset bg-base-200 border-base-300 rounded-box w-xs border p-4">
          <legend className="fieldset-legend">Basic Info</legend>
        </fieldset>
      </form>
    </div>
  );
};

export default AddJob;
