// apiService.js
import api from "./api";

export const get = (url, params = {}, baseURL = "", withToken = false) => {
  return api("GET", url, { params, baseURL, withToken });
};

export const post = (url, data, baseURL = "", withToken = false, config = {}) => {
  return api("POST", url, { data, baseURL, withToken, ...config });
};

export const put = (url, data, baseURL = "", withToken = false) => {
  return api("PUT", url, { data, baseURL, withToken });
};

export const patch = (url, data, baseURL = "", withToken = false) => {
  return api("PATCH", url, { data, baseURL, withToken });
};

export const deleteRequest = (url, baseURL = "", withToken = false) => {
  return api("DELETE", url, { baseURL, withToken });
};

export const uploadFile = (url, formData, baseURL = "", withToken = false) => {
  return api("POST", url, { data: formData, baseURL, withToken, isFileUpload: true });
};

