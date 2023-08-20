// RollApi.js
const BASE_URL = 'http://localhost:3001'; // Replace with your API URL

export const fetchRollNumber = async () => {
    try {
        const response = await fetch(`${BASE_URL}/roll`);
        const data = await response.json();
        console.log("DEBUG: "+data)
        return data;
    } catch (error) {
        console.error('Error fetching roll number:', error);
        return null;
    }
};