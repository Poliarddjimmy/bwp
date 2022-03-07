import { axiosService } from "./ServiceBase"

class API {
  static login = (payload) => {
    return axiosService.post(`/login`, payload)
  }

  static logout = () => {
    return axiosService.post(`/logout`)
  }

  static signup = (payload) => {
    return axiosService.post(`/register`, payload)
  }

  static searchUser = (payload) => {
    return axiosService.get(`/users?search=${payload}`)
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

  static fetchGames = () => {
    return axiosService.get(`/games`)
  }

  static fecthCurrentGame = () => {
    return axiosService.get(`/current-game`)
  }

  static createGameUser = (payload) => {
    return axiosService.post(`/game_users`, payload)
  }

  static fetchHorses = () => {
    return axiosService.get(`/horses`)
  }

  static showHorse = (id) => {
    return axiosService.get(`/horses/${id}`)
  }

}

export default API
