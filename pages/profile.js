import Image from 'next/image'
import Layout from '../components/layouts/layout'
import withAuth from "../components/hocs/withAuth"
import { useRouter } from 'next/router'
import { useEffect } from 'react'
import { showProfileAction } from '../redux/actions/profileActionCreators'
import { useSelector, useDispatch } from 'react-redux'
import { current } from 'immer'


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
          <div className="col-lg-6 col-md-6 offset-lg-1">
            <div className="profile-menu-wrapper">
              <div className="main-menu-inner header-top-navigation">
                <nav>
                  <ul className="main-menu">
                    <li className="active"><a href="#">timeline</a></li>
                    <li><a href="about.html">about</a></li>
                    <li><a href="photos.html">photos</a></li>
                    <li><a href="friends.html">friends</a></li>
                    <li><a href="about.html">more</a></li>
                    <li className="d-inline-block d-md-none"><a href="profile.html">edit profile</a></li>
                  </ul>
                </nav>
              </div>
            </div>
          </div>
          <div className="col-lg-2 col-md-3 d-none d-md-block">
            <div className="profile-edit-panel">
              <button className="edit-btn">edit profile</button>
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



            <div className="card widget-item">
              <h4 className="widget-title">Sweets Memories</h4>
              <div className="widget-body">
                <div className="sweet-galley img-gallery">
                  <div className="row row-5">
                    <div className="col-4">
                      <div className="gallery-tem">
                        <figure className="post-thumb">
                          <a className="gallery-selector" href="/images/gallery/gallery-1.jpg">
                            <Image width="500" height="500" src="/images/gallery/gallery-1.jpg" alt="sweet memory" />
                          </a>
                        </figure>
                      </div>
                    </div>
                    <div className="col-4">
                      <div className="gallery-tem">
                        <figure className="post-thumb">
                          <a className="gallery-selector" href="/images/gallery/gallery-2.jpg">
                            <Image width="500" height="500" src="/images/gallery/gallery-2.jpg" alt="sweet memory" />
                          </a>
                        </figure>
                      </div>
                    </div>
                    <div className="col-4">
                      <div className="gallery-tem">
                        <figure className="post-thumb">
                          <a className="gallery-selector" href="/images/gallery/gallery-3.jpg">
                            <Image width="500" height="500" src="/images/gallery/gallery-3.jpg" alt="sweet memory" />
                          </a>
                        </figure>
                      </div>
                    </div>
                    <div className="col-4">
                      <div className="gallery-tem">
                        <figure className="post-thumb">
                          <a className="gallery-selector" href="/images/gallery/gallery-4.jpg">
                            <Image width="500" height="500" src="/images/gallery/gallery-4.jpg" alt="sweet memory" />
                          </a>
                        </figure>
                      </div>
                    </div>
                    <div className="col-4">
                      <div className="gallery-tem">
                        <figure className="post-thumb">
                          <a className="gallery-selector" href="/images/gallery/gallery-5.jpg">
                            <Image width="500" height="500" src="/images/gallery/gallery-5.jpg" alt="sweet memory" />
                          </a>
                        </figure>
                      </div>
                    </div>
                    <div className="col-4">
                      <div className="gallery-tem">
                        <figure className="post-thumb">
                          <a className="gallery-selector" href="/images/gallery/gallery-6.jpg">
                            <Image width="500" height="500" src="/images/gallery/gallery-6.jpg" alt="sweet memory" />
                          </a>
                        </figure>
                      </div>
                    </div>
                    <div className="col-4">
                      <div className="gallery-tem">
                        <figure className="post-thumb">
                          <a className="gallery-selector" href="/images/gallery/gallery-7.jpg">
                            <Image width="500" height="500" src="/images/gallery/gallery-7.jpg" alt="sweet memory" />
                          </a>
                        </figure>
                      </div>
                    </div>
                    <div className="col-4">
                      <div className="gallery-tem">
                        <figure className="post-thumb">
                          <a className="gallery-selector" href="/images/gallery/gallery-8.jpg">
                            <Image width="500" height="500" src="/images/gallery/gallery-8.jpg" alt="sweet memory" />
                          </a>
                        </figure>
                      </div>
                    </div>
                    <div className="col-4">
                      <div className="gallery-tem">
                        <figure className="post-thumb">
                          <a className="gallery-selector" href="/images/gallery/gallery-9.jpg">
                            <Image width="500" height="500" src="/images/gallery/gallery-9.jpg" alt="sweet memory" />
                          </a>
                        </figure>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>



            <div className="card widget-item">
              <h4 className="widget-title">page you may like</h4>
              <div className="widget-body">
                <ul className="like-page-list-wrapper">
                  <li className="unorder-list">

                    <span className="profile-thumb">
                      <a href="#">
                        <figure className="profile-thumb-small">
                          <Image width="200" height="200" src="/images/profile/profile-small-33.jpg" alt="profile picture" />
                        </figure>
                      </a>
                    </span>


                    <span className="unorder-list-info">
                      <h3 className="list-title"><a href="#">Travel The World</a></h3>
                      <p className="list-subtitle"><a href="#">adventure</a></p>
                    </span>
                    <button className="like-button active">
                      <Image width="20" height="20" className="heart" src="/images/icons/heart.png" alt="" />
                      <Image width="20" height="20" className="heart-color" src="/images/icons/heart-color.png" alt="" />
                    </button>
                  </li>
                  <li className="unorder-list">

                    <span className="profile-thumb">
                      <a href="#">
                        <figure className="profile-thumb-small">
                          <Image width="200" height="200" src="/images/profile/profile-small-30.jpg" alt="profile picture" />
                        </figure>
                      </a>
                    </span>


                    <span className="unorder-list-info">
                      <h3 className="list-title"><a href="#">Foodcort Nirala</a></h3>
                      <p className="list-subtitle"><a href="#">food</a></p>
                    </span>
                    <button className="like-button">
                      <Image width="20" height="20" className="heart" src="/images/icons/heart.png" alt="" />
                      <Image width="20" height="20" className="heart-color" src="/images/icons/heart-color.png" alt="" />
                    </button>
                  </li>
                  <li className="unorder-list">

                    <span className="profile-thumb">
                      <a href="#">
                        <figure className="profile-thumb-small">
                          <Image width="700" height="700" src="/images/profile/profile-small-5.jpg" alt="profile picture" />
                        </figure>
                      </a>
                    </span>


                    <span className="unorder-list-info">
                      <h3 className="list-title"><a href="#">Rolin Theitar</a></h3>
                      <p className="list-subtitle"><a href="#">drama</a></p>
                    </span>
                    <button className="like-button">
                      <Image width="20" height="20" className="heart" src="/images/icons/heart.png" alt="" />
                      <Image width="20" height="20" className="heart-color" src="/images/icons/heart-color.png" alt="" />
                    </button>
                  </li>
                  <li className="unorder-list">

                    <span className="profile-thumb">
                      <a href="#">
                        <figure className="profile-thumb-small">
                          <Image width="700" height="700" src="/images/profile/profile-small-29.jpg" alt="profile picture" />
                        </figure>
                      </a>
                    </span>


                    <span className="unorder-list-info">
                      <h3 className="list-title"><a href="#">Active Mind</a></h3>
                      <p className="list-subtitle"><a href="#">fitness</a></p>
                    </span>
                    <button className="like-button">
                      <Image width="20" height="20" className="heart" src="/images/icons/heart.png" alt="" />
                      <Image width="20" height="20" className="heart-color" src="/images/icons/heart-color.png" alt="" />
                    </button>
                  </li>
                </ul>
              </div>
            </div>

          </aside>
        </div>

        <div className="col-lg-6 order-1 order-lg-2">

          <div className="card card-small">
            <div className="share-box-inner">

              <div className="profile-thumb">
                <a href="#">
                  <figure className="profile-thumb-middle">
                    <Image width="700" height="700" src="/images/profile/profile-small-37.jpg" alt="profile picture" />
                  </figure>
                </a>
              </div>



              <div className="share-content-box w-100">
                <form className="share-text-box">
                  <textarea name="share" className="share-text-field" aria-disabled="true" placeholder="Say Something" data-toggle="modal" data-target="#textbox" id="email"></textarea>
                  <button className="btn-share" type="submit">share</button>
                </form>
              </div>


              <div className="modal fade" id="textbox" aria-labelledby="textbox">
                <div className="modal-dialog">
                  <div className="modal-content">
                    <div className="modal-header">
                      <h5 className="modal-title">Share Your Mood</h5>
                      <button type="button" className="close" data-dismiss="modal" aria-label="Close">
                        <span aria-hidden="true">&times;</span>
                      </button>
                    </div>
                    <div className="modal-body custom-scroll">
                      <textarea name="share" className="share-field-big custom-scroll" placeholder="Say Something"></textarea>
                    </div>
                    <div className="modal-footer">
                      <button type="button" className="post-share-btn" data-dismiss="modal">cancel</button>
                      <button type="button" className="post-share-btn">post</button>
                    </div>
                  </div>
                </div>
              </div>

            </div>
          </div>



          <div className="card">

            <div className="post-title d-flex align-items-center">

              <div className="profile-thumb">
                <a href="#">
                  <figure className="profile-thumb-middle">
                    <Image width="700" height="700" src="/images/profile/profile-small-1.jpg" alt="profile picture" />
                  </figure>
                </a>
              </div>


              <div className="posted-author">
                <h6 className="author"><a href="profile.html">merry watson</a></h6>
                <span className="post-time">20 min ago</span>
              </div>

              <div className="post-settings-bar">
                <span></span>
                <span></span>
                <span></span>
                <div className="post-settings arrow-shape">
                  <ul>
                    <li><button>copy link to adda</button></li>
                    <li><button>edit post</button></li>
                    <li><button>embed adda</button></li>
                  </ul>
                </div>
              </div>
            </div>

            <div className="post-content">
              <p className="post-desc">
                Many desktop publishing packages and web page editors now use Lorem Ipsum as their
                default model text, and a search for  will uncover many web sites still
                in their infancy.
              </p>
              <div className="post-thumb-gallery">
                <figure className="post-thumb img-popup">
                  <a href="/images/post/post-large-1.jpg">
                    <Image width="510" height="270" src="/images/post/post-1.jpg" alt="post image" />
                  </a>
                </figure>
              </div>
              <div className="post-meta">
                <button className="post-meta-like">
                  <i className="bi bi-heart-beat"></i>
                  <span>You and 201 people like this</span>
                  <strong>201</strong>
                </button>
                <ul className="comment-share-meta">
                  <li>
                    <button className="post-comment">
                      <i className="bi bi-chat-bubble"></i>
                      <span>41</span>
                    </button>
                  </li>
                  <li>
                    <button className="post-share">
                      <i className="bi bi-share"></i>
                      <span>07</span>
                    </button>
                  </li>
                </ul>
              </div>
            </div>
          </div>



          <div className="card">

            <div className="post-title d-flex align-items-center">

              <div className="profile-thumb">
                <a href="#">
                  <figure className="profile-thumb-middle">
                    <Image width="700" height="700" src="/images/profile/profile-small-9.jpg" alt="profile picture" />
                  </figure>
                </a>
              </div>


              <div className="posted-author">
                <h6 className="author"><a href="profile.html">Jon Wileyam</a></h6>
                <span className="post-time">15 min ago</span>
              </div>

              <div className="post-settings-bar">
                <span></span>
                <span></span>
                <span></span>
                <div className="post-settings arrow-shape">
                  <ul>
                    <li><button>copy link to adda</button></li>
                    <li><button>edit post</button></li>
                    <li><button>embed adda</button></li>
                  </ul>
                </div>
              </div>
            </div>

            <div className="post-content">
              <p className="post-desc pb-0">
                Many desktop publishing packages and web page editors now use Lorem Ipsum as their
                default model text, and a search for
              </p>
              <div className="post-meta">
                <button className="post-meta-like">
                  <i className="bi bi-heart-beat"></i>
                  <span>You and 206 people like this</span>
                  <strong>206</strong>
                </button>
                <ul className="comment-share-meta">
                  <li>
                    <button className="post-comment">
                      <i className="bi bi-chat-bubble"></i>
                      <span>41</span>
                    </button>
                  </li>
                  <li>
                    <button className="post-share">
                      <i className="bi bi-share"></i>
                      <span>07</span>
                    </button>
                  </li>
                </ul>
              </div>
            </div>
          </div>



          <div className="card">

            <div className="post-title d-flex align-items-center">

              <div className="profile-thumb">
                <a href="#">
                  <figure className="profile-thumb-middle">
                    <Image width="700" height="700" src="/images/profile/profile-small-29.jpg" alt="profile picture" />
                  </figure>
                </a>
              </div>


              <div className="posted-author">
                <h6 className="author"><a href="profile.html">william henry</a></h6>
                <span className="post-time">35 min ago</span>
              </div>

              <div className="post-settings-bar">
                <span></span>
                <span></span>
                <span></span>
                <div className="post-settings arrow-shape">
                  <ul>
                    <li><button>copy link to adda</button></li>
                    <li><button>edit post</button></li>
                    <li><button>embed adda</button></li>
                  </ul>
                </div>
              </div>
            </div>

            <div className="post-content">
              <p className="post-desc">
                Many desktop publishing packages and web page editors now use Lorem Ipsum as their
                default model text, and a search for  will uncover many web sites still
                in their infancy.
              </p>
              <div className="plyr__video-embed plyr-youtube">
                <iframe src="https://www.youtube.com/embed/WeA7edXsU40" width="510" height="270" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowFullScreen></iframe>
              </div>
              <div className="post-meta">
                <button className="post-meta-like">
                  <i className="bi bi-heart-beat"></i>
                  <span>You and 112 people like this</span>
                  <strong>112</strong>
                </button>
                <ul className="comment-share-meta">
                  <li>
                    <button className="post-comment">
                      <i className="bi bi-chat-bubble"></i>
                      <span>36</span>
                    </button>
                  </li>
                  <li>
                    <button className="post-share">
                      <i className="bi bi-share"></i>
                      <span>08</span>
                    </button>
                  </li>
                </ul>
              </div>
            </div>
          </div>



          <div className="card">

            <div className="post-title d-flex align-items-center">

              <div className="profile-thumb">
                <a href="#">
                  <figure className="profile-thumb-middle">
                    <Image width="700" height="700" src="/images/profile/profile-small-37.jpg" alt="profile picture" />
                  </figure>
                </a>
              </div>


              <div className="posted-author">
                <h6 className="author"><a href="profile.html">Kate Palson</a></h6>
                <span className="post-time">35 min ago</span>
              </div>

              <div className="post-settings-bar">
                <span></span>
                <span></span>
                <span></span>
                <div className="post-settings arrow-shape">
                  <ul>
                    <li><button>copy link to adda</button></li>
                    <li><button>edit post</button></li>
                    <li><button>embed adda</button></li>
                  </ul>
                </div>
              </div>
            </div>

            <div className="post-content">
              <p className="post-desc">
                Many desktop publishing packages and web page editors now use Lorem Ipsum as their
                default model text, and a search for  will uncover many web sites still
                in their infancy.
              </p>
              <div className="post-thumb-gallery img-gallery">
                <div className="row no-gutters">
                  <div className="col-8">
                    <figure className="post-thumb">
                      <a className="gallery-selector" href="/images/post/post-large-2.jpg">
                        <Image width="339" height="270" src="/images/post/post-2.jpg" alt="post image" />
                      </a>
                    </figure>
                  </div>
                  <div className="col-4">
                    <div className="row">
                      <div className="col-12">
                        <figure className="post-thumb">
                          <a className="gallery-selector" href="/images/post/post-large-3.jpg">
                            <Image width="170" height="90" src="/images/post/post-3.jpg" alt="post image" />
                          </a>
                        </figure>
                      </div>
                      <div className="col-12">
                        <figure className="post-thumb">
                          <a className="gallery-selector" href="/images/post/post-large-4.jpg">
                            <Image width="170" height="90" src="/images/post/post-4.jpg" alt="post image" />
                          </a>
                        </figure>
                      </div>
                      <div className="col-12">
                        <figure className="post-thumb">
                          <a className="gallery-selector" href="/images/post/post-large-5.jpg">
                            <Image width="170" height="90" src="/images/post/post-5.jpg" alt="post image" />
                          </a>
                        </figure>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="post-meta">
                <button className="post-meta-like">
                  <i className="bi bi-heart-beat"></i>
                  <span>You and 70 people like this</span>
                  <strong>70</strong>
                </button>
                <ul className="comment-share-meta">
                  <li>
                    <button className="post-comment">
                      <i className="bi bi-chat-bubble"></i>
                      <span>28</span>
                    </button>
                  </li>
                  <li>
                    <button className="post-share">
                      <i className="bi bi-share"></i>
                      <span>12</span>
                    </button>
                  </li>
                </ul>
              </div>
            </div>
          </div>



          <div className="card">

            <div className="post-title d-flex align-items-center">

              <div className="profile-thumb">
                <a href="#">
                  <figure className="profile-thumb-middle">
                    <Image width="700" height="700" src="/images/profile/profile-small-4.jpg" alt="profile picture" />
                  </figure>
                </a>
              </div>


              <div className="posted-author">
                <h6 className="author"><a href="profile.html">Robart Faul</a></h6>
                <span className="post-time">40 min ago</span>
              </div>

              <div className="post-settings-bar">
                <span></span>
                <span></span>
                <span></span>
                <div className="post-settings arrow-shape">
                  <ul>
                    <li><button>copy link to adda</button></li>
                    <li><button>edit post</button></li>
                    <li><button>embed adda</button></li>
                  </ul>
                </div>
              </div>
            </div>

            <div className="post-content">
              <p className="post-desc pb-0">
                Many desktop publishing packages and web page editors now use Lorem Ipsum as their
                default model text, and a search for Many desktop publishing packages and web page
                editors now use Lorem Ipsum as their default model text, and a search for Many
                desktop publishing duskam azer.
              </p>
              <div className="post-meta">
                <button className="post-meta-like">
                  <i className="bi bi-heart-beat"></i>
                  <span>You and 250 people like this</span>
                  <strong>250</strong>
                </button>
                <ul className="comment-share-meta">
                  <li>
                    <button className="post-comment">
                      <i className="bi bi-chat-bubble"></i>
                      <span>80</span>
                    </button>
                  </li>
                  <li>
                    <button className="post-share">
                      <i className="bi bi-share"></i>
                      <span>10</span>
                    </button>
                  </li>
                </ul>
              </div>
            </div>
          </div>



          <div className="card">

            <div className="post-title d-flex align-items-center">

              <div className="profile-thumb">
                <a href="#">
                  <figure className="profile-thumb-middle">
                    <Image width="700" height="700" src="/images/profile/profile-small-8.jpg" alt="profile picture" />
                  </figure>
                </a>
              </div>


              <div className="posted-author">
                <h6 className="author"><a href="profile.html">Halen Omaro</a></h6>
                <span className="post-time">45 min ago</span>
              </div>

              <div className="post-settings-bar">
                <span></span>
                <span></span>
                <span></span>
                <div className="post-settings arrow-shape">
                  <ul>
                    <li><button>copy link to adda</button></li>
                    <li><button>edit post</button></li>
                    <li><button>embed adda</button></li>
                  </ul>
                </div>
              </div>
            </div>

            <div className="post-content">
              <p className="post-desc">
                Many desktop publishing packages and web page editors now use Lorem Ipsum as their
                default model text, and a search for  will uncover many web sites still
                in their infancy.
              </p>
              <div className="plyr__video-embed plyr-video">
                <iframe src="https://www.youtube.com/embed/odUtqDz4lEk" width="510" height="270" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowFullScreen></iframe>
              </div>
              <p className="post-desc post-desc-secondary">
                Many desktop publishing packages and web page editors now use Lorem Ipsum as their
                default model text, and a search for
              </p>
              <div className="post-meta">
                <button className="post-meta-like">
                  <i className="bi bi-heart-beat"></i>
                  <span>You and 160 people like this</span>
                  <strong>160</strong>
                </button>
                <ul className="comment-share-meta">
                  <li>
                    <button className="post-comment">
                      <i className="bi bi-chat-bubble"></i>
                      <span>42</span>
                    </button>
                  </li>
                  <li>
                    <button className="post-share">
                      <i className="bi bi-share"></i>
                      <span>05</span>
                    </button>
                  </li>
                </ul>
              </div>
            </div>
          </div>



          <div className="card">

            <div className="post-title d-flex align-items-center">

              <div className="profile-thumb">
                <a href="#">
                  <figure className="profile-thumb-middle">
                    <Image width="700" height="700" src="/images/profile/profile-small-2.jpg" alt="profile picture" />
                  </figure>
                </a>
              </div>


              <div className="posted-author">
                <h6 className="author"><a href="profile.html">Mili Raoulin</a></h6>
                <span className="post-time">50 min ago</span>
              </div>

              <div className="post-settings-bar">
                <span></span>
                <span></span>
                <span></span>
                <div className="post-settings arrow-shape">
                  <ul>
                    <li><button>copy link to adda</button></li>
                    <li><button>edit post</button></li>
                    <li><button>embed adda</button></li>
                  </ul>
                </div>
              </div>
            </div>

            <div className="post-content">
              <p className="post-desc">
                Many desktop publishing packages and web page editors now use Lorem Ipsum as their
                default model text, and a search for  will uncover many web sites still
                in their infancy.
              </p>
              <div className="post-thumb-gallery img-gallery">
                <div className="row no-gutters">
                  <div className="col-6">
                    <figure className="post-thumb">
                      <a className="gallery-selector" href="/images/post/post-large-6.jpg">
                        <Image width="255" height="270" src="/images/post/post-6.jpg" alt="post image" />
                      </a>
                    </figure>
                  </div>
                  <div className="col-6">
                    <figure className="post-thumb">
                      <a className="gallery-selector" href="/images/post/post-large-7.jpg">
                        <Image width="255" height="270" src="/images/post/post-7.jpg" alt="post image" />
                      </a>
                    </figure>
                  </div>
                </div>
              </div>
              <div className="post-meta">
                <button className="post-meta-like">
                  <i className="bi bi-heart-beat"></i>
                  <span>You and 30 people like this</span>
                  <strong>30</strong>
                </button>
                <ul className="comment-share-meta">
                  <li>
                    <button className="post-comment">
                      <i className="bi bi-chat-bubble"></i>
                      <span>65</span>
                    </button>
                  </li>
                  <li>
                    <button className="post-share">
                      <i className="bi bi-share"></i>
                      <span>04</span>
                    </button>
                  </li>
                </ul>
              </div>
            </div>
          </div>



          <div className="card">

            <div className="post-title d-flex align-items-center">

              <div className="profile-thumb">
                <a href="#">
                  <figure className="profile-thumb-middle">
                    <Image width="700" height="700" src="/images/profile/profile-small-9.jpg" alt="profile picture" />
                  </figure>
                </a>
              </div>


              <div className="posted-author">
                <h6 className="author"><a href="profile.html">Jon Wileyam</a></h6>
                <span className="post-time">15 min ago</span>
              </div>

              <div className="post-settings-bar">
                <span></span>
                <span></span>
                <span></span>
                <div className="post-settings arrow-shape">
                  <ul>
                    <li><button>copy link to adda</button></li>
                    <li><button>edit post</button></li>
                    <li><button>embed adda</button></li>
                  </ul>
                </div>
              </div>
            </div>

            <div className="post-content">
              <p className="post-desc pb-0">
                Many desktop publishing packages and web page editors now use Lorem Ipsum as their
                default model text, and a search for
              </p>
              <div className="post-meta">
                <button className="post-meta-like">
                  <i className="bi bi-heart-beat"></i>
                  <span>You and 320 people like this</span>
                  <strong>320</strong>
                </button>
                <ul className="comment-share-meta">
                  <li>
                    <button className="post-comment">
                      <i className="bi bi-chat-bubble"></i>
                      <span>41</span>
                    </button>
                  </li>
                  <li>
                    <button className="post-share">
                      <i className="bi bi-share"></i>
                      <span>07</span>
                    </button>
                  </li>
                </ul>
              </div>
            </div>
          </div>

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



            <div className="card widget-item">
              <h4 className="widget-title">Advertizement</h4>
              <div className="widget-body">
                <div className="add-thumb">
                  <a href="#">
                    <Image width="700" height="700" src="/images/banner/advertise.jpg" alt="advertisement" />
                  </a>
                </div>
              </div>
            </div>



            <div className="card widget-item">
              <h4 className="widget-title">Friends Zone</h4>
              <div className="widget-body">
                <ul className="like-page-list-wrapper">
                  <li className="unorder-list">

                    <span className="profile-thumb">
                      <a href="#">
                        <figure className="profile-thumb-small">
                          <Image width="700" height="700" src="/images/profile/profile-small-33.jpg" alt="profile picture" />
                        </figure>
                      </a>
                    </span>


                    <span className="unorder-list-info">
                      <h3 className="list-title"><a href="#">Ammeya Jakson</a></h3>
                      <p className="list-subtitle"><a href="#">10 mutual</a></p>
                    </span>
                    <button className="like-button">
                      <Image width="20" height="20" className="heart" src="/images/icons/heart.png" alt="" />
                      <Image width="20" height="20" className="heart-color" src="/images/icons/heart-color.png" alt="" />
                    </button>
                  </li>
                  <li className="unorder-list">

                    <span className="profile-thumb">
                      <a href="#">
                        <figure className="profile-thumb-small">
                          <Image width="700" height="700" src="/images/profile/profile-small-30.jpg" alt="profile picture" />
                        </figure>
                      </a>
                    </span>


                    <span className="unorder-list-info">
                      <h3 className="list-title"><a href="#">Jashon Muri</a></h3>
                      <p className="list-subtitle"><a href="#">2 mutual</a></p>
                    </span>
                    <button className="like-button active">
                      <Image width="20" height="20" className="heart" src="/images/icons/heart.png" alt="" />
                      <Image width="20" height="20" className="heart-color" src="/images/icons/heart-color.png" alt="" />
                    </button>
                  </li>
                  <li className="unorder-list">

                    <span className="profile-thumb">
                      <a href="#">
                        <figure className="profile-thumb-small">
                          <Image width="700" height="700" src="/images/profile/profile-small-5.jpg" alt="profile picture" />
                        </figure>
                      </a>
                    </span>


                    <span className="unorder-list-info">
                      <h3 className="list-title"><a href="#">Rolin Theitar</a></h3>
                      <p className="list-subtitle"><a href="#">drama</a></p>
                    </span>
                    <button className="like-button">
                      <Image width="20" height="20" className="heart" src="/images/icons/heart.png" alt="" />
                      <Image width="20" height="20" className="heart-color" src="/images/icons/heart-color.png" alt="" />
                    </button>
                  </li>
                  <li className="unorder-list">

                    <span className="profile-thumb">
                      <a href="#">
                        <figure className="profile-thumb-small">
                          <Image width="700" height="700" src="/images/profile/profile-small-29.jpg" alt="profile picture" />
                        </figure>
                      </a>
                    </span>


                    <span className="unorder-list-info">
                      <h3 className="list-title"><a href="#">Active Mind</a></h3>
                      <p className="list-subtitle"><a href="#">fitness</a></p>
                    </span>
                    <button className="like-button">
                      <Image width="20" height="20" className="heart" src="/images/icons/heart.png" alt="" />
                      <Image width="20" height="20" className="heart-color" src="/images/icons/heart-color.png" alt="" />
                    </button>
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