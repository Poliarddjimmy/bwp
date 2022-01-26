import Layout from "../../components/layouts/layout";
import Image from "next/image";
import { useDispatch, useSelector } from "react-redux"
import { useState, useEffect } from "react"
import { showProfileAction } from "../../redux/actions/profileActionCreators";
import { useRouter } from "next/router"

const Profiles = () => {
  const dispatch = useDispatch()
  const { profile } = useSelector(state => state.profile)
  const { currentUser } = useSelector(state => state.user)
  const router = useRouter()

  useEffect(() => {
    dispatch(showProfileAction(router.query?.id))
  }, [])

  return (
    <Layout>

      <div className="profile d-flex justify-content-start">

        <div className="card-one col-md-4">

          <div className="d-flex justify-content-start">
            <h4>Profile</h4>
          </div>
          <div className="border-danger shadow pb-4 pt-4 rounded">
            <div className="profile pic m-2 d-flex justify-content-center">
              <Image src="/images/profile_pic.jpg" alt="avatar" className="avatar-lg rounded-circle border-danger" width="100" height="100" />
            </div>
            <div className="name d-flex justify-content-center">
              <h6 className="name p-2">{currentUser?.name}</h6>
            </div>
            <div className="country d-flex justify-content-start m-2">
              <i className="fa fa-home btn-sm color-one"></i>
              <strong className="text-light">{profile?.country}</strong>
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
              <button type="button" className="btn btn-danger rounded-pill">follow</button>
            </div>
            <div className="social-media d-flex justify-content-center m-2">
              <a type="button" className="btn-floating deep-purple border-danger btn-sm rounded-circle m-1"><i className="fab fa-facebook-f fa-sm d-flex justify-content-center align-items-center" aria-hidden="true"></i></a>
              <a type="button" className="btn-floating deep-purple border-danger btn-sm rounded-circle m-1"><i className="fab fa-twitter fa-sm d-flex justify-content-center align-items-center" aria-hidden="true"></i></a>
              <a type="button" className="btn-floating deep-purple border-danger btn-sm rounded-circle m-1"><i className="fab fa-instagram fa-sm d-flex justify-content-center align-items-center" aria-hidden="true"></i></a>
            </div>
            <div>
              <hr className="bg-danger border-1 border-top border-danger m-4" />
              <small className="color-one d-flex justify-content-center">Member since mar 21, 2021</small>
            </div>
          </div>
        </div>

        <div className="col-md-8">
          <div className="">
            <h4>Notifications</h4>
          </div>
          <div className="bg-secondary border-danger p-3 rounded">
            <div className="">
              <div className="">
                Recent Notifications
              </div>

            </div>

            <div className="mt-4">
              <div className="mt-4 d-flex border-bottom-danger pb-2">
                <div className="w-100">

                  <li className="color-one">
                    <small className="text-light">Bet, Play Earn or view. A Unique platform for your Races</small>
                  </li>

                  <div className="d-flex justify-content-lg-between">
                    <div className="">
                      <small className="color-one">Your Chance is here so grab it</small>
                    </div>
                    <div className=" d-flex justify-content-end">
                      <small className="color-one">1 min ago</small>
                    </div>
                  </div>
                </div>
              </div>

            </div>
          </div>

        </div>

      </div>

      <div className="best-players container mt-4">

        <div className="row">
          <div className="col-lg-12 d-flex flex-column">
            <small className="text-light">Best</small>
            <h4 className="text-light">Players</h4>
          </div>
        </div>

        <div className="row mt-3">

          <div className="col-lg-3">
            <div className="card-layout min-vh-25 border-danger bg-secondary p-2">
              <div className="d-flex justify-content-sm-between">
                <span className="badge bp-one text-light rounded-pill m-1 justify-content start"><i className="fas fa-trophy" /> #1</span>
                <div className="card-button d-flex align-items-center">
                  <i className="fa fa-plus border-danger color-one p-1 align-items-center d-flex" />
                  <i className="fa fa-long-arrow-alt-up color-white fa-rotate-0" />
                </div>
              </div>
              <hr className="bg-white border-1 border-top m-2" />
              <div className="">
                <div className="profile pic m-2 d-flex justify-content-center">
                  <Image src="/images/profile_pic.jpg" alt="avatar" className="avatar-lg rounded-circle border-danger" width="50" height="50" />
                </div>
                <strong className="text-light d-flex justify-content-center">Witty Lowrence</strong>
                <div>
                  <div className="d-flex justify-content-center m-2">
                    <strong className="ml-1">3998-0784</strong>
                  </div>
                  <div className="d-flex justify-content-center m-2">
                    <small className="text-light">2330 HTG</small>
                    <small className="color-one ml-1">Win</small>
                  </div>

                </div>
              </div>
            </div>
          </div>

        </div>


      </div>

    </Layout >
  )
}

export default Profiles