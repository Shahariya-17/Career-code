export const myApplicationsPromise = (email) => {
  return fetch(`http://localhost:3000/applications?email=${email}`)
    .then(res => res.json())
    .catch(error => {
      console.error(error);
      throw error; // propagate the error if needed
    });
};