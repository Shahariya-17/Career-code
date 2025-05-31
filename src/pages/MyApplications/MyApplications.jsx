import React, { Suspense } from 'react';
import ApplicationsStat from './ApplicationsStat';
import ApplicationList from './ApplicationList';
import useAuth from '../../hooks/useAuth';
import { myApplicationsPromise } from '../../api/applicationsApi';



const MyApplications = () => {

    const {user} = useAuth();
    return (
        <div>
            <ApplicationsStat></ApplicationsStat>
           <Suspense fallback={'Loading your applications'}>
             <ApplicationList></ApplicationList>
           </Suspense>
        </div>
    );
};

export default MyApplications;