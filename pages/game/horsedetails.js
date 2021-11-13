import Layout from "../../components/layouts/layout";
import Image from "next/image";

const Horsedetails = ({ currentUser }) => {

  return (
    <Layout>
      <div className="horse-details d-flex justify-content-center p-2 m-2">

        <div className="first-col col-lg-6 col-md-8 border-danger race-details min-vh-80 bg-primary-color">
          <div className="horse-pic d-flex align-items-center justify-content-center">
            <Image className="img" src="/images/horses/horse_1_b.png" alt="" width="360" height="360" />
          </div>
        </div>

        <div className="first-col col-lg-6 col-md-8 race-details min-vh-80">
          <h3 className="text-one m-2">The Rambo</h3>

          <div className="d-flex justify-content-lg-between">
            <div className="col-sm-5 d-flex justify-content-center border-danger rounded ml-3">
              <small className="color-one fw-bold">10 Wining Streak</small>
            </div>
            <div className="col-sm-6 d-flex justify-content-center border-light rounded">
              <small className="text-light fw-bold">10 Wining Streak</small>
            </div>
          </div>
          <small className="text-light">The Rambo horse is the most athletic and most powerfull bythe nature has wining streak of 10x of more earning then 4,000.....</small>

          <div className="tabs-container d-flex justify-content-center">
            <div className="w-90 m-2">
              <ul class="nav nav-pills border-danger rounded-pill d-flex justify-content-around p-1">
                <small class="pl-3 pr-3" href="#">Info</small>
                <small class="pl-3 pr-3 bg-danger rounded-pill text-dark" href="#">Plays</small>
                <small class="pl-3 pr-3" href="#">History</small>
                <small class="pl-3 pr-3" href="#">Bets</small>
              </ul>
            </div>
          </div>

          <div className="table">
            <table class="table">

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

          <div className="card border-1 border-danger race-details min-vh-25 bg-secondary justify-content-center p-3">
            <div className="img">
              <Image src="/images/profile_pic.jpg" alt="avatar" className="avatar-lg rounded-circle border-light" width="40" height="40" />
            </div>
          </div>

        </div>

      </div>

    </Layout>
  )
}

export default Horsedetails