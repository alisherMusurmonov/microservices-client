import { ENDPOINTS } from '../constants';
import axios from '../utils/axios';
const baseURL = ENDPOINTS.GATEWAY + 'documents';

export const fetchDocuments = async () => {
  try {
    const res = await axios.get(baseURL);
    return res.data;
  } catch (error) {
    throw new Error(error.message);
  }
}

export const searchDocuments = async (title) => {
  try {
    const res = await axios.get(`${baseURL}/search?title=${title}`);
    return res.data;
  } catch (error) {
    throw new Error(error.message);
  }
}

export const fetchDocumentsByUserId = async (id) => {
  try {
    if (!id) {
      throw new Error('User id is required to fetch data');
    }
    const res = await axios.get(`${baseURL}/user/${id}`);
    return res.data;
  } catch (error) {
    throw new Error(error.message);
  }
}

export const createDocument = async (data) => {
  try {
    const res = await axios.post(baseURL, data);
    return res.data;
  } catch (error) {
    throw new Error(error.message);
  }
}