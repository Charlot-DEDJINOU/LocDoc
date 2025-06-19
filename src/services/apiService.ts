// apiService.ts
import api from "./api";

export const get = (url: string, params = {}, baseURL = "", withToken = false) =>
  api("GET", url, { params, baseURL, withToken });

export const post = (
  url: string,
  data: any,
  baseURL = "",
  withToken = false,
  config = {}
) => api("POST", url, { data, baseURL, withToken, ...config });

export const put = (url: string, data: any, baseURL = "", withToken = false) =>
  api("PUT", url, { data, baseURL, withToken });

export const patch = (url: string, data: any, baseURL = "", withToken = false) =>
  api("PATCH", url, { data, baseURL, withToken });

export const deleteRequest = (url: string, baseURL = "", withToken = false) =>
  api("DELETE", url, { baseURL, withToken });

export const uploadFile = (
  url: string,
  formData: FormData,
  baseURL = "",
  withToken = false
) => api("POST", url, { data: formData, baseURL, withToken, isFileUpload: true });
