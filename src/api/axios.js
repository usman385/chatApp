import axios from "axios";

const authInstance = axios.create({
 
  baseURL: process.env.REACT_APP_BASE_URL,
});

export default authInstance;
