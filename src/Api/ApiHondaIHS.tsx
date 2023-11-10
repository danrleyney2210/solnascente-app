import axios from "axios";

const ApiHondaIHS = axios.create({
  baseURL: process.env.REACT_APP_IHS_URL,
  headers: {
    "Content-type": "application/json; charset=UTF-8",
  },
});

ApiHondaIHS.interceptors.request.use(
  (config) => {
    let token;
    if (typeof window !== "undefined") {
      const localToken = localStorage.getItem("@token");

      if (localToken) {
        token = localToken.replaceAll('"', "");
      }

      if (token && config.headers !== undefined) {
        config.headers.Authorization = `Bearer ${token}`;
      }
    }

    return config;
  },

  (error) => Promise.reject(error)
);

export default ApiHondaIHS;
