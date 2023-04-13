import React from 'react'
import HomeBanner from '../Components/HomeBanner/HomeBanner'
import JobCategoryList from '../Components/JobCategoryList/JobCategoryList'
import FeaturedJobs from '../Components/FeaturedJobs/FeaturedJobs'
import { useLoaderData } from 'react-router-dom'

const HomePage = () => {
    const category = useLoaderData()
    console.log(category);
  return (
   <>
        <HomeBanner></HomeBanner>
        {
          category.length > 0 && <JobCategoryList category={category} ></JobCategoryList>
        }
        
        <FeaturedJobs></FeaturedJobs>
   
   </>
  )
}

export default HomePage