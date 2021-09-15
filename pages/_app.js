import '../styles/globals.css'
import "react-responsive-modal/styles.css"
import "react-phone-input-2/lib/style.css"
import { store } from "../redux/store"
import { Provider } from "react-redux"

import { ToastProvider } from "react-toast-notifications"

import * as Service from "../services/ServiceBase"

function MyApp({ Component, pageProps }) {
  return (
    <Provider store={store}>
      <ToastProvider placement="top-right">
        {Service.interceptor(store)}
        <Component {...pageProps} />
      </ToastProvider>
    </Provider>
  )
}

export default MyApp
