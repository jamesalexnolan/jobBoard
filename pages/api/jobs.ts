import { NextApiRequest, NextApiResponse } from 'next';
import { connectDB } from '@/utils/db';
import Job from '@/models/Job';

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  await connectDB();

  if (req.method === 'GET') {
    const jobs = await Job.find();
    return res.status(200).json(jobs);
  }

  if (req.method === 'POST') {
    const { title, company, location, description, logoUrl } = req.body;

    // Validate the fields
    if (!title || !company || !location || !description || !logoUrl) {
      return res.status(400).json({ error: 'Missing fields' });
    }

    const newJob = new Job({
      title,
      company,
      location,
      description,
      logoUrl,
    });

    await newJob.save();
    return res.status(201).json(newJob);
  }

  return res.status(405).json({ error: 'Method Not Allowed' });
}