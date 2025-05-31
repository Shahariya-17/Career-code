import React, { use, useEffect, useState } from "react";
import JobApplicationRow from "./JobApplicationRow";
import { myApplicationsPromise } from "../../api/applicationsApi";
import useAuth from "../../hooks/useAuth";

const ApplicationList = () => {
    const { user } = useAuth();
  const [applications, setApplications] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    if (user?.email) {
      myApplicationsPromise(user.email)
        .then(data => setApplications(data))
        .catch(err => console.error(err))
        .finally(() => setLoading(false));
    }
  }, [user?.email]);

  if (loading) return <div>Loading...</div>;

  return (
    <div>
      <h3 className="text-4xl mb-5 font-bold text-center">Jobs applied so far : {applications.length}</h3>
      <div className="overflow-x-auto">
        <table className="table">
          {/* head */}
          <thead>
            <tr>
              <th>
                <label>
                  <input type="checkbox" className="checkbox" />
                </label>
              </th>
              <th>Name</th>
              <th>Job</th>
              <th>Favorite Color</th>
              <th></th>
            </tr>
          </thead>
          <tbody>
            {
                applications.map((application, index) => <JobApplicationRow
                    key={application._id}
                    index={index}
                    application={application}
                ></JobApplicationRow>)
            }
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default ApplicationList;
