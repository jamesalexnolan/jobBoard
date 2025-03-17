import Link from "next/link";

interface JobProps {
  _id: string;
  title: string;
  company: string;
  location: string;
  description: string;
  logoUrl: string;
}

const JobCard: React.FC<JobProps> = ({
  _id,
  title,
  company,
  location,
  description,
  logoUrl,
}) => {
  return (
    <div className="bg-white p-6 rounded-lg shadow-lg hover:shadow-xl transition-shadow duration-300">
      {logoUrl ? (
        <img
          src={logoUrl}
          alt={`${company} logo`}
          className="h-16 w-16 rounded-full mx-auto mb-4"
        />
      ) : (
        <div className="h-16 w-16 rounded-full bg-gray-300 mx-auto mb-4" />
      )}
      <h2 className="text-xl font-semibold text-gray-800 mb-2">{title}</h2>
      <p className="text-sm text-gray-600 mb-2">{company}</p>
      <p className="text-sm text-gray-500 mb-4">{location}</p>
      <p className="text-sm text-gray-500 mb-4">{description}</p>

      <Link href={`/job/${_id}`}>
        <button className="w-full bg-blue-500 text-white py-2 rounded-lg hover:bg-blue-600 transition-all duration-300">
          View Details
        </button>
      </Link>
    </div>
  );
};

export default JobCard;