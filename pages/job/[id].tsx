import { useRouter } from 'next/router';
import { useEffect, useState } from 'react';

interface Job {
  _id: string;
  title: string;
  company: string;
  location: string;
  description: string;
  logoUrl: string;
}

const JobDetails = () => {
  const { query, push } = useRouter();
  const [job, setJob] = useState<Job | null>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    if (query.id) {
      fetch(`/api/jobs/${query.id}`)
        .then((res) => res.json())
        .then((data) => {
          setJob(data);
          setLoading(false);
        })
        .catch(() => setLoading(false));
    }
  }, [query.id]);

  if (loading) return <p className="text-center mt-6">Loading...</p>;
  if (!job) return <p className="text-center mt-6 text-red-500">Job not found.</p>;

  return (
    <div className="min-h-screen bg-gradient-to-r from-blue-100 via-blue-200 to-blue-300 p-6">
      <div className="max-w-4xl mx-auto">
        <button
          onClick={() => push('/')}
          className="bg-blue-500 text-white px-6 py-2 rounded-md mb-6 hover:bg-blue-600 transition-all"
        >
          Back to Jobs
        </button>

        <div className="p-8 border border-gray-300 rounded-lg shadow-lg bg-white space-y-6">
          {/* Render the logo if it exists */}
          {job.logoUrl ? (
            <img
              src={job.logoUrl}
              alt={`${job.company} logo`}
              className="h-32 w-32 rounded-full mx-auto mb-6"
            />
          ) : (
            <div className="h-32 w-32 rounded-full bg-gray-300 mx-auto mb-6" />
          )}

          <h1 className="text-4xl font-extrabold text-blue-700">{job.title}</h1>
          <p className="text-xl font-semibold text-blue-600">{job.company}</p>
          <p className="text-lg text-gray-500">{job.location}</p>
          <p className="text-gray-700 mt-4">{job.description}</p>
        </div>
      </div>
    </div>
  );
};

export default JobDetails;
