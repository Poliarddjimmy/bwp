import Header from "./header"
import Footer from "./footer"

const Layout = ({ children }) => {
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