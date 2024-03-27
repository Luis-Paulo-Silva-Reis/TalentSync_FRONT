// useRegistrationForm.js
import generateRandomHexId from '../utils/idGenerator'
import { useState } from 'react';
import axios from 'axios';
export const useRegistrationForm = (initialState) => {
    const [formData, setFormData] = useState(initialState);

    const handleChange = (e) => {
        setFormData({
            ...formData,
            [e.target.name]: e.target.value,
        });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();

        const tempId = generateRandomHexId();
        const dataWithId = { ...formData, id: tempId };

        console.log("Sending data:", dataWithId);

        try {
            const response = await axios.post(
                "http://localhost:5162/Persons/create",
                dataWithId
            );
            console.log("Response data:", response.data);
        } catch (error) {
            console.error("There was an error!", error.response ? error.response.data : error);
        }
    };

    return { formData, handleChange, handleSubmit };
};
