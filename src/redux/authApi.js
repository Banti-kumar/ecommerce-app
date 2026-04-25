import axios from "axios";

const api = axios.create({
  baseURL:
    "http://vrdigitalsolutions.website/vishva_sports_backend/public/api/",
});

api.interceptors.request.use(
  (config) => {
    const token = localStorage.getItem("token");
    config.headers["X-API-KEY"] =
      "8a42f3b67d629e6f1f9c40dsu53fr34jfki98kloew5s2czui4mf9w0qkn";

    if (token) {
      config.headers["Authorization"] = `Bearer ${token}`;
    }
    return config;
  },
  (error) => {
    return Promise.reject(error);
  },
);

api.interceptors.response.use(
  (response) => response,
  (error) => {
    if (error.response && error.response.status === 401) {
      localStorage.removeItem("token");
      window.location.href = "/user/login";
    }
    return Promise.reject(error);
  },
);

export default api;
