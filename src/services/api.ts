// api.ts
import { LocalStorageStore } from "../persist";

const defaultHeaders: HeadersInit = {
  "Content-Type": "application/json",
  Accept: "application/json",
};

interface ApiOptions {
  data?: any;
  params?: Record<string, string>;
  baseURL?: string;
  withToken?: boolean;
  isFileUpload?: boolean;
}

const api = async (
  method: string,
  url: string,
  {
    data,
    params,
    baseURL = "",
    withToken = false,
    isFileUpload = false,
  }: ApiOptions = {}
): Promise<any> => {
  const fullUrl = new URL(import.meta.env.VITE_API_URL + url);

  if (params) {
    Object.entries(params).forEach(([key, value]) =>
      fullUrl.searchParams.append(key, value)
    );
  }

  const headers: HeadersInit = { ...defaultHeaders };

  if (withToken) {
    const token = LocalStorageStore.loadState("appState")?.auth?.token;
    if (token) {
      headers["Authorization"] = `Bearer ${token}`;
    }
  }

  if (isFileUpload) {
    delete headers["Content-Type"];
  }

  const config: RequestInit = {
    method,
    headers,
  };

  if (data) {
    config.body = isFileUpload ? data : JSON.stringify(data);
  }

  try {
    const response = await fetch(fullUrl.toString(), config);
    if (!response.ok) {
      const errorData = await response.json();
      throw errorData;
    }

    const contentType = response.headers.get("Content-Type");
    if (contentType?.includes("application/json")) {
      return await response.json();
    }

    return await response.text();
  } catch (error) {
    return Promise.reject(error);
  }
};

export default api;
