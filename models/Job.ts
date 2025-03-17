// import mongoose from 'mongoose';

// const jobSchema = new mongoose.Schema({
//   title: {
//     type: String,
//     required: true,
//   },
//   company: {
//     type: String,
//     required: true,
//   },
//   location: {
//     type: String,
//     required: true,
//   },
//   description: {
//     type: String,
//     required: true,
//   },
// });

// const Job = mongoose.models.Job || mongoose.model('Job', jobSchema);

// export default Job;

import mongoose, { Schema, Document } from "mongoose";

// Define the schema for a job
const JobSchema: Schema = new Schema({
  title: { type: String, required: true },
  company: { type: String, required: true },
  location: { type: String, required: true },
  description: { type: String, required: true },
  logoUrl: { type: String, required: true }, // Add logoUrl field
});

const JobModel = mongoose.models.Job || mongoose.model("Job", JobSchema);

export default JobModel;
