import Link from "next/link"

export default function ProfileNav() {
  return (

    <div className="col-lg-6 col-md-6 offset-lg-1">
    <div className="profile-menu-wrapper">
      <div className="main-menu-inner header-top-navigation">
        <nav>
          <ul className="main-menu">
            <li><a href="#">timeline</a></li>
            <li><a href="#">about</a></li>
            <li><a href="historybet">Bet history</a></li>
            <li><a href="paymenthistory">Payment History</a></li>
            <li className="d-inline-block d-md-none"><a href="editprofile">edit profile</a></li>
          </ul>
        </nav>
      </div>
    </div>
  </div>
  
    )
}