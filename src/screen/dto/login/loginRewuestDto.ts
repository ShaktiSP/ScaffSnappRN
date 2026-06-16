export interface LoginRequestDto {
    PJT: string;
    email: string;
    employerName: string;
    password: string;
    user_type: string;
  }

  export interface LoginRequestPMCPDto {
    companyId: string;
    email: string;
    password: string;
    user_type: string;
  }