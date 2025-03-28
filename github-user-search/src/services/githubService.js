import axios from 'axios';

const GITHUB_API_BASE_URL = 'https://api.github.com';
//If you needed a personal access token for higher rate limits.
//const GITHUB_API_TOKEN = import.meta.env.VITE_APP_GITHUB_API_KEY;

export const fetchUserRepositories = async (username) => {
  try {
    const response = await axios.get(`${GITHUB_API_BASE_URL}/users/${username}/repos`);
    return response.data;
  } catch (error) {
    console.error('Error fetching repositories:', error);
    throw error; // Rethrow the error for handling in components
  }
};