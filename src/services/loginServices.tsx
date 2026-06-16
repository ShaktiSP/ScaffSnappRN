import apiClient from '../api/client';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { API_ENDPOINTS } from '../api/endpoints';
import { LoginDto } from '../screen/dto/login/loginDto';
import { LoginRequestDto } from '../screen/dto/login/loginRewuestDto';

const AUTH_USER_KEY = 'auth_user';
const TOKEN_KEY = 'auth_token';

class LoginService {
    async login(payload: LoginRequestDto): Promise<LoginDto> {
        try {
            const response = await apiClient.post<LoginDto>(
                API_ENDPOINTS.AUTH.LOGIN,
                payload
            );

            const data = response.data;

            await AsyncStorage.setItem(AUTH_USER_KEY, JSON.stringify(data));

            if (data.token) {
                await AsyncStorage.setItem(TOKEN_KEY, data.token);
            }

            return data;
        } catch (error) {
            console.error('LoginService login Error:', error);
            throw error;
        }
    }

    async getStoredUser(): Promise<LoginDto | null> {
        try {
            const cached = await AsyncStorage.getItem(AUTH_USER_KEY);
            return cached ? (JSON.parse(cached) as LoginDto) : null;
        } catch {
            return null;
        }
    }

    async clearUser(): Promise<void> {
        await AsyncStorage.removeItem(TOKEN_KEY);
    }
}

export default new LoginService();