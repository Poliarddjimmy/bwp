import { axiosService } from "./ServiceBase"

class API {
  static login = (payload) => {
    return axiosService.post(`/login`, payload)
  }

  static signup = (payload) => {
    return axiosService.post(`/register`, payload)
  }

  static showProfile = (payload) => {
    return axiosService.get(`/profile/${payload}`)
  }

  static editProfile = (payload, id) => {
    return axiosService.patch(`/profile/${id}`, payload)
  }

  static fetchEvents = () => {
    return axiosService.get(`/events`)
  }

  static showEvent = (id) => {
    return axiosService.get(`/events/${id}`)
  }

}

export default API
