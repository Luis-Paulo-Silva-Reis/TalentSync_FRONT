//jobDto.ts
export interface JobData {
  profissao: string;
  tipo: string;
  level: string;
  localDeTrabalho: string;
  pcd: string;
  
}

export interface JobWithPhotoCardProps {
  job: JobData; 
}
