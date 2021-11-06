import React, { useContext, useState } from "react"
import Link from "next/link"
import { useRouter } from "next/router"
import { Accordion, AccordionContext, useAccordionButton } from "react-bootstrap"

function CustomToggle({ children, eventKey }) {
  const { activeEventKey } = useContext(AccordionContext);

  const decoratedOnClick = useAccordionButton(eventKey, () =>
    console.log('totally custom!'),
  );
  const isCurrentEventKey = activeEventKey === eventKey;

  return (
    <div
      className={`acc  ${isCurrentEventKey ? "active" : ""}`}
      onClick={decoratedOnClick}
    >
      {children}
    </div>
  );
}

const Sidebar = () => {
  const router = useRouter()

  const sidebarSelected = () => {
    let selected
    switch (router.asPath) {
      case "/personal-area":
      case "/personal-area/deposit-to-account":
      case "/personal-area/withdraw-founds":
      case "/personal-area/bet-history":
      case "/personal-area/payment-history":
        selected = "0"
        break
      case "/promotions/top-wins":
      case "/promotions/rules":
        selected = "1"
        break
    }
    return selected
  }

  const [selected, setSelected] = useState(`${sidebarSelected()}`)

  console.log(router.asPath)

  return (
    <div className="pt-3 sidebar">
      <Accordion defaultActiveKey={`${sidebarSelected()}`}>

        <div className="mb-1">
          <CustomToggle eventKey="2">
            <Link href="/" passHref><span className="cursor-pointer d-flex kk align-items-center"> <i className="bi bi-house fa-2x" style={{ marginRight: 10 }}></i> Dashboard </span>
            </Link>
          </CustomToggle>

        </div>

        <div className="mb-1">
          <CustomToggle eventKey="0"><span className="cursor-pointer d-flex kk align-items-center"> <i className="bi bi-person fa-2x" style={{ marginRight: 10 }}></i> Personal area  </span></CustomToggle>
          <Accordion.Collapse eventKey="0">
            <div className="d-flex flex-column sside">
              <Link href="/personal-area" passHref><span className={`mt-2 cursor-pointer ${router.asPath === "/personal-area" ? "text-main" : "text-muted"}`}><i className="bi bi-circle-fill"></i> {`Personal data `}</span></Link>
              <Link href="/personal-area/deposit-to-account" passHref><span className={`mt-2 cursor-pointer ${router.asPath === "/personal-area/deposit-to-account" ? "text-main" : "text-muted"}`}><i className="bi bi-circle-fill"></i> Deposit to account</span></Link>
              <Link href="/personal-area/withdraw-founds" passHref><span className={`mt-2 cursor-pointer ${router.asPath === "/personal-area/withdraw-founds" ? "text-main" : "text-muted"}`}><i className="bi bi-circle-fill"></i> Withdraw funds </span></Link>
              <Link href="/personal-area/bet-history" passHref><span className={`mt-2 cursor-pointer ${router.asPath === "/personal-area/bet-history" ? "text-main" : "text-muted"}`}><i className="bi bi-circle-fill"></i> Bet history</span></Link>
              <Link href="/personal-area/payment-history" passHref><span className={`mt-2 cursor-pointer ${router.asPath === "/personal-area/payment-history" ? "text-main" : "text-muted"}`}><i className="bi bi-circle-fill"></i> Payment history</span></Link>
            </div>
          </Accordion.Collapse>
        </div>

        <div className="mb-1">
          <CustomToggle eventKey="1"><span className="cursor-pointer d-flex kk align-items-center"> <i className="bi bi-cup-straw fa-2x" style={{ marginRight: 10 }}></i> Promotions </span></CustomToggle>
          <Accordion.Collapse eventKey="1">
            <div className="d-flex flex-column sside">
              <Link href="/promotions/top-wins" passHref><span className={`mt-2 cursor-pointer ${router.asPath === "/promotions/top-wins" ? "text-main" : "text-muted"}`}><i className="bi bi-circle-fill"></i> {`Top Wins`}</span></Link>
              <Link href="/promotions/rules" passHref><span className={`mt-2 cursor-pointer ${router.asPath === "/promotions/rules" ? "text-main" : "text-muted"}`}><i className="bi bi-circle-fill"></i> Rules</span></Link>
            </div>
          </Accordion.Collapse>
        </div>
      </Accordion>
    </div>
  )
}
export default Sidebar