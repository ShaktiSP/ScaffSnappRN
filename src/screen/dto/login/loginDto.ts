export interface LoginDto {
    message: string;
    token: string;
    projectId: string;
    projectCode: string;
    employerName: string;
    user_type: string;
    craft: string;
  }


  export interface LoginResponsePMCPDto {
    message: string;
    token: string;
    data: UserDto;
  }
  
  export interface UserDto {
    id: string;
    uuid: string;
    name: string;
    email: string;
    user_type: string;
    companyId: string;
  }
  