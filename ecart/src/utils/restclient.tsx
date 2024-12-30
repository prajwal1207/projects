import axios, { AxiosRequestConfig, AxiosResponse } from "axios";

interface ApiResponse<T> {
  success: boolean;
  data?: T;
  message?: string;
  statusCode?: number;
  error?: string;
}

const apiClient = axios.create({
  baseURL: "https://fakestoreapi.com/",
  // timeout: 10000,
});

export const apiCaller = async <T,>(
  endpoint: string,
  method: "GET" | "POST" | "PUT" | "DELETE",
  body?: Record<string, any>,
  queryParams?: Record<string, any>,
  headers?: Record<string, string>
): Promise<ApiResponse<T>> => {
  try {
    const config: AxiosRequestConfig = {
      method,
      url: endpoint,
      headers,
      params: queryParams,
      data: body,
    };

    const response: AxiosResponse<T> = await apiClient.request(config);

    return {
      success: true,
      data: response.data,
      message: (response.data as any)?.message || "Request succeeded",
      statusCode: response.status,
    };
  } catch (error: any) {
    return {
      success: false,
      error: error.response?.data?.message || error.message || "Unknown error",
      statusCode: error.response?.status,
    };
  }
};

// apiClient.interceptors.request.use(
//   (config) => {
//     const token = localStorage.getItem("authToken");
//     if (token) {
//       config.headers.Authorization = `Bearer ${token}`;
//     }
//     return config;
//   },
//   (error) => {
//     return Promise.reject(error);
//   }
// );

// apiClient.interceptors.response.use(
//   (response) => response,
//   (error) => {
//     const errorResponse = error.response;
//     if (errorResponse) {
//       console.error(
//         `API Error [${errorResponse.status}]: ${
//           errorResponse.data?.message || "Unknown Error"
//         }`
//       );
//     } else {
//       console.error("Network Error:", error.message);
//     }
//     return Promise.reject(error);
//   }
// );
