//fetchJobs.ts
import { useEffect, useState } from "react";
import { JobData } from "../dtos/jobDto";
import axios, { AxiosError } from "axios";

async function fetchJobs(): Promise<JobData[]> {
  try {
    const response = await axios.get<JobData[]>("http://localhost:5162/jobs");
    return response.data;
  } catch (error) {
    if (axios.isAxiosError(error)) {
      const axiosError = error as AxiosError;
      throw new Error(axiosError.message);
    } else {
      throw new Error("An error occurred while fetching data.");
    }
  }
}

export function useFetchJobs(): [JobData[] | null, boolean, string | null] {
  const [data, setData] = useState<JobData[] | null>(null);
  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const jobs = await fetchJobs();
        setData(jobs);
      } catch (error: unknown) {
        setError((error as Error).message);
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, []);

  return [data, loading, error];
}
