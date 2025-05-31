import React, { Suspense } from 'react';
import useAuth from '../../hooks/useAuth';
import JobList from './JobList';
import { jobsCreatedByPromise } from '../../api/jobsApi';

const MyPostedJobs = () => {

    const {user} = useAuth();
    return (
        <div>
            <h2 className='text-4xl font-bold text-center'>My Posted Jobs</h2>
            <Suspense>
                <JobList jobsCreatedByPromise={jobsCreatedByPromise(user.email)}></JobList>
            </Suspense>
        </div>
    );
};

export default MyPostedJobs;