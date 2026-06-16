import apiClient from '../api/client';
import { API_ENDPOINTS } from '../api/endpoints';
import { ProjectListResponseDto } from '../screen/dto/competentPersonHomeList/ProjectManagerDto';

class CompetentProjectService {
  async getProjectList(
    page: number = 1,
    limit: number = 10,
    search: string = '',
  ): Promise<ProjectListResponseDto> {
    try {
      const response = await apiClient.get<ProjectListResponseDto>(
        `${API_ENDPOINTS.COMPETENT_PERSON.PROJECT_LIST}?page=${page}&limit=${limit}&search=${search}`,
      );

      return response.data;
    } catch (error) {
      console.error('getProjectList Error:', error);
      throw error;
    }
  }
}

export default new CompetentProjectService();