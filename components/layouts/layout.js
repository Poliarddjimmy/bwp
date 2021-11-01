import Header from "./header"
import Footer from "./footer"
import { Fragment } from "react"

const Layout = ({ children }) => {
  return (
    <Fragment>
      <header className="header">

        <section className="top-header">
          <div className="container">
            <div className="row d-flex justify-content-center align-items-center p-2">
              SDS
            </div>
          </div>
        </section>

      </header>
      <section className="featured-game" style={{}}>
        <div className="featuress">
          <div className="container" style={{ paddingTop: 50 }}>
            <div className="row">
              <div className="col-lg-3 bg-danger">
                jsjkhds
              </div>
              <div className="col-lg-9">
                {children}
              </div>
            </div>
          </div>
        </div>
      </section>

      <footer className="footer" id="footer">
        <div className="copy-bg">
          <div className="container">
            <div className="row">
              <div className="col-lg-5">
                <div className="left-area">
                  <p>Copyright © 2019.All Rights Reserved By <a href="#">Dooplo</a>
                  </p>
                </div>
              </div>
              <div className="col-lg-7">
                <ul className="copright-area-links">
                  <li>
                    <a href="#">Terms Of Use</a>
                  </li>
                  <li>
                    <a href="#">Privacy Policy</a>
                  </li>
                  <li>
                    <a href="#">Gamble</a>
                  </li>
                  <li>
                    <a href="#">Aware</a>
                  </li>
                  <li>
                    <a href="#">Help Cente</a>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </footer>
    </Fragment>

  )
}
export default Layout