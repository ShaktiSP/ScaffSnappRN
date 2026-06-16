export interface ProjectManagerDto {
    id: string;
    uuid: string;
    name: string;
    email: string;
  }
  
  export interface ProjectDto {
    id: string;
    uuid: string;
    projectName: string;
    clientName: string;
    clientEmail: string;
    clientMobile: string;
    clientCountryCode: string;
    clientAddress: string;
    startDate: string;
    endDate: string;
    latitude: number;
    longitude: number;
    status: string;
    totalRequests: number;
    totalTimelines: number;
    projectManager: ProjectManagerDto[];
  }
  
  export interface PaginationDto {
    total: number;
    page: number;
    limit: number;
    totalPages: number;
  }
  
  export interface ProjectListResponseDto {
    message: string;
    data: ProjectDto[];
    pagination: PaginationDto;
  }