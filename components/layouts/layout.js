import Header from "./header"
import Link from "next/link"
import { Fragment } from "react"
import Image from "next/image"
import Sidebar from "./sidebar"
import { Dropdown, NavDropdown } from "react-bootstrap"
import { logoutAction } from "../../redux/actions/userActionCreators"
import { useDispatch } from "react-redux"
import { useRouter } from "next/router"


const Layout = ({ children, currentUser }) => {
  const router = useRouter()
  const dispatch = useDispatch()
  return (
    <Fragment>
      <header className="header">

        <section className="top-header">
          <div className="container">
            <div className="row p-2">
              <div className={`col-md-12 d-flex justify-content-between align-items-center`}>
                <div className={`${router.asPath.includes("/auth") ? "text-center w-100" : ""}`}><strong>LOGO</strong></div>
                {!router.asPath.includes("/auth") &&
                  <div className="d-flex align-items-center header-menu">
                    <Dropdown>
                      <Dropdown.Toggle id="dropdown-button-dark-example1" className="d-flex align-items-center hh" variant="">
                        <i className="bi bi-envelope fa-2x rounded-circle"></i>
                      </Dropdown.Toggle>

                    </Dropdown>
                    <Dropdown>
                      <Dropdown.Toggle id="dropdown-button-dark-example1" className="d-flex align-items-center hh" variant="">
                        <i className="bi bi-bell fa-2x rounded-circle"></i>
                      </Dropdown.Toggle>
                    </Dropdown>


                    <Dropdown>
                      <Dropdown.Toggle id="dropdown-button-dark-example1" className="d-flex align-items-center hh" variant="">
                        <i className="bi bi-person fa-2x rounded-circle "></i>
                      </Dropdown.Toggle>

                      <Dropdown.Menu variant="dark" className="bg-white-25">
                        <Dropdown.Item><Link href={`/profile/${currentUser?.profile?.id}`} passHref> profile</Link></Dropdown.Item>
                        <Dropdown.Divider />
                        <Dropdown.Item onClick={() => dispatch(logoutAction())} className="cursor-pointer">Logout</Dropdown.Item>
                      </Dropdown.Menu>
                    </Dropdown>

                  </div>
                }
              </div>
            </div>
          </div>
        </section>

      </header>
      <section className="featured-game" style={{ minHeight: "95vh" }}>
        <div className="featuress">
          <div className="container" style={{ paddingTop: 60 }}>
            <div className={`row pt-4 pb-3 ${router.asPath.includes("/auth") ? "d-flex flex-column align-items-center justify-content-center min-vh-70" : ""}`} >
              {!router.asPath.includes("/auth") &&
                <div className="col-lg-3" style={{ height: "85vh" }}>
                  <div className="d-flex align-items-center mb-4">
                    <Image src={`/images/tc.png`} width="50" height="50" alt="" className="rounded-circle" />
                    <strong className="ml-3">{currentUser?.name}</strong>
                  </div>
                  <Sidebar />
                </div>
              }

              <div className={`col-lg-${router.asPath.includes("/auth") ? 6 : 9}`} >
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
    </Fragment >

  )
}
export default Layout