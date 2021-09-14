import { useEffect } from "react"
import Header from "./header"
import Footer from "./footer"
import { useSelector, useDispatch } from "react-redux"
import { useRouter } from "next/router"


const Layout = ({ children }) => {
  const { loading, currentUser, error } = useSelector(state => state.user)
  const router = useRouter()

  useEffect(() => {
    if (!currentUser && !router.route.startsWith("/auth")) {
      router.push("/auth/signin")
    }
  }, [router, currentUser]);

  return (
    <>
      <Header />
      <main className="main">
        <div className="main-wrapper pt-80">
          {children}
        </div>
      </main>
      <div className="scroll-top not-visible">
        <i className="bi bi-finger-index"></i>
      </div>

      <Footer />
    </>
  )
}
export default Layout