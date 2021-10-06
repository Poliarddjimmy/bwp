import Link from "next/link"

export default function ProfileNav() {
  return (

    <div className="col-lg-6 col-md-6 offset-lg-1">
      <div className="profile-menu-wrapper">
        <div className="main-menu-inner header-top-navigation">
          <nav>
            <ul className="main-menu">
              <li><Link href="#">timeline</Link></li>
              <li><Link href="#">about</Link></li>
              <li><Link href="/historybet">Bet history</Link></li>
              <li><Link href="/paymenthistory">Payment History</Link></li>
              <li className="d-inline-block d-md-none"><Link href="/profile/edit">edit profile</Link></li>
            </ul>
          </nav>
        </div>
      </div>
    </div>

  )
}