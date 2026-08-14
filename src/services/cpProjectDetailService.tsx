import apiClient from '../api/client';
import { API_ENDPOINTS } from '../api/endpoints';
import {
  ProjectDetailsRequest,
  ProjectDetailResponse,
} from '../screen/dto/projectDetailsModel/ProjectDetailsResponse';

class cpProjectDetailService {
  async getNewProjectScaffHold(
    payload: ProjectDetailsRequest,
  ): Promise<ProjectDetailResponse> {
    try {
      const response = await apiClient.post<ProjectDetailResponse>(
        API_ENDPOINTS.CP_PROJECT_DETAILS.PROJECT_DETAIL,
        payload,
      );

      return response.data;
    } catch (error) {
      console.error('getNewProjectScaffHold Error:', error);
      throw error;
    }
  }
}

export default new cpProjectDetailService();