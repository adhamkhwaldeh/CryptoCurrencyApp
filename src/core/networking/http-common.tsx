import axios from "axios";
import * as AxiosLogger from "axios-logger";
import AsyncStorageAdapter from "../../helpers/AsyncStorageAdapter";
import AsyncStorageHelper from "../../helpers/AsyncStorageHelper";
import LoggingHelper from "../../helpers/LoggingHelper";

export const baseLinkURL = "https://api.coingecko.com/";
// export const baseLinkURL = 'http://100.64.100.137:21055/';

export const baseURL = baseLinkURL + "api/v3";

const { getData } = new AsyncStorageAdapter();

const http = axios.create({
  baseURL: baseURL,
  timeout: 10000,
  headers: {
    "Content-type": "application/json",
  },
});

http.interceptors.request.use(
  AxiosLogger.requestLogger,
  AxiosLogger.errorLogger
);

http.interceptors.response.use(
  AxiosLogger.responseLogger,
  AxiosLogger.errorLogger
);

http.interceptors.request.use(
  async (config) => {
    LoggingHelper.log("adding header");
    const user = await getData(AsyncStorageHelper.LOGGED_USER_TAG);
    LoggingHelper.log(user);
    var token = "";
    if (user != null && user.accessToken != "") {
      //&& user.isDataSubmitted
      token = "Bearer " + user.accessToken;
    } else {
      token = "";
    }
    if (token != "") {
      LoggingHelper.log("adding header " + token);
      config.headers.Authorization = token;
    } else {
      LoggingHelper.log("No header ");
    }
    return config;
  },
  (error) => {
    return Promise.reject(error);
  }
);

export default http;
