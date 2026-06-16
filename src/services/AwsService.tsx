import apiClient from '../api/client';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { IAwsCredentials, IAwsCredentialsResponse } from '../screen/dto/dto';

const AWS_CREDENTIALS_KEY = 'aws_credentials';

class AwsService {
    async fetchAndStoreCredentials(): Promise<IAwsCredentials> {
        try {
            const response = await apiClient.get<IAwsCredentialsResponse>(
                'aws/awsCredentials' // replace with your actual endpoint
            );

            const credentials = response.data.data;

            // Cache credentials in AsyncStorage
            await AsyncStorage.setItem(
                AWS_CREDENTIALS_KEY,
                JSON.stringify(credentials)
            );

            return credentials;
        } catch (error) {
            console.error('AwsService fetchCredentials Error:', error);

            // Fallback to cached credentials if available
            const cached = await AsyncStorage.getItem(AWS_CREDENTIALS_KEY);
            if (cached) {
                return JSON.parse(cached) as IAwsCredentials;
            }

            throw error;
        }
    }

    async getStoredCredentials(): Promise<IAwsCredentials | null> {
        try {
            const cached = await AsyncStorage.getItem(AWS_CREDENTIALS_KEY);
            return cached ? (JSON.parse(cached) as IAwsCredentials) : null;
        } catch {
            return null;
        }
    }

    async clearCredentials(): Promise<void> {
        await AsyncStorage.removeItem(AWS_CREDENTIALS_KEY);
    }
}

export default new AwsService();