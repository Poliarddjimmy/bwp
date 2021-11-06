import Header from "./header"
import Link from "next/link"
import { Fragment } from "react"
import Image from "next/image"
import Sidebar from "./sidebar"
import { Dropdown, NavDropdown } from "react-bootstrap"


const Layout = ({ children, currentUser }) => {
  console.log(currentUser)
  return (
    <Fragment>
      <header className="header">

        <section className="top-header">
          <div className="container">
            <div className="row p-2">
              <div className="col-md-12 d-flex justify-content-between align-items-center">
                <strong>LOGO</strong>
                <div className="d-flex align-items-center header-menu">
                  <Dropdown>
                    <Dropdown.Toggle id="dropdown-button-dark-example1" className="d-flex align-items-center" variant="">
                      <i className="bi bi-envelope fa-2x rounded-circle"></i>
                    </Dropdown.Toggle>

                    <Dropdown.Menu variant="dark">
                      <Dropdown.Item href="#/action-1" active>
                        Action
                      </Dropdown.Item>
                      <Dropdown.Item href="#/action-2">Another action</Dropdown.Item>
                      <Dropdown.Item href="#/action-3">Something else</Dropdown.Item>
                      <Dropdown.Divider />
                      <Dropdown.Item href="#/action-4">Separated link</Dropdown.Item>
                    </Dropdown.Menu>
                  </Dropdown>

                  <Dropdown>
                    <Dropdown.Toggle id="dropdown-button-dark-example1" className="d-flex align-items-center" variant="">
                      <i className="bi bi-bell fa-2x rounded-circle"></i>
                    </Dropdown.Toggle>

                    <Dropdown.Menu variant="dark">
                      <Dropdown.Item href="#/action-1" active>
                        Action
                      </Dropdown.Item>
                      <Dropdown.Item href="#/action-2">Another action</Dropdown.Item>
                      <Dropdown.Item href="#/action-3">Something else</Dropdown.Item>
                      <Dropdown.Divider />
                      <Dropdown.Item href="#/action-4">Separated link</Dropdown.Item>
                    </Dropdown.Menu>
                  </Dropdown>


                  <Dropdown>
                    <Dropdown.Toggle id="dropdown-button-dark-example1" className="d-flex align-items-center" variant="">
                      <i className="bi bi-person fa-2x rounded-circle "></i>
                    </Dropdown.Toggle>

                    <Dropdown.Menu variant="dark">
                      <Dropdown.Item active>
                        <Link href="/profile"> profile</Link>
                      </Dropdown.Item>
                      <Dropdown.Item href="#/action-2">Another action</Dropdown.Item>
                      <Dropdown.Item href="#/action-3">Something else</Dropdown.Item>
                      <Dropdown.Divider />
                      <Dropdown.Item href="#/action-4">Separated link</Dropdown.Item>
                    </Dropdown.Menu>
                  </Dropdown>

                </div>
              </div>
            </div>
          </div>
        </section>

      </header>
      <section className="featured-game" style={{ minHeight: "95vh" }}>
        <div className="featuress">
          <div className="container" style={{ paddingTop: 60 }}>
            <div className="row pt-3 pb-3">
              <div className="col-lg-3" style={{ height: "85vh" }}>
                <div className="d-flex align-items-center mb-4">
                  <Image src={`/images/tc.png`} width="50" height="50" alt="" className="rounded-circle" />
                  <strong className="ml-3">{currentUser?.name}</strong>
                </div>
                <Sidebar />
              </div>
              <div className="col-lg-9" >
                {children}
              </div>
            </div>
          </div>
        </div>
      </section>

      <footer className="footer" id="footer" style={{ marginTop: -110 }}>
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