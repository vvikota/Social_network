import { GetItemsType, instance, ResponseType } from './api';

export const usersAPI = {
  getUsers: async (currentPage = 1, pageSize = 10) => {
    const response = await instance.get<GetItemsType>(`users?page=${currentPage}&count=${pageSize}`);
    return response.data;
  },

  follow: async (userId: number) => {
    const res = await instance.post<ResponseType>(`follow/${userId}`);
    return res.data;
  },

  unfollow: (userId: number) => {
    return instance.delete(`follow/${userId}`).then(res => res.data) as Promise<ResponseType>
  }
}