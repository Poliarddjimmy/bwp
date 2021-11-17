import Link from "next/link"
import Image from 'next/image'
import withAuth from "../../components/hocs/withAuth"
import Layout from "../../components/layouts/layout"

// const horseImage = require('/public/images/horses/horse_1_b');
const Choosehorse = ({ currentUser }) => {
  return (
    <Layout currentUser={currentUser}>
      <div>
        <header>
          <div className="mainmenu-area">
            <div className="container">
              <div className="row">
                <div className="col-lg-12">
                  <nav className="navbar navbar-expand-lg navbar-light">
                    <a className="navbar-brand" href="index.html" />
                  </nav>
                </div>
              </div>
            </div>
          </div>
        </header>
      </div>

      <section className="bonus-areas">
        <div className="container">

          <div className="row">

            <div className="flip-card col-lg-4 col-md-12">
              <Link href="/game/horse-details" passHref>
                <div className="flip-card-inner single-bonus border-danger p-2 cursor-pointer">
                  <div className="flip-card-front d-flex flex-column justify-content-center text-left p-2">
                    <Image className="img-flip" src="/images/horses/horse_1_b.png" alt="" width="150" height="120" />
                    <strong>Rambo 1</strong>
                    <div className="text color-one">
                      <small>Speed 1.3 Km Per Hour</small>
                    </div>
                  </div>
                  <div className="flip-card-back text-left p-3">
                    <div className="d-flex align-items-center justify-content-center w-100">
                      <Image src="/images/horses/horse_1_b.png" alt="" width="150" height="80" />
                    </div>
                    <strong>Rambo 1</strong>
                    <div className="text color-one">
                      <small>Speed 1.3 Km Per Hour</small>
                    </div>
                    <hr className="border-danger-hr m-1" />
                    <strong>Details</strong>
                    <div className="pl-4">
                      <ul>
                        <li><small>Wining Sreck: 10</small></li>
                        <li><small>Color: Lid Brown</small></li>
                        <li><small>Eye Color: Light Brown</small></li>
                        <li><small>Star:Ethicatcum</small></li>
                      </ul>
                    </div>
                    <hr className="border-danger-hr m-1" />
                    <div className="rating d-flex">
                      <strong className="mr-3">Ratings:</strong>
                      {[...Array(4)].map((star, i) => {
                        const ratingValue = i + 1;
                        return (
                          <label key={i}>
                            <span className="icon text-warning">★</span>
                          </label>
                        )
                      })}
                      <label>
                        <span className="icon">★</span>
                      </label>
                    </div>
                  </div>
                </div>
              </Link>
            </div>
          </div>
        </div>
      </section>



    </Layout>
  )
}

export default withAuth(Choosehorse);