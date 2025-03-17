import { useState } from "react";

type JobFormProps = {
  onJobCreated: () => void;
};

const JobForm: React.FC<JobFormProps> = ({ onJobCreated }) => {
  const [title, setTitle] = useState("");
  const [company, setCompany] = useState("");
  const [location, setLocation] = useState("");
  const [description, setDescription] = useState("");
  const [logoUrl, setLogoUrl] = useState(""); 

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    const newJob = { title, company, location, description, logoUrl };

    const res = await fetch("/api/jobs", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(newJob),
    });

    if (res.ok) {
      onJobCreated();
    }
  };

  return (
    <form onSubmit={handleSubmit} className="bg-white p-6 rounded-lg shadow-lg">
      <h2 className="text-xl font-semibold mb-4">Add a Job</h2>
      <input
        type="text"
        value={title}
        onChange={(e) => setTitle(e.target.value)}
        placeholder="Job Title"
        className="w-full p-2 mb-2 border rounded"
      />
      <input
        type="text"
        value={company}
        onChange={(e) => setCompany(e.target.value)}
        placeholder="Company Name"
        className="w-full p-2 mb-2 border rounded"
      />
      <input
        type="text"
        value={location}
        onChange={(e) => setLocation(e.target.value)}
        placeholder="Location"
        className="w-full p-2 mb-2 border rounded"
      />
      <textarea
        value={description}
        onChange={(e) => setDescription(e.target.value)}
        placeholder="Job Description"
        className="w-full p-2 mb-2 border rounded"
      />
      <input
        type="text"
        value={logoUrl}
        onChange={(e) => setLogoUrl(e.target.value)}
        placeholder="Company Logo URL"
        className="w-full p-2 mb-2 border rounded"
      />
      <button type="submit" className="w-full bg-blue-500 text-white p-2 rounded mt-4">
        Add Job
      </button>
    </form>
  );
};

export default JobForm;