// api.js
import { LocalStorageStore } from "../persist";
// import store from "../store/store";
// import { Autologout } from "./authService";

const defaultHeaders = {
  "Content-Type": "application/json",
  Accept: "application/json",
};

const api = async (method, url, { data, params, baseURL = "", withToken = false, isFileUpload = false } = {}) => {
  const fullUrl = new URL(baseURL + url);

  if (params && typeof params === "object") {
    Object.entries(params).forEach(([key, value]) =>
      fullUrl.searchParams.append(key, value)
    );
  }

  const headers = { ...defaultHeaders };

  if (withToken) {
    const token = LocalStorageStore.loadState("appState")?.auth?.token;
    if (token) {
      headers["Authorization"] = `Bearer ${token}`;
    }
  }

  if (isFileUpload) {
    delete headers["Content-Type"]; // Laisser le navigateur gérer FormData
  }

  const config = {
    method,
    headers,
  };

  if (data) {
    config.body = isFileUpload ? data : JSON.stringify(data);
  }

  try {
    const response = await fetch(fullUrl, config);
    if (!response.ok) {
      if (response.status === 401) {
        store.dispatch(Autologout());
      }
      const errorData = await response.json();
      throw errorData;
    }

    const contentType = response.headers.get("Content-Type");
    if (contentType && contentType.includes("application/json")) {
      return await response.json();
    }
    return await response.text();
  } catch (error) {
    return Promise.reject(error);
  }
};

export default api;

