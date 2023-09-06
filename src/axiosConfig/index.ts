import axios from "axios";

import config from "./config";

export const axiosBaseInstance = axios.create(config);

axiosBaseInstance.interceptors.response.use(
  function (response) {
    return response;
  },
  function (error) {
    return Promise.reject(error);
  }
);
