import React from "react";

const AddJob = () => {
  return (
    <div>
      <h2 className="text-4xl font-bold text-center mb-5">Please Add a Job</h2>
      <form className="flex justify-center items-center">
        <fieldset className="fieldset bg-base-200 border-base-300 rounded-box w-xs border p-4">
          <legend className="fieldset-legend">Login</legend>

          <label className="label">Email</label>
          <input type="email" className="input" placeholder="Email" />

          <label className="label">Password</label>
          <input type="password" className="input" placeholder="Password" />

          <button className="btn btn-neutral mt-4">Login</button>
        </fieldset>
      </form>
    </div>
  );
};

export default AddJob;
