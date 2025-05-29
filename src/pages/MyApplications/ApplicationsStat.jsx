import React from "react";

const ApplicationsStat = () => {
  return (
    <div className="flex justify-center items-center min-h-[50vh] bg-gradient-to-br from-blue-100 via-purple-100 to-pink-100 py-10 px-4">
      <div className="stats bg-white/30 backdrop-blur-lg rounded-2xl shadow-xl p-6 gap-6 transition-transform hover:scale-[1.01] duration-300 w-full max-w-4xl">
        {/* Stat 1 */}
        <div className="stat hover:bg-white/40 hover:shadow-md rounded-xl p-4 transition duration-300">
          <div className="stat-figure text-primary">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              className="inline-block h-8 w-8 stroke-current"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z"
              />
            </svg>
          </div>
          <div className="stat-title text-gray-700 font-medium">Total Likes</div>
          <div className="stat-value text-primary font-bold">25.6K</div>
          <div className="stat-desc text-gray-600">21% more than last month</div>
        </div>

        {/* Stat 2 */}
        <div className="stat hover:bg-white/40 hover:shadow-md rounded-xl p-4 transition duration-300">
          <div className="stat-figure text-secondary">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              className="inline-block h-8 w-8 stroke-current"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M13 10V3L4 14h7v7l9-11h-7z"
              />
            </svg>
          </div>
          <div className="stat-title text-gray-700 font-medium">Page Views</div>
          <div className="stat-value text-secondary font-bold">2.6M</div>
          <div className="stat-desc text-gray-600">21% more than last month</div>
        </div>

        {/* Stat 3 */}
        <div className="stat hover:bg-white/40 hover:shadow-md rounded-xl p-4 transition duration-300">
          <div className="stat-figure text-secondary">
            <div className="avatar avatar-online">
              <div className="w-16 rounded-full ring ring-white ring-offset-base-100 ring-offset-2">
                <img src="https://img.daisyui.com/images/profile/demo/anakeen@192.webp" />
              </div>
            </div>
          </div>
          <div className="stat-value font-bold">86%</div>
          <div className="stat-title text-gray-700 font-medium">Tasks done</div>
          <div className="stat-desc text-gray-600">31 tasks remaining</div>
        </div>
      </div>
    </div>
  );
};

export default ApplicationsStat;
