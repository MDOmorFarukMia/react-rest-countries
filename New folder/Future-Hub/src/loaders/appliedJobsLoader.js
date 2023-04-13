import { getAppliedJob } from "../utilities/fakedb";

const appliedJobsLoader = async () => {
    const loadedJobs = await fetch('jobs.json');
    const jobs = await loadedJobs.json();
    // console.log(jobs);

    // if cart data is in database, you have to use async await
    const storedJobs = getAppliedJob();

    const savedJobs = [];

    for (const id in storedJobs) {
        const appliedJob = jobs.find(pd => pd.id.toString() === id);
        if (appliedJob) {
            // alert('Application')
            // const quantity = storedJobs[id];
            // appliedJob.quantity = quantity;
            savedJobs.push(appliedJob);
        }
    }

    // if you need to send two things
    // return [products, savedCart]
    // another options
    // return { products, cart: savedCart }

    return savedJobs;
}

export default appliedJobsLoader;