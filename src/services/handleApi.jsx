import axios from "axios";

const baseURL = "http://localhost:5000/api/user";

export const adduser = async (fromData) => {
  try {
    const response = await axios.post(`${baseURL}/add`, fromData);
    return response.data;
  } catch (error) {
    return error;
  }
};

export const getAllUser = async () => {
  try {
    const response = await axios.get(`${baseURL}/all`);
    return response.data;
  } catch (error) {
    return error;
  }
};
