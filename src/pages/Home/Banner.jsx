import React from "react";
import { motion } from "motion/react";
import team1 from '../../assets/team/developer (1).jpg'
import team2 from '../../assets/team/office.jpg'
import { CiSearch } from "react-icons/ci";

const Banner = () => {
  return (
    <div className="hero bg-base-200 min-h-96">
      <div className="hero-content flex-col lg:flex-row-reverse">
       <div className="flex-1">
         <motion.img
          src={team1}
          animate={{y:[100, 150, 100]}}
          transition={{duration:5, repeat:Infinity}}
          className="max-w-sm border-sky-400 border-s-8 border-b-8  rounded-t-[40px] rounded-br-[40px] shadow-2xl"
        />
         <motion.img
          src={team2}
          animate={{x:[100, 150, 100]}}
          transition={{duration:10, delay:5, repeat:Infinity}}
          className="max-w-sm border-sky-400 border-s-8 border-b-8  rounded-t-[40px] rounded-br-[40px] shadow-2xl"
        />
       </div>
        <div className="flex-1">
          {/* <motion.h1
          animate={{
            rotate: 180,
            transition: {duration: 4}
        }}
           className="text-5xl font-bold">Latest Jobs for you!</motion.h1> */}
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
          <input type="text" placeholder="Type here" className="input" />
          <button className="btn btn-primary"> <CiSearch size={20} className="font-bold" />Search</button>
        </div>
      </div>
    </div>
  );
};

export default Banner;
