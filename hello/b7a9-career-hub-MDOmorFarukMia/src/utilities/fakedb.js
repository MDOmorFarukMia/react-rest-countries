// use local storage to manage cart data
const addToDb = id => {
    let appliedJobs = getAppliedJob();
    // add quantity
    const quantity = appliedJobs[id];
    if (!quantity) {
        appliedJobs[id] = 1;
    }
    else {
        alert(`Job ${id} already applied`)
        //toest
        return
    }
    localStorage.setItem('applied-jobs', JSON.stringify(appliedJobs));
}

const removeFromDb = id => {
    const appliedJob = getAppliedJob();
    if (id in appliedJob) {
        delete appliedJob[id];
        localStorage.setItem('applied-jobs', JSON.stringify(appliedJob));
    }
}

const getAppliedJob = () => {
    let AppliedJob = {};

    //get the shopping cart from local storage
    const storedCart = localStorage.getItem('applied-jobs');
    if (storedCart) {
        AppliedJob = JSON.parse(storedCart);
    }
    return AppliedJob;
}

const deleteAppliedJobsAll = () => {
    localStorage.removeItem('shopping-cart');
}

export {
    addToDb,
    removeFromDb,
    getAppliedJob,
    deleteAppliedJobsAll
}