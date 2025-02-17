import axios from 'axios';

// GET Request
const fetchData = async (endpoint, setter, headers = {}) => {
    try {
        const response = await axios.get( `${process.env.NEXT_PUBLIC_APP_URL}${endpoint}`, {
            headers: {
                ...headers, // Merging dynamic headers
            },
        });
        setter(response.data);
    } catch (error) {
        console.error("Error fetching data:", error);
    }
};


// POST Request
const postData = async (endpoint, data) => {
    try {
      const response = await axios.post(
        `${process.env.NEXT_PUBLIC_APP_URL}${endpoint}`,
        data,
        {
          headers: {
            'Content-Type': 'application/json',
          },
        }
      );
      return response.data;
    } catch (error) {
      console.error('Error posting data:', error);
      throw error;
    }
  };

// PATCH Request
const patchData = async (endpoint, data) => {
    try {
        const response = await axios.patch(`${process.env.NEXT_PUBLIC_DBJSON_URL}/${endpoint}`, data, {
            headers: {
                'Content-Type': 'application/json'
            }
        });
        return response.data;
    } catch (error) {
        console.error(error);
    }
};

// PUT Request
const putData = async (endpoint, data) => {
    try {
        const response = await axios.put(`${process.env.NEXT_PUBLIC_DBJSON_URL}/${endpoint}`, data, {
            headers: {
                'Content-Type': 'application/json'
            }
        });
        return response.data;
    } catch (error) {
        console.error(error);
    }
};

export { fetchData, postData, patchData, putData };
