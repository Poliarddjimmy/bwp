import Image from 'next/image'
import Layout from '../components/layouts/layout'
import withAuth from "../components/hocs/withAuth"
import { useRouter } from 'next/router'
import { useEffect } from 'react'
import { showProfileAction } from '../redux/actions/profileActionCreators'
import { useSelector, useDispatch } from 'react-redux'
import { current } from 'immer'
import ProfileNav from '../components/layouts/profileNav'
import Profileform from '../components/layouts/profilform'


const Profile = ({ currentUser }) => {
  const router = useRouter()
  const { profile } = useSelector(state => state.profile)
  const dispatch = useDispatch()

  useEffect(() => {
    if (router.query?.user) {
      dispatch(showProfileAction(router.query?.user))
    } else {
      dispatch(showProfileAction(currentUser?.id))
    }
  }, [router.query?.user, currentUser, dispatch])

  return <Layout>

    <div className="profile-banner-large bg-img mt-n4" data-bg="/images/banner/profile-banner.jpg">
    </div>
    <div className="profile-menu-area bg-white">
      <div className="container">
        <div className="row align-items-center">
          <div className="col-lg-3 col-md-3">
            <div className="profile-picture-box">
              <figure className="profile-picture">
                <a href="profile.html">
                  <Image width="270" height="270" className="p-2" src="/images/profile/profile-1.jpg" alt="profile picture" />
                </a>
              </figure>
            </div>
          </div>
          
            <ProfileNav/>
          
          <div className="col-lg-2 col-md-3 d-none d-md-block">
            <div className="profile-edit-panel">
              <a href="edirprofile">
              <button className="edit-btn">edit profile</button>
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
    <div className="container">
      <div className="row">
        <div className="col-lg-3 order-2 order-lg-1">
          <aside className="widget-area profile-sidebar">

            <div className="card widget-item">
              <h4 className="widget-title">{currentUser?.name}</h4>
              <div className="widget-body">
                {/* <div className="about-author"> */}
                {/* <p>I Don’t know how? But i believe that it is possible one day if i stay with my dream all time</p> */}
                <ul className="author-into-list">
                  {/* <li><a href="#"><i className="bi bi-office-bag"></i>Graphic Designer</a></li> */}
                  <li><a href="#"><i className="bi bi-home"></i>{profile?.city}, {profile?.country}</a></li>
                  <li><a href="#"><i className="bi bi-location-pointer"></i>{profile?.address}</a></li>
                  <li><a href="#"><i className="bi bi-heart-beat"></i>Travel, Swimming</a></li>
                </ul>
                {/* </div> */}
              </div>
            </div>

          </aside>
        </div>

        <div className="col-lg-6 order-1 order-lg-2"> 
    
              <Profileform />     
        </div>

        <div className="col-lg-3 order-3">
          <aside className="widget-area">

            <div className="card widget-item">
              <h4 className="widget-title">Recent Notifications</h4>
              <div className="widget-body">
                <ul className="like-page-list-wrapper">
                  <li className="unorder-list">

                    <span className="profile-thumb">
                      <a href="#">
                        <figure className="profile-thumb-small">
                          <Image width="700" height="700" src="/images/profile/profile-small-9.jpg" alt="profile picture" />
                        </figure>
                      </a>
                    </span>


                    <span className="unorder-list-info">
                      <h3 className="list-title"><a href="#">Any one can join with us if you want</a></h3>
                      <p className="list-subtitle">5 min ago</p>
                    </span>
                  </li>
                  <li className="unorder-list">

                    <span className="profile-thumb">
                      <a href="#">
                        <figure className="profile-thumb-small">
                          <Image width="700" height="700" src="/images/profile/profile-small-35.jpg" alt="profile picture" />
                        </figure>
                      </a>
                    </span>


                    <span className="unorder-list-info">
                      <h3 className="list-title"><a href="#">Any one can join with us if you want</a></h3>
                      <p className="list-subtitle">10 min ago</p>
                    </span>
                  </li>
                  <li className="unorder-list">

                    <span className="profile-thumb">
                      <a href="#">
                        <figure className="profile-thumb-small">
                          <Image width="700" height="700" src="/images/profile/profile-small-15.jpg" alt="profile picture" />
                        </figure>
                      </a>
                    </span>


                    <span className="unorder-list-info">
                      <h3 className="list-title"><a href="#">Any one can join with us if you want</a></h3>
                      <p className="list-subtitle">18 min ago</p>
                    </span>
                  </li>
                  <li className="unorder-list">

                    <span className="profile-thumb">
                      <a href="#">
                        <figure className="profile-thumb-small">
                          <Image width="700" height="700" src="/images/profile/profile-small-6.jpg" alt="profile picture" />
                        </figure>
                      </a>
                    </span>


                    <span className="unorder-list-info">
                      <h3 className="list-title"><a href="#">Any one can join with us if you want</a></h3>
                      <p className="list-subtitle">25 min ago</p>
                    </span>
                  </li>
                  <li className="unorder-list">

                    <span className="profile-thumb">
                      <a href="#">
                        <figure className="profile-thumb-small">
                          <Image width="700" height="700" src="/images/profile/profile-small-34.jpg" alt="profile picture" />
                        </figure>
                      </a>
                    </span>


                    <span className="unorder-list-info">
                      <h3 className="list-title"><a href="#">Any one can join with us if you want</a></h3>
                      <p className="list-subtitle">39 min ago</p>
                    </span>
                  </li>
                </ul>
              </div>
            </div>
          </aside>
        </div>
      </div>
    </div>

  </Layout>
}

export default withAuth(Profile)