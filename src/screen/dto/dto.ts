export interface IAwsCredentials {
    accessKeyId: string;
    secretAccessKey: string;
    bucketName: string;
    region: string;
}

export interface IAwsCredentialsResponse {
    message: string;
    data: IAwsCredentials;
}