import React from "react";
import { Link, useParams } from "react-router";
import useAuth from "../../hooks/useAuth";

const JobApply = () => {
  const { id: jobId } = useParams();
  const { user } = useAuth();
  console.log(jobId, user);

  const handleApplyFormSubmit = e =>{
    e.preventDefault();
    const form = e.target;
    const linkedIn = form.linkedIn.value;
    const github = form.github.value;
    const resume = form.resume.value;
    console.log(linkedIn, github, resume)
  }

  return (
    <>
      <div className="apply-page-bg min-h-screen flex items-center justify-center p-4 relative overflow-hidden">
        <div className="apply-card animated-card w-full max-w-md p-8 border border-white/20">
          <h1 className="text-4xl font-extrabold text-center text-white drop-shadow-xl mb-6 tracking-wide">
            Apply for this Job: <Link className="text-2xl btn" to={`/jobs/${jobId}`}>Details</Link>
          </h1>
          <form onSubmit={handleApplyFormSubmit} className="space-y-6">
            <div>
              <label className="block font-semibold mb-2 text-white">LinkedIn Link</label>
              <input
                type="url"
                name="linkedIn"
                className="w-full rounded-lg px-4 py-2 bg-white/80 text-gray-800 placeholder-gray-500 shadow-inner focus:outline-none focus:ring-2 focus:ring-blue-400 transition"
                placeholder="LinkedIn Profile Link"
              />
            </div>
            <div>
              <label className="block font-semibold mb-2 text-white">Github</label>
              <input
                type="url"
                name="github"
                className="w-full rounded-lg px-4 py-2 bg-white/80 text-gray-800 placeholder-gray-500 shadow-inner focus:outline-none focus:ring-2 focus:ring-blue-400 transition"
                placeholder="Github Link"
              />
            </div>
            <div>
              <label className="block font-semibold mb-2 text-white">Resume Link</label>
              <input
                type="url"
                name="resume"
                className="w-full rounded-lg px-4 py-2 bg-white/80 text-gray-800 placeholder-gray-500 shadow-inner focus:outline-none focus:ring-2 focus:ring-blue-400 transition"
                placeholder="Resume Link"
              />
            </div>
            <div className="text-center">
              <input
                className="w-full py-2 px-4 rounded-lg bg-gradient-to-r from-blue-500 to-indigo-600 text-white font-bold hover:from-indigo-500 hover:to-blue-500 transition duration-300 cursor-pointer shadow-lg hover:shadow-xl"
                type="submit"
                value="Apply"
              />
            </div>
          </form>
        </div>
      </div>

      {/* Embedded Styles */}
      <style>
        {`
          .apply-page-bg {
            background: linear-gradient(120deg, #0f2027, #203a43, #2c5364);
            background-size: 200% 200%;
            animation: gradientAnimation 15s ease infinite;
          }

          @keyframes gradientAnimation {
            0% { background-position: 0% 50%; }
            50% { background-position: 100% 50%; }
            100% { background-position: 0% 50%; }
          }

          .apply-card {
            background: rgba(255, 255, 255, 0.12);
            backdrop-filter: blur(20px);
            -webkit-backdrop-filter: blur(20px);
            border-radius: 20px;
            box-shadow: 0 10px 40px rgba(0, 0, 0, 0.4);
            border: 1px solid rgba(255, 255, 255, 0.2);
            transition: all 0.5s ease;
          }

          .animated-card {
            animation: floatCard 7s ease-in-out infinite;
          }

          @keyframes floatCard {
            0%, 100% {
              transform: translateY(0px) rotate(0deg);
            }
            50% {
              transform: translateY(-6px) rotate(0.3deg);
            }
          }

          .apply-card:hover {
            transform: scale(1.03);
            box-shadow: 0 20px 50px rgba(255, 255, 255, 0.3);
          }
        `}
      </style>
    </>
  );
};

export default JobApply;
