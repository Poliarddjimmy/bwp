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

            <div className="col-lg-3 col-md-4">
              <div className="single-bonus border-danger">
                <div className="content">
                  <Image src="/images/horses/horse_1_b.png" alt="" width="584" height="443" />
                  <div className="text text-start">
                    <strong>Rambo 1</strong>
                  </div>
                  <div className="text text-start color-one">
                    <small>Speed 1.3 Km Per Hour</small>
                  </div>
                </div>
              </div>
            </div>

            <div className="col-lg-3 col-md-4">
              <div className="single-bonus border-danger">
                <div className="content">
                  <Image src="/images/horses/horse_2_b.png" alt="" width="216" height="231" />
                  <div className="text text-start">
                    <strong>Rambo 2</strong>
                  </div>
                  <div className="text text-start color-one">
                    <small>Speed 1.3 Km Per Hour</small>
                  </div>
                </div>
              </div>
            </div>

            <div className="col-lg-3 col-md-4">
              <div className="single-bonus border-danger">
                <div className="content">
                  <Image src="/images/horses/horse_3_b.png" alt="" width="216" height="231" />
                  <div className="text text-start">
                    <strong>Rambo 3</strong>
                  </div>
                  <div className="text text-start color-one">
                    <small>Speed 1.3 Km Per Hour</small>
                  </div>
                </div>
              </div>
            </div>

            <div className="col-lg-3 col-md-4">
              <div className="single-bonus border-danger">
                <div className="content">
                  <Image src="/images/horses/horse_4_b.png" alt="" width="216" height="231" />
                  <div className="text text-start">
                    <strong>Rambo 4</strong>
                  </div>
                  <div className="text text-start color-one">
                    <small>Speed 1.3 Km Per Hour</small>
                  </div>
                </div>
              </div>
            </div>

            <div className="col-lg-3 col-md-4">
              <div className="single-bonus border-danger">
                <div className="content">
                  <Image src="/images/horses/horse_5_b.png" alt="" width="216" height="231" />
                  <div className="text text-start">
                    <strong>Rambo 5</strong>
                  </div>
                  <div className="text text-start color-one">
                    <small>Speed 1.3 Km Per Hour</small>
                  </div>
                </div>
              </div>
            </div>

            <div className="col-lg-3 col-md-4">
              <div className="single-bonus border-danger">
                <div className="content">
                  <Image src="/images/horses/horse_6_b.png" alt="" width="216" height="231" />
                  <div className="text text-start">
                    <strong>Rambo 6</strong>
                  </div>
                  <div className="text text-start color-one">
                    <small>Speed 1.3 Km Per Hour</small>
                  </div>
                </div>
              </div>
            </div>

            <div className="col-lg-3 col-md-4">
              <div className="single-bonus border-danger">
                <div className="content">
                  <Image src="/images/horses/horse_7_b.png" alt="" width="216" height="231" />
                  <div className="text text-start">
                    <strong>Rambo 7</strong>
                  </div>
                  <div className="text text-start color-one">
                    <small>Speed 1.3 Km Per Hour</small>
                  </div>
                </div>
              </div>
            </div>

            <div className="col-lg-3 col-md-4">
              <div className="single-bonus border-danger">
                <div className="content">
                  <Image src="/images/horses/horse_8_b.png" alt="" width="216" height="231" />
                  <div className="text text-start">
                    <strong>Rambo 8</strong>
                  </div>
                  <div className="text text-start color-one">
                    <small>Speed 1.3 Km Per Hour</small>
                  </div>
                </div>
              </div>
            </div>

          </div>
        </div>
      </section>
      <div className="btn d-flex justify-content-center">
        <button type="button" class="btn btn-danger btn-lg rounded-pill m-2"><strong>Next</strong></button>
        <button type="button" class="btn bg-transparent border-danger btn-lg rounded-pill m-2"><strong className="text-light">Cancel</strong></button>
      </div>


    </Layout>
  )
}

export default withAuth(Choosehorse);