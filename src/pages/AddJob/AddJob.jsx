import React from "react";

const AddJob = () => {
  return (
    <div>
      <h2 className="text-4xl font-bold text-center mb-5">Please Add a Job</h2>
      <form className=" justify-center items-center">
        <fieldset className="fieldset bg-base-200 border-base-300 rounded-box w-full border p-4">
          <legend className="fieldset-legend">Basic Info</legend>

          <label className="label">Job Title</label>
          <input
            type="text"
            name="title"
            className="input w-full"
            placeholder="Job Title"
          />

          <label className="label">Company</label>
          <input
            type="text"
            name="company"
            className="input w-full"
            placeholder="Company Name"
          />

          <label className="label">Location</label>
          <input
            type="text"
            name="location"
            className="input w-full"
            placeholder="Company Location"
          />

          <label className="label">Company Logo</label>
          <input
            type="text"
            name="company_logo"
            className="input w-full"
            placeholder="Company Logo URL"
          />
        </fieldset>

        {/* Job type */}
        <fieldset className="fieldset bg-base-200 border-base-300 rounded-box w-full border p-4">
          <legend className="fieldset-legend w-full">Job Type</legend>
          <div className="filter w-full">
            <input
              className="btn filter-reset w-full"
              type="radio"
              name="jobType"
              aria-label="On-Site"
            />
            <input
              className="btn w-full"
              type="radio"
              name="jobType"
              aria-label="Remote"
            />
            <input
              className="btn w-full"
              type="radio"
              name="jobType"
              aria-label="Hybrid"
            />
            <input
              className="btn w-full"
              type="radio"
              name="jobType"
              aria-label="Next.js"
            />
          </div>
        </fieldset>
        {/* Job Category */}
        <fieldset className="fieldset bg-base-200 border-base-300 rounded-box w-full border p-4">
          <legend className="fieldset-legend">Job Category</legend>
          <select
            defaultValue="Job Category"
            name="category"
            className="select w-full"
          >
            <option disabled={true}>Job Category</option>
            <option>Engineering</option>
            <option>Marketing</option>
            <option>Finance</option>
          </select>
        </fieldset>
        {/* Application Deadline */}
        <fieldset className="fieldset bg-base-200 border-base-300 rounded-box w-full border p-4">
          <legend className="fieldset-legend">Application Deadline</legend>
          <input type="date" className="input w-full" />
        </fieldset>
        {/* Salary Range */}
        <fieldset className="fieldset bg-base-200 border-base-300 rounded-box w-full border p-4">
          <legend className="fieldset-legend">Salary Range</legend>
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-4">
            <div>
                <label className="label">Minimum Salary</label>
            <input
              type="text"
              name="max"
              className="input w-full"
              placeholder="Minimum Salary"
            />
            </div>

            <div>
                <label className="label">Maximum Salary</label>
            <input
              type="text"
              name="max"
              className="input w-full"
              placeholder="Maximum Salary"
            />
            </div>
            <div>
                
            <label className="label">Currency</label>
            <select
              defaultValue="Select a Currency"
              name="currency"
              className="select w-full"
            >
              <option disabled={true}>Select a Currency</option>
              <option>BDT</option>
              <option>USD</option>
              <option>Euro</option>
            </select>
            </div>
          </div>
        </fieldset>
        {/*Job Description  */}
        <fieldset className="fieldset bg-base-200 border-base-300 rounded-box w-full border p-4">
          <legend className="fieldset-legend">Job Description</legend>
          <textarea className="textarea w-full" name="description" placeholder="Job Description"></textarea>
        </fieldset>
        {/* Job Requirements */}
        <fieldset className="fieldset bg-base-200 border-base-300 rounded-box w-full border p-4">
          <legend className="fieldset-legend">Job Requirements</legend>
           <textarea className="textarea w-full" name="requirements" placeholder="Requirements (separate by comma"></textarea>
        </fieldset>
         {/* Job Responsibilities */}
        <fieldset className="fieldset bg-base-200 border-base-300 rounded-box w-full border p-4">
          <legend className="fieldset-legend">Job Responsibilities</legend>
           <textarea className="textarea w-full" name="responsibilities" placeholder="Responsibilities (separate by comma"></textarea>
        </fieldset>
        {/* HR Related */}
        <fieldset className="fieldset bg-base-200 border-base-300 rounded-box w-full border p-4">
          <legend className="fieldset-legend">HR Related Info</legend>

          <label className="label w-full">HR Name</label>
          <input
            type="text"
            name="hr_name"
            className="input w-full"
            placeholder="HR Name"
          />

          <label className="label w-full">HR Email</label>
          <input
            type="email"
            name="hr_email"
            className="input w-full"
            placeholder="HR Email"
          />
        </fieldset>
        <input className="btn btn-outline w-full" type="submit" value="Add Job" />
      </form>
    </div>
  );
};

export default AddJob;
