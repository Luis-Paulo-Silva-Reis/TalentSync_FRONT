//app.ts
import React from "react";
import { useFetchJobs } from "../services/fetchJobs";

function Jobs(): JSX.Element {
  const [data, loading, error] = useFetchJobs();

  if (loading) {
    return <p>Loading...</p>;
  }

  if (error) {
    return <p>Error fetching data: {error}</p>;
  }

  return (
    <>
      <p>Let's do it talent sync</p>
      {data != null && (
        <div>
          {data.map((item, index) => (
            <p key={index}>{item.profissao}</p>
          ))}
        </div>
      )}
    </>
  );
}

export default Jobs;
