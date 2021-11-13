import Layout from "../../components/layouts/layout";
import Image from "next/image";

const Horsedetails = ({ currentUser }) => {

  return (
    <Layout>
      <div className="horse-details row p-2 m-2">

        <div className="col-lg-6 col-md-8 race-details">
          <div className="border-danger race-details bg-primary-color pt-5 pb-5">
            <Image className="img" src="/images/horses/horse_1_b.png" alt="" width="360" height="360" />
          </div>
        </div>

        <div className="col-lg-6 col-md-8 race-details">
          <h3 className="text-one">The Rambo</h3>

          <div className="row">
            <div className="col-lg-6 col-md-12 d-flex justify-content-center">
              <div className="border-danger rounded w-100 text-center">
                <small className="color-one fw-bold">10 Wining Streak</small>
              </div>
            </div>
            <div className="col-lg-6 col-md-12 d-flex">
              <div className="justify-content-center border-light rounded w-100 text-center">
                <small className="text-light fw-bold">Wining Prices</small>
              </div>
            </div>
          </div>
          <small className="text-light">The Rambo horse is the most athletic and most powerfull bythe nature has wining streak of 10x of more earning then 4,000.....</small>

          <div className="tabs-container d-flex justify-content-center">
            <div className="w-90 m-2">
              <ul className="nav nav-pills border-danger rounded-pill d-flex justify-content-around p-1">
                <small className="pl-3 pr-3" href="#">Info</small>
                <small className="pl-3 pr-3 bg-danger rounded-pill text-dark" href="#">Plays</small>
                <small className="pl-3 pr-3" href="#">History</small>
                <small className="pl-3 pr-3" href="#">Bets</small>
              </ul>
            </div>
          </div>

          <div className="table">
            <table className="table">

              <tbody>
                <tr>
                  <td className="border-bottom">
                    <div className="tab-row d-flex justify-content-start">
                      <div className="img">
                        <Image src="/images/profile_pic.jpg" alt="avatar" className="avatar-lg rounded-circle border-light" width="40" height="40" />
                      </div>
                      <div className="col-lg-6">
                        <div className="row ml-3">
                          <small className="text-muted">Jasson Parker</small>
                        </div>
                        <div className="row ml-3">
                          <small className="text-light fw-bold">Jasson Parker</small>
                        </div>
                      </div>
                    </div>
                  </td>
                </tr>

                <tr>
                  <td className="border-bottom">
                    <div className="tab-row d-flex justify-content-start">
                      <div className="img">
                        <Image src="/images/profile_pic.jpg" alt="avatar" className="avatar-lg rounded-circle border-light" width="40" height="40" />
                      </div>
                      <div className="col-lg-6">
                        <div className="row ml-3">
                          <small className="text-muted">Jasson Parker</small>
                        </div>
                        <div className="row ml-3">
                          <small className="text-light fw-bold">Jasson Parker</small>
                        </div>
                      </div>
                    </div>
                  </td>
                </tr>

              </tbody>
            </table>
          </div>

          <div className="card border-1 border-danger race-details bg-secondary d-flex align-items-center justify-content-center pt-3 pb-3">
            <div className="text d-flex justify-content-center mb-3">
              <strong className="text-light">$6,6134.34</strong>
            </div>
            <div className="col-8 d-flex justify-content-around p-1">
              <button type="button" className="btn btn-primary-color rounded-pill text-light pl-3 pr-3">Play now</button>
              <button type="button" className="btn btn-transparent rounded-pill text-light border-danger pl-3 pr-3">Primary</button>
            </div>
          </div>

        </div>

      </div>

    </Layout>
  )
}

export default Horsedetails