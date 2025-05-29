import React from 'react';
import Banner from './Banner';
import Category from './Category';
import Hiring from './Hiring';
import HotJobs from './HotJobs';

const Home = () => {

    const jobsPromise =fetch('http://localhost:3000/jobs').then(res =>res.json())

    
    return (
        <div>
            <Banner></Banner>
            <Category></Category>
            <Hiring></Hiring>
            <HotJobs jobsPromise={jobsPromise}></HotJobs>
        </div>
    );
};

export default Home;