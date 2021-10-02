import { useEffect, useState } from "react"
import Head from 'next/head'
import Image from 'next/image'
import Link from 'next/link'
import { logoutAction, searchUserAction } from '../../redux/actions/userActionCreators'
import { useSelector, useDispatch } from 'react-redux'
import { useRouter } from "next/dist/client/router"


const Header = () => {

  const dispatch = useDispatch()
  const router = useRouter()
  const [showMore, setShowMore] = useState(false)
  const { currentUser, users } = useSelector(state => state.user)
  const [searchUser, setUserSearch] = useState('')
  const [showSearchUserBox, setShowSearchUserBox] = useState(false)

  useEffect(() => {
    searchUser?.length >= 3 && dispatch(searchUserAction(searchUser))
  }, [dispatch, searchUser]);

  useEffect(() => {
    router.asPath && setShowSearchUserBox(false)
  }, [router.asPath])

  return (
    <>
      <Head>
        <title>One Bet Hub</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <header>
        <div className="header-top sticky bg-white d-none d-lg-block">
          <div className="container">
            <div className="row align-items-center">
              <div className="col-md-5">

                <div className="header-top-navigation">
                  <nav>
                    <ul>
                      <li className="active"><Link href="/">home</Link></li>
                      <li className="msg-trigger"><a className="msg-trigger-btn" href="#a">message</a>
                        <span className="message-dropdown" id="a">
                          <span className="dropdown-title">
                            <p className="recent-msg">recent message</p>
                            <span className="message-btn-group">
                              <button>New group</button>
                              <button>New Message</button>
                            </span>
                          </span>
                          <ul className="dropdown-msg-list">
                            <li className="msg-list-item d-flex justify-content-between">

                              <span className="profile-thumb">
                                <figure className="profile-thumb-middle">
                                  <Image width="700" height="700" src="/images/profile/profile-small-3.jpg" alt="profile picture" />
                                </figure>
                              </span>

                              <span className="msg-content">
                                <h6 className="author"><a href="profile.html">Mili Raoulin</a></h6>
                                <p>Many desktop publishing packages and web page editors now use Lorem Ipsum as their default</p>
                              </span>

                              <span className="msg-time">
                                <p>25 Apr 2019</p>
                              </span>

                            </li>
                            <li className="msg-list-item d-flex justify-content-between">

                              <span className="profile-thumb">
                                <figure className="profile-thumb-middle">
                                  <Image width="700" height="700" src="/images/profile/profile-small-4.jpg" alt="profile picture" />
                                </figure>
                              </span>

                              <span className="msg-content">
                                <h6 className="author"><a href="profile.html">Jhon Doe</a></h6>
                                <p>Many desktop publishing packages and web page editors now use Lorem Ipsum as their default</p>
                              </span>

                              <span className="msg-time">
                                <p>15 May 2019</p>
                              </span>

                            </li>
                            <li className="msg-list-item d-flex justify-content-between">

                              <span className="profile-thumb">
                                <figure className="profile-thumb-middle">
                                  <Image width="700" height="700" src="/images/profile/profile-small-5.jpg" alt="profile picture" />
                                </figure>
                              </span>

                              <span className="msg-content">
                                <h6 className="author"><a href="profile.html">Jon Wileyam</a></h6>
                                <p>Many desktop publishing packages and web page editors now use Lorem Ipsum as their default</p>
                              </span>

                              <span className="msg-time">
                                <p>20 Jun 2019</p>
                              </span>

                            </li>
                          </ul>
                          <span className="msg-dropdown-footer">
                            <button>See all in messenger</button>
                            <button>Mark All as Read</button>
                          </span>
                        </span>
                      </li>
                      <li className="notification-trigger"><a className="msg-trigger-btn" href="#b">notification</a>
                        <span className="message-dropdown" id="b">
                          <span className="dropdown-title">
                            <p className="recent-msg">Notification</p>
                            <button>
                              <i className="flaticon-settings"></i>
                            </button>
                          </span>
                          <ul className="dropdown-msg-list">
                            <li className="msg-list-item d-flex justify-content-between">

                              <span className="profile-thumb">
                                <figure className="profile-thumb-middle">
                                  <Image width="700" height="700" src="/images/profile/profile-small-3.jpg" alt="profile picture" />
                                </figure>
                              </span>

                              <span className="msg-content notification-content">
                                <a href="profile.html">Robert Faul</a>,
                                <a href="profile.html">william jhon</a>
                                <p>and 35 other people reacted to your photo</p>
                              </span>

                              <span className="msg-time">
                                <p>25 Apr 2019</p>
                              </span>

                            </li>
                            <li className="msg-list-item d-flex justify-content-between">

                              <span className="profile-thumb">
                                <figure className="profile-thumb-middle">
                                  <Image width="700" height="700" src="/images/profile/profile-small-4.jpg" alt="profile picture" />
                                </figure>
                              </span>

                              <span className="msg-content notification-content">
                                <a href="profile.html">Robert mushkil</a>,
                                <a href="profile.html">Terry jhon</a>
                                <p>and 20 other people reacted to your photo</p>
                              </span>

                              <span className="msg-time">
                                <p>20 May 2019</p>
                              </span>

                            </li>
                            <li className="msg-list-item d-flex justify-content-between">

                              <span className="profile-thumb">
                                <figure className="profile-thumb-middle">
                                  <Image width="700" height="700" src="/images/profile/profile-small-6.jpg" alt="profile picture" />
                                </figure>
                              </span>

                              <span className="msg-content notification-content">
                                <a href="profile.html">Horijon Mbala</a>,
                                <a href="profile.html">Bashu jhon</a>
                                <p>and 55 other people reacted to your post</p>
                              </span>

                              <span className="msg-time">
                                <p>15 Jan 2019</p>
                              </span>

                            </li>
                          </ul>
                          <span className="msg-dropdown-footer">
                            <button>See all in messenger</button>
                            <button>Mark All as Read</button>
                          </span>
                        </span>
                      </li>
                    </ul>
                  </nav>
                </div>

              </div>

              <div className="col-md-2">

                <div className="brand-logo text-center">
                  <Link href={`/`} passHref>
                    <Image width="20" height="20" src="/images/logo/logo.png" alt="brand logo" />
                  </Link>
                </div>

              </div>

              <div className="col-md-5">
                <div className="header-top-right d-flex align-items-center justify-content-end">

                  <div className="header-top-search">
                    <form className="top-search-box">
                      <input type="text" placeholder="Search" onFocus={() => setShowSearchUserBox(true)} className="top-search-field" onChange={(event) => setUserSearch(event.target.value)} />
                      <span className="top-search-btn"><i className="flaticon-search"></i></span>
                    </form>
                    {showSearchUserBox &&
                      <div className="bg-white position-absolute w-50 search-user-result mt-3 shadow-lg border">
                        <strong className="p-2">Search result</strong>
                        <hr className="m-0" />
                        <div className="p-2">
                          <ul className="like-page-list-wrapper">
                            {users?.map(user =>
                              <li className="unorder-list" key={user.id}>
                                <Link href={`/profile?user=${user.id}`} passHref>
                                  <span className=" d-flex align-items-center">
                                    <span className="profile-thumb">
                                      <a href="#">
                                        <figure className="profile-thumb-small">
                                          <Image width="700" height="700" src="/images/profile/profile-small-28.jpg" alt="profile picture" />
                                        </figure>
                                      </a>
                                    </span>
                                    <span className="unorder-list-info">
                                      <h3 className="list-title"><a href="#">{user.name}</a></h3>
                                    </span>
                                  </span>
                                </Link>
                              </li>
                            )}
                          </ul>
                        </div>
                      </div>
                    }
                  </div>

                  <div className="profile-setting-box">
                    <div className="profile-thumb-small">
                      <span onClick={() => setShowMore(!showMore)} className="profile-triger cursor-pointer">
                        <figure>
                          <Image width="700" height="700" src="/images/profile/profile-small-1.jpg" alt="profile picture" />
                        </figure>
                      </span>
                      <div className={`profile-dropdown d-${showMore ? "inline" : "none"}`} id="pf">
                        <div className="profile-head">
                          <h5 className="name"><a href={`/profile?user=${currentUser?.id}`}>{currentUser?.name}</a></h5>
                          <a className="mail" href={`/profile?user=${currentUser?.id}`}>{currentUser?.phone}</a>
                        </div>
                        <div className="profile-body">
                          <ul>
                            <li><a href={`/profile?user=${currentUser?.id}`}><i className="flaticon-user"></i>Profile</a></li>
                            <li><a href="#"><i className="flaticon-message"></i>Inbox</a></li>
                            <li><a href="#"><i className="flaticon-document"></i>Activity</a></li>
                          </ul>
                          <ul>
                            <li onClick={() => dispatch(logoutAction())}><a className="cursor-pointer"><i className="flaticon-unlock"></i>Log out</a></li>
                          </ul>
                        </div>
                      </div>
                    </div>
                  </div>

                </div>
              </div>
            </div>
          </div>
        </div>
      </header>



      <header>
        <div className="mobile-header-wrapper sticky d-block d-lg-none">
          <div className="mobile-header position-relative ">
            <div className="mobile-logo">
              <Link href="/" passHref>
                <Image width="700" height="700" src="/images/logo/logo-white.png" alt="logo" />
              </Link>
            </div>
            <div className="mobile-menu w-100">
              <ul>
                <li>
                  <button className="notification request-trigger"><i className="flaticon-users"></i>
                    <span>03</span>
                  </button>
                  <ul className="frnd-request-list">
                    <li>
                      <span className="frnd-request-member">
                        <figure className="request-thumb">
                          <a href="profile.html">
                            <Image width="700" height="700" src="/images/profile/profile-midle-1.jpg" alt="proflie author" />
                          </a>
                        </figure>
                        <span className="frnd-content">
                          <h6 className="author"><a href="profile.html">merry watson</a></h6>
                          <p className="author-subtitle">Works at HasTech</p>
                          <span className="request-btn-inner">
                            <button className="frnd-btn">confirm</button>
                            <button className="frnd-btn delete">delete</button>
                          </span>
                        </span>
                      </span>
                    </li>
                    <li>
                      <span className="frnd-request-member">
                        <figure className="request-thumb">
                          <a href="profile.html">
                            <Image width="700" height="700" src="/images/profile/profile-midle-2.jpg" alt="proflie author" />
                          </a>
                        </figure>
                        <span className="frnd-content">
                          <h6 className="author"><a href="profile.html">merry watson</a></h6>
                          <p className="author-subtitle">Works at HasTech</p>
                          <span className="request-btn-inner">
                            <button className="frnd-btn">confirm</button>
                            <button className="frnd-btn delete">delete</button>
                          </span>
                        </span>
                      </span>
                    </li>
                    <li>
                      <span className="frnd-request-member">
                        <figure className="request-thumb">
                          <a href="profile.html">
                            <Image width="700" height="700" src="/images/profile/profile-midle-3.jpg" alt="proflie author" />
                          </a>
                        </figure>
                        <span className="frnd-content">
                          <h6 className="author"><a href="profile.html">merry watson</a></h6>
                          <p className="author-subtitle">Works at HasTech</p>
                          <span className="request-btn-inner">
                            <button className="frnd-btn">confirm</button>
                            <button className="frnd-btn delete">delete</button>
                          </span>
                        </span>
                      </span>
                    </li>
                  </ul>
                </li>
                <li>
                  <button className="notification"><i className="flaticon-notification"></i>
                    <span>03</span>
                  </button>
                </li>
                <li>
                  <button className="chat-trigger notification"><i className="flaticon-chats"></i>
                    <span>04</span>
                  </button>
                  <span className="mobile-chat-box">
                    <span className="live-chat-title">

                      <span className="profile-thumb">
                        <a href="profile.html">
                          <figure className="profile-thumb-small profile-active">
                            <Image width="700" height="700" src="/images/profile/profile-small-15.jpg" alt="profile picture" />
                          </figure>
                        </a>
                      </span>

                      <span className="posted-author">
                        <h6 className="author"><a href="profile.html">Robart Marloyan</a></h6>
                        <span className="active-pro">active now</span>
                      </span>
                      <span className="live-chat-settings ml-auto">
                        <button className="chat-settings"><Image width="700" height="700" src="/images/icons/settings.png" alt="" /></button>
                        <button className="close-btn"><Image width="700" height="700" src="/images/icons/close.png" alt="" /></button>
                      </span>
                    </span>
                    <span className="message-list-inner">
                      <ul className="message-list custom-scroll">
                        <li className="text-friends">
                          <p>Many desktop publishing packages and web page editors now use Lorem Ipsum as their default model text</p>
                          <span className="message-time">10 minute ago</span>
                        </li>
                        <li className="text-author">
                          <p>Many desktop publishing packages and web page editors</p>
                          <span className="message-time">5 minute ago</span>
                        </li>
                        <li className="text-friends">
                          <p>packages and web page editors </p>
                          <span className="message-time">2 minute ago</span>
                        </li>
                        <li className="text-friends">
                          <p>Many desktop publishing packages and web page editors now use Lorem Ipsum as their default model text</p>
                          <span className="message-time">10 minute ago</span>
                        </li>
                        <li className="text-author">
                          <p>Many desktop publishing packages and web page editors</p>
                          <span className="message-time">5 minute ago</span>
                        </li>
                        <li className="text-friends">
                          <p>packages and web page editors </p>
                          <span className="message-time">2 minute ago</span>
                        </li>
                      </ul>
                    </span>
                    <span className="chat-text-field mob-text-box">
                      <textarea className="live-chat-field custom-scroll" placeholder="Text Message"></textarea>
                      <button className="chat-message-send" type="submit" value="submit">
                        <Image width="700" height="700" src="/images/icons/plane.png" alt="" />
                      </button>
                    </span>
                  </span>
                </li>
                <li>
                  <button className="search-trigger">
                    <i className="search-icon flaticon-search"></i>
                    <i className="close-icon flaticon-cross-out"></i>
                  </button>
                  <span className="mob-search-box">
                    <form className="mob-search-inner">
                      <input type="text" placeholder="Search Here" className="mob-search-field" />
                      <button className="mob-search-btn"><i className="flaticon-search"></i></button>
                    </form>
                  </span>
                </li>
              </ul>
            </div>
            <div className="mobile-header-profile">

              <div className="profile-thumb profile-setting-box">
                <Link href="/" className="profile-triger" passHref>
                  <figure className="profile-thumb-middle">
                    <Image width="700" height="700" src="/images/profile/profile-small-1.jpg" alt="profile picture" />
                  </figure>
                </Link>
                <div className="profile-dropdown text-left">
                  <div className="profile-head">
                    <h5 className="name"><a href="#">Madison Howard</a></h5>
                    <a className="mail" href="#">mailnam@mail.com</a>
                  </div>
                  <div className="profile-body">
                    <ul>
                      <li><a href="profile.html"><i className="flaticon-user"></i>Profile</a></li>
                      <li><a href="#"><i className="flaticon-message"></i>Inbox</a></li>
                      <li><a href="#"><i className="flaticon-document"></i>Activity</a></li>
                    </ul>
                    <ul>
                      <li>
                        <Link href="/auth/signin" passHref><span><i className="flaticon-settings"></i>Setting</span></Link>
                      </li>
                      <li onClick={() => dispatch(logoutAction())}><a><i className="flaticon-unlock"></i>Log out</a></li>
                    </ul>
                  </div>
                </div>
              </div>

            </div>
          </div>
        </div>
      </header>
    </>
  )
}
export default Header