import type { NextApiRequest, NextApiResponse } from 'next';
import { connectDB } from '@/utils/db';
import Job from '@/models/Job';

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  await connectDB();

  const { id } = req.query;

  try {
    const job = await Job.findById(id);
    if (!job) {
      return res.status(404).json({ error: 'Job not found' });
    }
    return res.status(200).json(job);
  } catch (error) {
    return res.status(400).json({ error: 'Invalid job ID' });
  }
}