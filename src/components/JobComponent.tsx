import React from "react";
import { JobWithPhotoCardProps } from "../dtos/jobDto";
import "../styles/JobComponent.css";

const JobComponent: React.FC<JobWithPhotoCardProps> = ({ job }) => {
  return (
    <div className="photo-card">
      <div className="info">
        <p>Profissão : {job.profissao}</p>
        <p>Tipo de profissional : {job.tipo}</p>
        <p>Level : {job.level}</p>
        <p>Local de trabalho: {job.localDeTrabalho}</p>
        <p>PCD ? {job.pcd}</p>
      </div>
      <button onClick={() => console.log("Acessar")}>Acessar</button>
      <div></div>
    </div>
  );
};

export default JobComponent;
