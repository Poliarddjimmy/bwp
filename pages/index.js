import Link from "next/link"
import Image from 'next/image'
import Layout from '../components/layouts/layout'
import withAuth from "../components/hocs/withAuth"


const Home = ({ currentUser }) => {
  return <Layout currentUser={currentUser}>

    <main className="content">
      <div className="container p-0">
        <h3 className="d-flex flex-column">
          The New Etablished Betting Platform
          <small className="text-danger" style={{ fontSize: "0.5em" }}>Bet, Play, Earn or View. A Unique Platform of Your Race</small>
        </h3>
        <div className="card mt-5 bg-transparent border-0" >
          <div className="row g-0" style={{ height: "" }}>

            <div className="col-12 col-lg-5 col-xl-5">
              <div className="race p-2 rounded text-center" style={{ height: "100%" }}>
                <h4>Game-12</h4>
                <div className="p-4 mb-3 race-details d-flex flex-column justify-content-center align-items-center seconary-bg-color border-danger">
                  <strong>Starting in</strong>
                  <span className="d-flex mb-3">
                    <span>05</span>
                    <span className="text-danger mr-3 ml-3">:</span>
                    <span>12</span>
                    <span className="text-danger mr-3 ml-3">:</span>
                    <span>22</span>
                  </span>
                  <h6>Total Players</h6>
                  <h5>50</h5>
                  <div className="d-flex align-items-center">
                    <div className="mr-2">
                      <Image src="/images/tikit-icon.png" width={40} height={40} alt="" className="rounded-circle" />
                    </div>
                    <small style={{ fontSize: "0.6em" }}><strong className="text-white">Billy Joseph</strong> and many orthers joined</small>
                  </div>
                </div>

                <Link href="/game/choose-horse" passHref><button type="button" className="btn btn-danger d-block w-100 mb-3"> Join now</button></Link>
                <button type="button" className="btn btn-default border-danger text-white d-block w-100"> View Race</button>

              </div>
            </div>

            <div className="col-12 col-lg-7 col-xl-7">
              <div className="message p-2 d-flex flex-column rounded min-vh-80" style={{ height: "100%" }}>
                <div className="other">
                  kjsdfiujsdhfk
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </main>

  </Layout>
}

export default withAuth(Home);