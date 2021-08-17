import { axiosService } from "./ServiceBase"

class API {
  static login = (payload) => {
    return axiosService.post(`/login`, payload)
  }

  static signup = (payload) => {
    return axiosService.post(`/register`, payload)
  }
}

export default API
