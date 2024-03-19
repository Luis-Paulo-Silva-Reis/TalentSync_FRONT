import React from "react";
import JobWithPhotoCardComponent from "./JobComponent";
import "../styles/CardList.css";

import { useFetchJobs } from "../services/fetchJobs";

const CardList: React.FC = () => {
  const [data, loading, error] = useFetchJobs();

  if (loading) {
    return <p>Loading...</p>;
  }

  if (error) {
    return <p>Error fetching data: {error}</p>;
  }

  return (
    <div className="card-list">
      {data ? (
        data.map((jobData, index) => (
          <JobWithPhotoCardComponent key={index} job={jobData} />
        ))
      ) : (
        <p>{loading}</p>
      )}
    </div>
  );
};

export default CardList;
