import React from "react";
import useAuth from "../../hooks/useAuth";
import axios from "axios";
import Swal from "sweetalert2";

const AddJob = () => {
  const { user } = useAuth();

  const handleAddAJob = (e) => {
    e.preventDefault();
    const form = e.target;
    const formData = new FormData(form);
    const data = Object.fromEntries(formData.entries());

    const { min, max, currency, ...newJob } = data;
    newJob.salaryRange = { min, max, currency };
    newJob.requirements = newJob.requirements.split(",").map((req) => req.trim());
    newJob.responsibilities = newJob.responsibilities.split(",").map((res) => res.trim());
    newJob.status = "active";

    axios
      .post("http://localhost:3000/jobs", newJob)
      .then((res) => {
        if (res.data.insertedId) {
          Swal.fire({
            position: "top-end",
            icon: "success",
            title: "This new job has been saved",
            showConfirmButton: false,
            timer: 1500,
          });
        }
      })
      .catch((error) => {
        console.log(error);
      });
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-indigo-100 via-white to-indigo-200 px-4 py-12 animate-fade-in">
      <h2 className="text-5xl font-extrabold text-center mb-12 text-indigo-800 drop-shadow-md tracking-wide">
         Post a New Job
      </h2>
      <form
        onSubmit={handleAddAJob}
        className="max-w-4xl mx-auto space-y-10 bg-white p-10 rounded-3xl shadow-2xl border border-indigo-100"
      >
        {/* Basic Info */}
        <fieldset className="bg-indigo-50 border border-indigo-200 rounded-2xl p-6">
          <legend className="text-lg font-semibold text-indigo-600 px-2">Basic Info</legend>
          <div className="space-y-4 mt-4">
            <input type="text" name="title" required className="input input-bordered w-full" placeholder="Job Title" />
            <input type="text" name="company" required className="input input-bordered w-full" placeholder="Company Name" />
            <input type="text" name="location" required className="input input-bordered w-full" placeholder="Company Location" />
            <input type="text" name="company_logo" required className="input input-bordered w-full" placeholder="Company Logo URL" />
          </div>
        </fieldset>

        {/* Job Type */}
        <fieldset className="bg-indigo-50 border border-indigo-200 rounded-2xl p-6">
          <legend className="text-lg font-semibold text-indigo-600 px-2">Job Type</legend>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mt-4">
            {["On-Site", "Remote", "Hybrid", "Contract"].map((type) => (
              <label key={type} className="btn btn-outline normal-case w-full cursor-pointer">
                <input type="radio" name="jobType" required value={type} className="hidden peer" />
                <span className="block w-full text-center py-2 rounded-xl peer-checked:bg-indigo-600 peer-checked:text-white peer-checked:border-indigo-600">
                  {type}
                </span>
              </label>
            ))}
          </div>
        </fieldset>

        {/* Job Category */}
        <fieldset className="bg-indigo-50 border border-indigo-200 rounded-2xl p-6">
          <legend className="text-lg font-semibold text-indigo-600 px-2">Job Category</legend>
          <select name="category" required defaultValue="" className="select select-bordered w-full mt-4">
            <option disabled value="">Select a Category</option>
            <option>Engineering</option>
            <option>Marketing</option>
            <option>Finance</option>
          </select>
        </fieldset>

        {/* Application Deadline */}
        <fieldset className="bg-indigo-50 border border-indigo-200 rounded-2xl p-6">
          <legend className="text-lg font-semibold text-indigo-600 px-2">Application Deadline</legend>
          <input type="date" name="deadline" required className="input input-bordered w-full mt-4" />
        </fieldset>

        {/* Salary Range */}
        <fieldset className="bg-indigo-50 border border-indigo-200 rounded-2xl p-6">
          <legend className="text-lg font-semibold text-indigo-600 px-2">Salary Range</legend>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mt-4">
            <input type="text" name="min" required className="input input-bordered w-full" placeholder="Minimum Salary" />
            <input type="text" name="max" required className="input input-bordered w-full" placeholder="Maximum Salary" />
            <select name="currency" required defaultValue="" className="select select-bordered w-full">
              <option disabled value="">Select Currency</option>
              <option>BDT</option>
              <option>USD</option>
              <option>Euro</option>
            </select>
          </div>
        </fieldset>

        {/* Job Description */}
        <fieldset className="bg-indigo-50 border border-indigo-200 rounded-2xl p-6">
          <legend className="text-lg font-semibold text-indigo-600 px-2">Job Description</legend>
          <textarea name="description" required className="textarea textarea-bordered w-full mt-4" rows="4" placeholder="Describe the job..."></textarea>
        </fieldset>

        {/* Job Requirements */}
        <fieldset className="bg-indigo-50 border border-indigo-200 rounded-2xl p-6">
          <legend className="text-lg font-semibold text-indigo-600 px-2">Job Requirements</legend>
          <textarea name="requirements" required className="textarea textarea-bordered w-full mt-4" rows="4" placeholder="List requirements (comma-separated)"></textarea>
        </fieldset>

        {/* Job Responsibilities */}
        <fieldset className="bg-indigo-50 border border-indigo-200 rounded-2xl p-6">
          <legend className="text-lg font-semibold text-indigo-600 px-2">Job Responsibilities</legend>
          <textarea name="responsibilities" required className="textarea textarea-bordered w-full mt-4" rows="4" placeholder="List responsibilities (comma-separated)"></textarea>
        </fieldset>

        {/* HR Info */}
        <fieldset className="bg-indigo-50 border border-indigo-200 rounded-2xl p-6">
          <legend className="text-lg font-semibold text-indigo-600 px-2">HR Contact Info</legend>
          <div className="space-y-4 mt-4">
            <input type="text" name="hr_name" required className="input input-bordered w-full" placeholder="HR Name" />
            <input type="email" name="hr_email" required defaultValue={user.email} className="input input-bordered w-full" placeholder="HR Email" />
          </div>
        </fieldset>

        {/* Submit Button */}
        <div className="text-center pt-4">
          <input
            type="submit"
            value="Add Job"
            className="btn btn-primary px-10 text-lg transition-all duration-300 transform hover:scale-105 hover:shadow-lg"
          />
        </div>
      </form>
    </div>
  );
};

export default AddJob;