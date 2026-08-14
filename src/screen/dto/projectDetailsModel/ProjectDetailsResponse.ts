export interface ProjectDetailsRequest {
  priority: String;
  projectId: String;
  search: String;
  sort: String;
  status: String;
  tags: String;
}


export interface ProjectDetailResponse {
    message: string;
    data: ProjectDetail;
    pagination: Pagination;
  }
  
  export interface ProjectDetail {
    id: string;
    uuid: string;
    projectName: string;
    PJT: string;
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
    createdAt: string;
    updatedAt: string;
    companyId: string;
    companyName: string;
    companyCMPId: string;
    scaffholdList: Scaffhold[];
  }
  
  export interface Scaffhold {
    id: string;
    uuid: string;
    REQID: string;
    SCAFFID: string;
    projectId: string;
    craft: string;
    length: string;
    width: string;
    height: string;
    priority: string;
    status: string;
    tag: string;
    notes: string;
    address: string;
    latitude: number;
    longitude: number;
    expectedEndDate: string;
    createdByCraft: string;
    createdAt: string;
    updatedAt: string;
  }
  
  export interface Pagination {
    total: number;
    totalPages: number;
    currentPage: number;
    limit: number;
  }