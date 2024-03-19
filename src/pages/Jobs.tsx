import React from "react";
import CardList from "../components/CardList";
import FormSearchJob from "../components/FormSearchJob";
import "../styles/Jobs.css";
function Jobs() {
  return (
    <div className="Jobs">
      <div className="JobsTeste">
        <FormSearchJob className={"Jobs-form-jobs"} />
      </div>
      <div className="JobsTesteCards">
        <CardList />
      </div>
    </div>
  );
}

export default Jobs;
