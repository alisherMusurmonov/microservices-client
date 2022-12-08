import { ENDPOINTS } from '../constants';
import axios from '../utils/axios';
const baseURL = ENDPOINTS.GATEWAY + 'users';

export const fetchUsers = async () => {
  try {
    const res = await axios.get(baseURL);
    return res.data;
  } catch (error) {
    throw new Error(error.message);
  }
}

export const fetchUserById = async (id) => {
  try {
    if (!id) {
      throw new Error('User id is required to fetch data');
    }
    const res = await axios.get(`${baseURL}/${id}`);
    return res.data;
  } catch (error) {
    throw new Error(error.message);
  }
}

export const createUser = async (data) => {
  try {
    const res = await axios.post(baseURL, data);
    return res.data;
  } catch (error) {
    throw new Error(error.message);
  }
}