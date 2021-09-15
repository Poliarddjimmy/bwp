import { axiosService } from "./ServiceBase"

class API {
  static login = (payload) => {
    return axiosService.post(`/login`, payload)
  }

  static signup = (payload) => {
    return axiosService.post(`/register`, payload)
  }

  static showProfile = (payload) => {
    return axiosService.post(`/profile/${payload}`)
  }

  static editProfile = (payload, id) => {
    return axiosService.post(`/profile/${id}`, payload)
  }

}

export default API
