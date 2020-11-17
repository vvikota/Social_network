import * as axios from "axios";

const instance = axios.create({
  withCredentials: true,
  baseURL: 'https://social-network.samuraijs.com/api/1.0/',
  headers: {
    'API-KEY': '5c1979ac-0a12-4a40-8271-c23387e118fd'
  }
})

export const usersAPI = {
  getUsers: (currentPage = 1, pageSize = 10) => {
    return instance.get(`users?page=${currentPage}&count=${pageSize}`)
      .then(response => {
        return response.data;
      });
  },

  unfollow: (userId) => {
    return instance.delete(`follow/${userId}`)
  },

  follow: (userId) => {
    return instance.post(`follow/${userId}`, {})
  }
}


