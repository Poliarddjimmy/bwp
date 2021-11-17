import axios from "axios"
import { API_URL } from "../utils/constant"

const axiosService = axios.create({
  baseURL: API_URL,
})

const interceptor = (store) => {
  axiosService.interceptors.request.use(
    (config) => {
      const token = store.getState().user.access_token
      const mutableConfig = { ...config }


      if (token) {
        mutableConfig.headers.common.Authorization = `Bearer ${token}`
      }

      return mutableConfig
    },
    (err) => Promise.reject(err)
  )

  axiosService.interceptors.response.use(
    async (res) => {
      return res
    },
    async (err) => {
      const originalConfig = err.config

      if (originalConfig.url !== "/auth/login" && err.response) {
        // Access Token was expired
        if (err.response.status === 401 && !originalConfig._retry) {
          originalConfig._retry = true

          const refresh_token = store.getState().users.authData.refresh_token
          try {
            const rs = await axiosService.post("/auth/token/refresh", {
              token: refresh_token,
            })

            if (rs.status === 200) {
              const { data } = rs.data
              store.dispatch({
                type: "auth/refresh-tokens/fulfilled",
                payload: data,
              })
            } else {
              store.dispatch({
                type: "users/logout/fulfilled",
              })
            }

            return axiosService(originalConfig)
          } catch (_error) {
            return Promise.reject(_error)
          }
        }
      }

      return Promise.reject(err)
    }
  )
}

export { axiosService, interceptor }