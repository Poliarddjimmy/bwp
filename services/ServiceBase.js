import axios from "axios"
import { API_URL } from "../utils/constant"
import { Auth } from "../redux/actions/types"
import { decodeToken } from "react-jwt"

const axiosService = axios.create({
  baseURL: API_URL,
})

const interceptor = (store) => {
  axiosService.interceptors.request.use(
    (config) => {
      const token = store.getState().user.token
      const mutableConfig = { ...config }

      if (token) {
        mutableConfig.headers.common.Authorization = `Bearer ${token}`
      }

      return mutableConfig
    },
    (err) => Promise.reject(err)
  )

  axiosService.interceptors.response.use(
    async (response) => {
      if (response.data?.token) {
        // 1. decode the token
        const decodedUser = await decodeToken(response.data.token)

        decodedUser.isPasswordReset = response.data.isPasswordReset
        console.log(decodedUser)

        // 2. save the user and the token to the state
        store.dispatch({
          type: Auth.LOGIN,
          payload: { user: decodedUser, token: response.data.token },
        })
      }

      return response
    },
    async (error) => {
      if (error.message.includes("401")) {
        store.dispatch({
          type: "users/logout/pending",
        })
      }
      if (error.response?.data?.token) {
        // 1. decode the token
        const decodedUser = await decodeToken(error.response.data.token)
        store.dispatch({
          type: Auth.LOGIN,
          payload: {
            user: decodedUser,
            token: error.response.data.token,
          },
        })
        // 2. save the user and the token to the state
      }
      return Promise.reject(error)
    }
  )
}

export { axiosService, interceptor }
