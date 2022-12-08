import Axios from 'axios';
import { ENDPOINTS } from '../constants';

const axios = Axios.create({
  baseURL: ENDPOINTS.GATEWAY,
  withCredentials: true,
});

export default axios;