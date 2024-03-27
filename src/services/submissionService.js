// submissionService.js
import axios from "axios";
import { generateRandomHexId } from "../utils/idGenerator";

const submitFormData = async (formData) => {
  const tempId = generateRandomHexId(); 
  const dataWithId = { ...formData, id: tempId };

  return axios.post("http://localhost:5162/Persons/create", dataWithId);
};

export default submitFormData;
