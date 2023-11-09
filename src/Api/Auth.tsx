import axios from "axios";

const Auth = axios.create({
  baseURL: process.env.REACT_APP_APP_URL,
  headers: {
    "Content-type": "application/json; charset=UTF-8",
    Authorization: process.env.REACT_APP_AXIOS_BASIC_TOKEN,
  },
});

export default Auth;
