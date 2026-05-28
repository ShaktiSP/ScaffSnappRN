
import axios, {AxiosInstance,AxiosRequestConfig,AxiosResponse, AxiosError,InternalAxiosRequestConfig,} from 'axios';
    
import AsyncStorage from '@react-native-async-storage/async-storage';
import { API_ENDPOINTS } from './endpoints';

const BASE_URL = 'https://api.scaffsnapp.com/api/v1/';
    
const TIMEOUT =  30_000;
    
const TOKEN_KEY = 'auth_token';
    
const REFRESH_TOKEN_KEY = 'refresh_token';
    
const USER_KEY = 'auth_user';
    
// ─── Error Messages ───────────────────────────────────────────────────────────

const ERROR_MESSAGES = {
    
        NETWORK_ERROR: 'Network error. Please check your internet connection.',
    
        UNAUTHORIZED: 'Session expired. Please log in again.',
    
        NOT_FOUND: 'The requested resource was not found.',
    
        VALIDATION_ERROR: 'Invalid request. Please check the input.',
    
        TIMEOUT: 'Request timed out. Please try again.',
    
        SERVER_ERROR: 'Server error. Please try again later.',
    
    };
    
    // ─── Types ────────────────────────────────────────────────────────────────────
    
    export interface ApiError {
    
        message: string;
    
        status?: number;
    
        data?: unknown;
    
        originalError?: AxiosError;
    
    }
    
    class APIClient {
        private instance: AxiosInstance;
    
        constructor() {
             this.instance = axios.create({
            baseURL: BASE_URL,
            timeout: TIMEOUT,
            headers: {
                'Content-Type': 'application/json',
                Accept: 'application/json',
                'x-client-key': 'c6ac48ec34130134f5d4d0ed9226e33e0e3e875c3fb3ad12d669bbfa50024f33',
            },
        });
        
        this.setupInterceptors();
    }
        // ── Interceptors ──────────────────────────────────────────────────────────
    
        private setupInterceptors(): void {
            this.instance.interceptors.request.use(
                this.handleRequest,
                this.handleRequestError,
    );

            this.instance.interceptors.response.use(
    
                this.handleResponse,
    
                this.handleResponseError,
    
            );
    
        }
    
        /**
    
         * Request Interceptor – Attach JWT Bearer token from EncryptedStorage.
    
         */
    
        private handleRequest = async (
    
            config: InternalAxiosRequestConfig,
    
        ): Promise<InternalAxiosRequestConfig> => {
    
            try {
    
                const token = await AsyncStorage.getItem(TOKEN_KEY);
    
                if (token && config.headers) {
    
                    config.headers.Authorization = `Bearer ${token}`;
    
                }
    
            } catch {
    
                // Token read failure should not block the request
    
            }
    
     
    
            if (__DEV__) {
    
                console.log(`🚀 [API] ${config.method?.toUpperCase()} ${config.url}`, {
    
                    params: config.params,
    
                    data: config.data,
    
                });
    
            }
    
     
    
            return config;
    
        };
    
     
    
        private handleRequestError = (error: AxiosError): Promise<never> => {
    
            console.error('❌ [API] Request Error:', error.message);
    
            return Promise.reject(error);
    
        };
    
     
    
        /**
    
         * Response Interceptor – Log success responses.
    
         */
    
        private handleResponse = (response: AxiosResponse): AxiosResponse => {
    
            if (__DEV__) {
    
                console.log(`✅ [API] ${response.status} ${response.config.url}`, response.data);
    
            }
    
            return response;
    
        };
    
     
    
        /**
    
         * Response Error Interceptor – Unified error normalization.
    
         * Handles 401 Unauthorized by attempting to refresh the token.
    
         */
    
        private handleResponseError = async (error: AxiosError): Promise<any> => {
    
            const status = error.response?.status;
    
            const originalRequest = error.config as InternalAxiosRequestConfig & { _retry?: boolean };
    
     
    
            // If 401 error and not already retrying
    
            if (status === 401 && !originalRequest._retry && originalRequest.url !== API_ENDPOINTS.AUTH.LOGIN) {
    
                originalRequest._retry = true;
    
     
    
                try {
    
                    const refreshToken = await AsyncStorage.getItem(REFRESH_TOKEN_KEY);
    
                    if (!refreshToken) {
    
                        throw new Error('No refresh token available');
    
                    }
    
     
    
                    // Call refresh token endpoint
    
                    // We use axios.post instead of this.instance.post to avoid interceptors if needed,
    
                    // but since we check for REFRESH_TOKEN URL in interceptor, it's fine.
    
                    // const response = await axios.post(`${BASE_URL}${API_ENDPOINTS.AUTH.REFRESH_TOKEN.replace(/^\//, '')}`, {
    
                    //     refresh_token: refreshToken
    
                    // });
    
                    const response = await axios.post(`${BASE_URL}users/refresh-token`, {
    
                        refresh_token: refreshToken,
    
                    });
    
     
    
                    if (response.data.success && response.data.data.access_token) {
    
                        const newToken = response.data.data.access_token;
    
                        const newRefreshToken = response.data.data.refresh_token;
    
     
    
                        await AsyncStorage.setItem(TOKEN_KEY, newToken);
    
                        await AsyncStorage.setItem(REFRESH_TOKEN_KEY, newRefreshToken);
    
     
    
                        // Update the header and retry the original request
    
                        if (originalRequest.headers) {
    
                            originalRequest.headers.Authorization = `Bearer ${newToken}`;
    
                        }
    
                        return this.instance(originalRequest) as any;
    
                    }
    
                } catch (refreshError) {
    
                    // Refresh failed - logout user
    
                    await AsyncStorage.removeMany([TOKEN_KEY, REFRESH_TOKEN_KEY, USER_KEY]);
    
                    // You might want to trigger a redirect here via a global event or store action
    
                    console.error('Token refresh failed:', refreshError);
    
                }
    
            }
    
     
    
            if (__DEV__) {
    
                console.error(`❌ [API] ${status} ${error.config?.url}`, error.response?.data);
    
            }
    
     
    
            const errorMessage = this.getErrorMessage(error);
    
     
    
            const apiError: ApiError = {
    
                message: errorMessage,
    
                status,
    
                data: error.response?.data,
    
                originalError: error,
    
            };
    
     
    
            return Promise.reject(apiError);
    
        };
    
     
    
        // ── Helpers ───────────────────────────────────────────────────────────────
    
     
    
        private getErrorMessage(error: AxiosError): string {
    
            if (!error.response) {
    
                return ERROR_MESSAGES.NETWORK_ERROR;
    
            }
    
     
    
            const status = error.response.status;
    
            const data = error.response.data as Record<string, string> | null;
    
     
    
            // Use backend-provided message when available
    
            if (data?.message) {
    
                return data.message;
    
            }
    
     
    
            switch (status) {
    
                case 400:
    
                    return ERROR_MESSAGES.VALIDATION_ERROR;
    
                case 401:
    
                    return ERROR_MESSAGES.UNAUTHORIZED;
    
                case 404:
    
                    return ERROR_MESSAGES.NOT_FOUND;
    
                case 408:
    
                    return ERROR_MESSAGES.TIMEOUT;
    
                case 500:
    
                case 502:
    
                case 503:
    
                case 504:
    
                    return ERROR_MESSAGES.SERVER_ERROR;
    
                default:
    
                    return ERROR_MESSAGES.SERVER_ERROR;
    
            }
    
        }
    
     
    
        // ── HTTP Methods ──────────────────────────────────────────────────────────
    
     
    
        async get<T = unknown>(
    
            url: string,
    
            config?: AxiosRequestConfig,
    
        ): Promise<AxiosResponse<T>> {
    
            return this.instance.get<T>(url, config);
    
        }
    
     
    
        async post<T = unknown>(
    
            url: string,
    
            data?: unknown,
    
            config?: AxiosRequestConfig,
    
        ): Promise<AxiosResponse<T>> {
    
            return this.instance.post<T>(url, data, config);
    
        }
    
     
    
        async put<T = unknown>(
    
            url: string,
    
            data?: unknown,
    
            config?: AxiosRequestConfig,
    
        ): Promise<AxiosResponse<T>> {
    
            return this.instance.put<T>(url, data, config);
    
        }
    
     
    
        async patch<T = unknown>(
    
            url: string,
    
            data?: unknown,
    
            config?: AxiosRequestConfig,
    
        ): Promise<AxiosResponse<T>> {
    
            return this.instance.patch<T>(url, data, config);
    
        }
    
     
    
        async delete<T = unknown>(
    
            url: string,
    
            config?: AxiosRequestConfig,
    
        ): Promise<AxiosResponse<T>> {
    
            return this.instance.delete<T>(url, config);
    
        }
    
     
    
        async upload<T = unknown>(
    
            url: string,
    
            formData: FormData,
    
            onUploadProgress?: (progressEvent: { loaded: number; total?: number }) => void,
    
        ): Promise<AxiosResponse<T>> {
    
            return this.instance.post<T>(url, formData, {
    
                headers: { 'Content-Type': 'multipart/form-data' },
    
                onUploadProgress,
    
            });
    
        }
    
    }
    
     
    
    export const TOKEN_STORAGE_KEY = TOKEN_KEY;
    
    export default new APIClient();
    
     
    
    