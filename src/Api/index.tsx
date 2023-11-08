import axios from "axios";

const url = "https://apigate.hondaservicosfinanceiros.com.br";

const Api = axios.create({
  baseURL: url,
  headers: {
    Origin: process.env.REACT_APP_AXIOS_ORIGIN,
    Host: process.env.REACT_APP_AXIOS_HOST,
  },
});

export default Api;
