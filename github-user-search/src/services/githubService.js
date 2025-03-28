import axios from 'axios';

const GITHUB_API_BASE_URL = 'https://api.github.com/search/users';

export const searchUsers = async (query) => {
  try {
    const response = await axios.get(`${GITHUB_API_BASE_URL}?q=${encodeURIComponent(query)}`);
    return response.data;
  } catch (error) {
    console.error('Error searching users:', error);
    throw error;
  }
};
