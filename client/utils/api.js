// utils/http.js
import axios from "axios";

const api = axios.create({
  baseURL: "http://localhost:8000", // server
  withCredentials: true, // important: allow cookies to be sent
});

let isRefreshing = false;
let pendingRequests = [];

const processQueue = (err, token = null) => {
  pendingRequests.forEach((prom) => {
    if (err) prom.reject(err);
    else prom.resolve(token);
  });
  pendingRequests = [];
};

api.interceptors.response.use(
  (res) => res,
  async (err) => {
    const originalRequest = err.config;
    if (err.response?.status === 401 && !originalRequest._retry) {
      if (isRefreshing) {
        // queue request until token refresh finishes
        return new Promise((resolve, reject) => {
          pendingRequests.push({ resolve, reject });
        })
          .then((token) => {
            originalRequest.headers["Authorization"] = "Bearer " + token;
            return axios(originalRequest);
          })
          .catch((e) => Promise.reject(e));
      }

      originalRequest._retry = true;
      isRefreshing = true;

      try {
        const resp = await api.post("/api/auth/refresh"); // cookie will be sent
        const newAccessToken = resp.data.accessToken;
        // set header for original request and retry
        originalRequest.headers["Authorization"] = "Bearer " + newAccessToken;
        processQueue(null, newAccessToken);
        isRefreshing = false;
        return axios(originalRequest);
      } catch (refreshErr) {
        processQueue(refreshErr, null);
        isRefreshing = false;
        // optionally redirect to login page
        return Promise.reject(refreshErr);
      }
    }
    return Promise.reject(err);
  }
);

export default api;
