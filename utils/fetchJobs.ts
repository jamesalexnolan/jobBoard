export const fetchJobs = async () => {
    const API_URL = process.env.NEXT_PUBLIC_API_URL || 'http://localhost:3000';
  
    const res = await fetch(`${API_URL}/api/jobs`);
    if (!res.ok) throw new Error('Failed to fetch jobs');
    return res.json();
  };
