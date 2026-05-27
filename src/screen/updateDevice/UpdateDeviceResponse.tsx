export interface UpdateDeviceTypeResponse{
    data : Data,
    message: string
}

export interface Data{
    appVersion: string,
    createdAt: string,
    deviceName: string,
    deviceToken: string,
    deviceType: string,
    id: string,
    lastLogin: string,
    osVersion: string,
    updatedAt: string,
    userId: string,
    user_type: string
}