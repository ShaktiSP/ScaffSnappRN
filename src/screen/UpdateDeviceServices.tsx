import apiClient from '../api/client';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { API_ENDPOINTS } from '../api/endpoints';
import { UpdateDeviceRequest } from './dto/updateDevice/UpdateDeviceRequest';
import { UpdateDeviceTypeResponse } from './dto/updateDevice/UpdateDeviceResponse';

class UpdateDeviceServices {
    async updateDevice(payload: UpdateDeviceRequest): Promise<UpdateDeviceTypeResponse> {
        try {
            const response = await apiClient.post<UpdateDeviceTypeResponse>(
                API_ENDPOINTS.UPDATE_DEVIDE_TOKEN.DEVICE_TOKEN,
                payload
            );
console.log(response,"response")
            const data = response.data;

            return data;
        } catch (error) {
            console.error('LoginService login Error:', error);
            throw error;
        }
    }

    async clearUser(): Promise<void> {
        await AsyncStorage.removeItem('auth_token');
    }
}

export default new UpdateDeviceServices();