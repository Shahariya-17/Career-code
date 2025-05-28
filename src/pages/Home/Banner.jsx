import React from "react";
import { motion } from "motion/react";

const Banner = () => {
  return (
    <div className="hero bg-base-200 min-h-screen">
      <div className="hero-content flex-col lg:flex-row-reverse">
        <img
          src="https://img.daisyui.com/images/stock/photo-1635805737707-575885ab0820.webp"
          className="max-w-sm rounded-lg shadow-2xl"
        />
        <div>
          <motion.h1
          animate={{
            rotate: 180,
            transition: {duration: 4}
        }}
           className="text-5xl font-bold">Latest Jobs for you!</motion.h1>
          <motion.h1
            initial={{scale:0}}
            animate= {{scale:1, transition:{duration:4}}}
           className="text-5xl font-bold">Remote  <motion.span
            animate={
                {
                    color: ['#ff5733', '#6eff33', '#33fff0 ', '#3368ff'],
                    transition:{duration:2 , repeat:Infinity}
                }
            }
           >Jobs</motion.span> for you!</motion.h1>
          <p className="py-6">
            Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda
            excepturi exercitationem quasi. In deleniti eaque aut repudiandae et
            a id nisi.
          </p>
          <button className="btn btn-primary">Get Started</button>
        </div>
      </div>
    </div>
  );
};

export default Banner;
