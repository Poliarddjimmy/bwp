import Layout from "../../components/layouts/layout";
import Image from "next/image";


const Profiles = () => {

  return (
    <Layout>
      <div className="d-flex justify-content-start">
        <h4>Profile</h4>
      </div>

      <div className="profile d-flex justify-content-start">

        <div className="card-one w-25 border-danger rounded min-vh-70">
          <div className="profile pic m-2 d-flex justify-content-center">
            <Image src="/images/profile_pic.jpg" alt="avatar" className="avatar-lg rounded-circle border-danger" width="100" height="100" />
          </div>
          <div className="name d-flex justify-content-center">
            <h6 className="name p-2">Marc Arold Rosemond</h6>
          </div>
          <div className="country d-flex justify-content-start m-2">
            <i class="fa fa-home btn-sm color-one"></i>
            <strong className="text-light">Haïti</strong>
          </div>
          <div className="location d-flex justify-content-start m-2">
            <i className="fa fa-map-marker-alt btn-sm color-one"></i>
            <small className="text-light">St 12, h no 42 new town</small>
          </div>
          <div className="passion d-flex justify-content-start m-2">
            <i className="fa fa-heart btn-sm color-one"></i>
            <small className="text-light">Travel, Swimming</small>
          </div>
          <div className=" follow-btn d-flex justify-content-center">
            <button type="button" class="btn btn-danger rounded-pill">follow</button>
          </div>
          <div className="d-flex justify-content-center m-2">
            <a type="button" class="btn-floating deep-purple border-danger btn-sm rounded-circle m-1"><i class="fab fa-facebook-f fa-sm" aria-hidden="true"></i></a>
            <a type="button" class="btn-floating deep-purple border-danger btn-sm rounded-circle m-1"><i class="fab fa-twitter fa-sm" aria-hidden="true"></i></a>
            <a type="button" class="btn-floating deep-purple border-danger btn-sm rounded-circle m-1"><i class="fab fa-instagram fa-sm" aria-hidden="true"></i></a>
          </div>
          <div>
            <hr class="bg-danger border-1 border-top border-danger m-4" />
            <small className="color-one d-flex justify-content-center">Member since mar 21, 2021</small>
          </div>
        </div>

        <div className="w-80 d-flex flex-column bg-secondary border rounded border-danger ml-2">
          <table className="table">
            <thead>
              <tr>
                <th scope="col">Recent Notifications</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td className="border-bottom border-danger p-2 m-2">
                  <div className="table-line">
                    <a type="button" class="btn-floating deep-purple bg-danger btn-sm rounded-circle m-1"><i class="fab fa-cuttlefish fa-sm" aria-hidden="true"></i></a>
                    <small className="text-light">Bet, Play Earn or view. A Unique platform for your Races</small>
                  </div>
                  <div className="d-flex justify-content-lg-between">
                    <div className="table-line">
                      <small className="color-one">Your Chance is here so grab it</small>
                    </div>
                    <div className="table-line d-flex justify-content-end">
                      <small className="color-one">1 min ago</small>
                    </div>
                  </div>
                </td>
              </tr>

              <tr>
                <td className="border-bottom border-danger p-2 m-2">
                  <div className="table-line">
                    <a type="button" class="btn-floating deep-purple bg-danger btn-sm rounded-circle m-1"><i class="fab fa-cuttlefish fa-sm" aria-hidden="true"></i></a>
                    <small className="text-light">Bet, Play Earn or view. A Unique platform for your Races</small>
                  </div>
                  <div className="d-flex justify-content-lg-between">
                    <div className="table-line">
                      <small className="color-one">Your Chance is here so grab it</small>
                    </div>
                    <div className="table-line d-flex justify-content-end">
                      <small className="color-one">1 min ago</small>
                    </div>
                  </div>
                </td>
              </tr>
              <tr>
                <td className="border-bottom border-danger p-2 m-2">
                  <div className="table-line">
                    <a type="button" class="btn-floating deep-purple bg-danger btn-sm rounded-circle m-1"><i class="fab fa-cuttlefish fa-sm" aria-hidden="true"></i></a>
                    <small className="text-light">Bet, Play Earn or view. A Unique platform for your Races</small>
                  </div>
                  <div className="d-flex justify-content-lg-between">
                    <div className="table-line">
                      <small className="color-one">Your Chance is here so grab it</small>
                    </div>
                    <div className="table-line d-flex justify-content-end">
                      <small className="color-one">1 min ago</small>
                    </div>
                  </div>
                </td>
              </tr>
              <tr>
                <td className="border-bottom border-danger p-2 m-2">
                  <div className="table-line">
                    <a type="button" class="btn-floating deep-purple bg-danger btn-sm rounded-circle m-1"><i class="fab fa-cuttlefish fa-sm" aria-hidden="true"></i></a>
                    <small className="text-light">Bet, Play Earn or view. A Unique platform for your Races</small>
                  </div>
                  <div className="d-flex justify-content-lg-between">
                    <div className="table-line">
                      <small className="color-one">Your Chance is here so grab it</small>
                    </div>
                    <div className="table-line d-flex justify-content-end">
                      <small className="color-one">1 min ago</small>
                    </div>
                  </div>
                </td>
              </tr>
              <tr>
                <td className="border-bottom border-danger p-2 m-2">
                  <div className="table-line">
                    <a type="button" class="btn-floating deep-purple bg-danger btn-sm rounded-circle m-1"><i class="fab fa-cuttlefish fa-sm" aria-hidden="true"></i></a>
                    <small className="text-light">Bet, Play Earn or view. A Unique platform for your Races</small>
                  </div>
                  <div className="d-flex justify-content-lg-between">
                    <div className="table-line">
                      <small className="color-one">Your Chance is here so grab it</small>
                    </div>
                    <div className="table-line d-flex justify-content-end">
                      <small className="color-one">1 min ago</small>
                    </div>
                  </div>
                </td>
              </tr>
            </tbody>
          </table>
        </div>

      </div>

      <div className="best-players">

        <div className="">
          <small className="text-light">Best</small>
        </div>
        <div className="">
          <h4 className="text-light">Players</h4>
        </div>
        <div className="col d-flex justify-content-sm-between">

          <div className="min-vh-30 border-danger rounded w-20 bg-secondary">
            <div className="d-flex justify-content-sm-between">
              <span className="badge bp-one text-light rounded-pill m-1 justify-content start"><i class="fab fa-trophy-alt fa-sm" aria-hidden="true" /> #1</span>
              <div className="">
                <button class="btn btn-sm justify-content-end"><i class="fa fa-plus btn-sm border-danger color-one" /></button>
                <button class="btn btn-sm justify-content-end"><i class="fa fa-long-arrow-alt-up btn-sm color-white" /></button>
              </div>
            </div>
            <hr class="bg-white border-1 border-top m-2" />
            <div className="">
              <div className="profile pic m-2 d-flex justify-content-center">
                <Image src="/images/profile_pic.jpg" alt="avatar" className="avatar-lg rounded-circle border-danger" width="50" height="50" />
              </div>
              <strong className="text-light d-flex justify-content-center">Witty Lowrence</strong>
              <div>
                <div className="d-flex justify-content-center m-2">
                  <small className="text-light">2345</small>
                  <small className="color-one ml-1">Win</small>
                </div>

              </div>
            </div>
          </div>

          <div className="min-vh-30 border-danger rounded w-20 ml-1 bg-secondary">
            <div className="d-flex justify-content-sm-between">
              <span className="badge bp-one text-light rounded-pill m-1 justify-content start"><i class="fab fa-trophy-alt fa-sm" aria-hidden="true" /> #1</span>
              <div className="">
                <button class="btn btn-sm justify-content-end"><i class="fa fa-plus btn-sm border-danger color-one" /></button>
                <button class="btn btn-sm justify-content-end"><i class="fa fa-long-arrow-alt-up btn-sm color-white" /></button>
              </div>
            </div>
            <hr class="bg-white border-1 border-top m-2" />
            <div className="">
              <div className="profile pic m-2 d-flex justify-content-center">
                <Image src="/images/profile_pic.jpg" alt="avatar" className="avatar-lg rounded-circle border-danger" width="50" height="50" />
              </div>
              <strong className="text-light d-flex justify-content-center">Witty Lowrence</strong>
              <div>
                <div className="d-flex justify-content-center m-2">
                  <small className="text-light">2345</small>
                  <small className="color-one ml-1">Win</small>
                </div>

              </div>
            </div>
          </div>

          <div className="min-vh-30 border-danger rounded w-20 ml-1 bg-secondary">
            <div className="d-flex justify-content-sm-between">
              <span className="badge bp-one text-light rounded-pill m-1 justify-content start"><i class="fab fa-trophy-alt fa-sm" aria-hidden="true" /> #1</span>
              <div className="">
                <button class="btn btn-sm justify-content-end"><i class="fa fa-plus btn-sm border-danger color-one" /></button>
                <button class="btn btn-sm justify-content-end"><i class="fa fa-long-arrow-alt-up btn-sm color-white" /></button>
              </div>
            </div>
            <hr class="bg-white border-1 border-top m-2" />
            <div className="">
              <div className="profile pic m-2 d-flex justify-content-center">
                <Image src="/images/profile_pic.jpg" alt="avatar" className="avatar-lg rounded-circle border-danger" width="50" height="50" />
              </div>
              <strong className="text-light d-flex justify-content-center">Witty Lowrence</strong>
              <div>
                <div className="d-flex justify-content-center m-2">
                  <small className="text-light">2345</small>
                  <small className="color-one ml-1">Win</small>
                </div>

              </div>
            </div>
          </div>

          <div className="min-vh-30 border-danger rounded w-20 ml-1 bg-secondary">
            <div className="d-flex justify-content-sm-between">
              <span className="badge bp-one text-light rounded-pill m-1 justify-content start"><i class="fab fa-trophy-alt fa-sm" aria-hidden="true" /> #1</span>
              <div className="">
                <button class="btn btn-sm justify-content-end"><i class="fa fa-plus btn-sm border-danger color-one" /></button>
                <button class="btn btn-sm justify-content-end"><i class="fa fa-long-arrow-alt-up btn-sm color-white" /></button>
              </div>
            </div>
            <hr class="bg-white border-1 border-top m-2" />
            <div className="">
              <div className="profile pic m-2 d-flex justify-content-center">
                <Image src="/images/profile_pic.jpg" alt="avatar" className="avatar-lg rounded-circle border-danger" width="50" height="50" />
              </div>
              <strong className="text-light d-flex justify-content-center">Witty Lowrence</strong>
              <div>
                <div className="d-flex justify-content-center m-2">
                  <small className="text-light">2345</small>
                  <small className="color-one ml-1">Win</small>
                </div>

              </div>
            </div>
          </div>

          <div className="min-vh-30 border-danger rounded w-20 ml-1 bg-secondary">
            <div className="d-flex justify-content-sm-between">
              <span className="badge bp-one text-light rounded-pill m-1 justify-content start"><i class="fab fa-trophy-alt fa-sm" aria-hidden="true" /> #1</span>
              <div className="">
                <button class="btn btn-sm justify-content-end"><i class="fa fa-plus btn-sm border-danger color-one" /></button>
                <button class="btn btn-sm justify-content-end"><i class="fa fa-long-arrow-alt-up btn-sm color-white" /></button>
              </div>
            </div>
            <hr class="bg-white border-1 border-top m-2" />
            <div className="">
              <div className="profile pic m-2 d-flex justify-content-center">
                <Image src="/images/profile_pic.jpg" alt="avatar" className="avatar-lg rounded-circle border-danger" width="50" height="50" />
              </div>
              <strong className="text-light d-flex justify-content-center">Witty Lowrence</strong>
              <div>
                <div className="d-flex justify-content-center m-2">
                  <small className="text-light">2345</small>
                  <small className="color-one ml-1">Win</small>
                </div>

              </div>
            </div>
          </div>

        </div>
      </div>

    </Layout>
  )
}

export default Profiles