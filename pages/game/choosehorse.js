import Link from "next/link"
import Image from 'next/image'
import withAuth from "../../components/hocs/withAuth"
import Layout from "../../components/layouts/layout"

// const horseImage = require('/public/images/horses/horse_1_b');
const Choosehorse = ({ currentUser }) => {
  return (
    <Layout>
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

      <section className="bonus-area">
        <div className="container">

          <div className="row">

            <div className="flip-card col-lg-4 col-md-3">
              <div className="flip-card-inner single-bonus border-danger p-2">
                <div className="flip-card-front d-flex flex-column justify-content-center text-left p-2">
                  <img className="img-flip" src="/images/horses/horse_1_b.png" alt="" style={{ width: '75%', height: '110px' }} />
                  <strong>Rambo 1</strong>
                  <div className="text color-one">
                    <small>Speed 1.3 Km Per Hour</small>
                  </div>
                </div>
                <div className="flip-card-back text-left p-3">
                  <img src="/images/horses/horse_1_b.png" alt="" style={{ width: '75%', height: '90px' }} />
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
                    <strong>Ratings:</strong>
                    <img src="/images/4-stars-rate.png" alt="" style={{ width: '50%', height: '30px' }} />
                  </div>
                </div>
              </div>
            </div>

            <div className="flip-card col-lg-4 col-md-3">
              <div className="flip-card-inner single-bonus border-danger p-2">
                <div className="flip-card-front d-flex flex-column justify-content-center text-left p-2">
                  <img className="img-flip" src="/images/horses/horse_2_b.png" alt="" style={{ width: '75%', height: '110px' }} />
                  <strong>Rambo 2</strong>
                  <div className="text color-one">
                    <small>Speed 1.3 Km Per Hour</small>
                  </div>
                </div>
                <div className="flip-card-back text-left p-3">
                  <img src="/images/horses/horse_2_b.png" alt="" style={{ width: '75%', height: '90px' }} />
                  <strong>Rambo 2</strong>
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
                    <strong>Ratings:</strong>
                    <img src="/images/4-stars-rate.png" alt="" style={{ width: '50%', height: '30px' }} />
                  </div>
                </div>
              </div>
            </div>

            <div className="flip-card col-lg-4 col-md-3">
              <div className="flip-card-inner single-bonus border-danger p-2">
                <div className="flip-card-front d-flex flex-column justify-content-center text-left p-2">
                  <img className="img-flip" src="/images/horses/horse_3_b.png" alt="" style={{ width: '75%', height: '110px' }} />
                  <strong>Rambo 3</strong>
                  <div className="text color-one">
                    <small>Speed 1.3 Km Per Hour</small>
                  </div>
                </div>
                <div className="flip-card-back text-left p-3">
                  <img src="/images/horses/horse_3_b.png" alt="" style={{ width: '75%', height: '90px' }} />
                  <strong>Rambo 3</strong>
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
                    <strong>Ratings:</strong>
                    <img src="/images/4-stars-rate.png" alt="" style={{ width: '50%', height: '30px' }} />
                  </div>
                </div>
              </div>
            </div>

            <div className="flip-card col-lg-4 col-md-3">
              <div className="flip-card-inner single-bonus border-danger p-2">
                <div className="flip-card-front d-flex flex-column justify-content-center text-left p-2">
                  <img className="img-flip" src="/images/horses/horse_4_b.png" alt="" style={{ width: '75%', height: '110px' }} />
                  <strong>Rambo 4</strong>
                  <div className="text color-one">
                    <small>Speed 1.3 Km Per Hour</small>
                  </div>
                </div>
                <div className="flip-card-back text-left p-3">
                  <img src="/images/horses/horse_4_b.png" alt="" style={{ width: '75%', height: '90px' }} />
                  <strong>Rambo 4</strong>
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
                    <strong>Ratings:</strong>
                    <img src="/images/4-stars-rate.png" alt="" style={{ width: '50%', height: '30px' }} />
                  </div>
                </div>
              </div>
            </div>

            <div className="flip-card col-lg-4 col-md-3">
              <div className="flip-card-inner single-bonus border-danger p-2">
                <div className="flip-card-front d-flex flex-column justify-content-center text-left p-2">
                  <img className="img-flip" src="/images/horses/horse_5_b.png" alt="" style={{ width: '75%', height: '110px' }} />
                  <strong>Rambo 5</strong>
                  <div className="text color-one">
                    <small>Speed 1.3 Km Per Hour</small>
                  </div>
                </div>
                <div className="flip-card-back text-left p-3">
                  <img src="/images/horses/horse_5_b.png" alt="" style={{ width: '75%', height: '90px' }} />
                  <strong>Rambo 5</strong>
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
                    <strong>Ratings:</strong>
                    <img src="/images/4-stars-rate.png" alt="" style={{ width: '50%', height: '30px' }} />
                  </div>
                </div>
              </div>
            </div>

            <div className="flip-card col-lg-4 col-md-3">
              <div className="flip-card-inner single-bonus border-danger p-2">
                <div className="flip-card-front d-flex flex-column justify-content-center text-left p-2">
                  <img className="img-flip" src="/images/horses/horse_6_b.png" alt="" style={{ width: '75%', height: '110px' }} />
                  <strong>Rambo 6</strong>
                  <div className="text color-one">
                    <small>Speed 1.3 Km Per Hour</small>
                  </div>
                </div>
                <div className="flip-card-back text-left p-3">
                  <img src="/images/horses/horse_6_b.png" alt="" style={{ width: '75%', height: '90px' }} />
                  <strong>Rambo 6</strong>
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
                    <strong>Ratings:</strong>
                    <img src="/images/4-stars-rate.png" alt="" style={{ width: '50%', height: '30px' }} />
                  </div>
                </div>
              </div>
            </div>

            <div className="flip-card col-lg-4 col-md-3">
              <div className="flip-card-inner single-bonus border-danger p-2">
                <div className="flip-card-front d-flex flex-column justify-content-center text-left p-2">
                  <img className="img-flip" src="/images/horses/horse_7_b.png" alt="" style={{ width: '75%', height: '110px' }} />
                  <strong>Rambo 7</strong>
                  <div className="text color-one">
                    <small>Speed 1.3 Km Per Hour</small>
                  </div>
                </div>
                <div className="flip-card-back text-left p-3">
                  <img src="/images/horses/horse_7_b.png" alt="" style={{ width: '75%', height: '90px' }} />
                  <strong>Rambo 7</strong>
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
                    <strong>Ratings:</strong>
                    <img src="/images/4-stars-rate.png" alt="" style={{ width: '50%', height: '30px' }} />
                  </div>
                </div>
              </div>
            </div>

            <div className="flip-card col-lg-4 col-md-3">
              <div className="flip-card-inner single-bonus border-danger p-2">
                <div className="flip-card-front d-flex flex-column justify-content-center text-left p-2">
                  <img className="img-flip" src="/images/horses/horse_8_b.png" alt="" style={{ width: '75%', height: '110px' }} />
                  <strong>Rambo 8</strong>
                  <div className="text color-one">
                    <small>Speed 1.3 Km Per Hour</small>
                  </div>
                </div>
                <div className="flip-card-back text-left p-3">
                  <img src="/images/horses/horse_8_b.png" alt="" style={{ width: '75%', height: '90px' }} />
                  <strong>Rambo 8</strong>
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
                    <strong>Ratings:</strong>
                    <img src="/images/4-stars-rate.png" alt="" style={{ width: '50%', height: '30px' }} />
                  </div>
                </div>
              </div>
            </div>


          </div>
          <div className="btn d-flex justify-content-center">
            <button type="button" class="btn btn-danger btn-lg rounded-pill m-2"><strong>Next</strong></button>
            <button type="button" class="btn bg-transparent border-danger btn-lg rounded-pill m-2"><strong className="text-light">Cancel</strong></button>
          </div>
        </div>
      </section>



    </Layout>
  )
}

export default withAuth(Choosehorse);