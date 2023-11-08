import axios from "axios";

const url = "https://apigate.hondaservicosfinanceiros.com.br";

const Api = axios.create({
  baseURL: url,
  headers: {
    "Content-type": "application/json; charset=UTF-8",
  },
});

export default Api;
