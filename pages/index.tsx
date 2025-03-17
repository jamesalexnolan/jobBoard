import { useEffect, useState } from 'react';
import JobCard from '../components/JobCard';
import JobForm from '../components/JobForm';
import '../styles/globals.css'; 

interface JobProps {
  _id: string;
  title: string;
  company: string;
  location: string;
  description: string;
  logoUrl: string;
}

const Home = () => {
  const [jobs, setJobs] = useState<JobProps[]>([]);

  const fetchJobs = async () => {
    const res = await fetch('/api/jobs');
    const data = await res.json();
    setJobs(data.map((job: JobProps) => ({ ...job, logoUrl: job.logoUrl || '/default-logo.png' })));
  };

  useEffect(() => {
    fetchJobs();
  }, []);

  return (
    <div className="min-h-screen bg-gray-100 flex flex-col items-center p-6">
      <h1 className="text-4xl font-bold text-gray-800 mb-6">Job Listings</h1>
      <JobForm onJobCreated={fetchJobs} />
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 w-full max-w-5xl mt-6">
        {jobs.length === 0 ? (
          <p className="text-gray-600">No jobs found.</p>
        ) : (
          jobs.map((job) => <JobCard key={job._id} {...job} />)
        )}
      </div>
    </div>
  );
};

export default Home;